'use server';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia', // Ensure the correct version of the API
});

export async function POST(req: Request) {
  try {
    const body = await req.json(); // Parse JSON body
    const { products } = body; // Expected structure for the product

    // Log the incoming request data for debugging purposes
    console.log('Received product data:', products);

    if (!products || !Array.isArray(products)) {
      throw new Error('Invalid product data');
    }

    // Create line items for checkout session
    const lineItems = products.map((item: any) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name, // Product name
        },
        unit_amount: item.price * 100, // Convert to cents
      },
      quantity: item.quantity || 1, // Default quantity to 1
    }));

    // Create the checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${req.headers.get('origin')}/success`,
      cancel_url: `${req.headers.get('origin')}/cancel`,
    });

    // Return the session URL to redirect the user
    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error('Error during checkout session creation:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// Method Not Allowed for other HTTP methods
export async function GET() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}