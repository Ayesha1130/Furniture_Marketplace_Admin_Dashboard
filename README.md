# Live Marketplace Furniture Store

This is an e-commerce platform designed to offer a seamless shopping experience for furniture. Built using **Next.js**, **TypeScript**, and **Sanity CMS** for backend management, this platform allows users to browse, purchase, and manage furniture items. It includes features like product saving templates, order tracking, and a clean, intuitive user interface.

## Project Overview

The **Live Marketplace Furniture Store** offers users the ability to explore and purchase a wide range of furniture products. Customers can add items to their cart, proceed to checkout, and manage their orders with ease. The platform integrates **Stripe** for secure payments and **ShipEngine** for efficient shipment management. The platform also includes an **Admin Route** for managing products, orders, and customer interactions.

## Key Features:

- **User Interface**: A modern, clean, and responsive UI for an excellent user experience.
- **Product Search**: An intuitive search bar helps users find furniture products quickly by name or category.
- **Category Filter**: Users can filter products by categories like "Living Room," "Bedroom," "Office," etc.
- **Add to Cart**: Products can be added to the cart, and the quantity can be viewed through the cart icon.
- **Templates**: Users can create and save customizable templates for their favorite furniture items for future reference.
- **Promotions**: Active offers and discounts are displayed prominently on the homepage.
- **Product Details**: Each product has a dedicated page with detailed specifications, user reviews, and available options.
- **Product Comparison**: A feature for comparing multiple products side by side, based on key features and reviews.

## Admin Route Features:

- **Product Management**: Admins can add, edit, and delete products.
- **Order Management**: Admins can create and manage customer orders.
- **Comments Management**: Admins can moderate and manage customer reviews and comments.

## Checkout Process:

- Users are prompted to complete a shipment form with their details before placing an order.
- After the order is confirmed, users receive delivery timing details and confirmation information.
- **FAQs**: A page addressing common customer questions.
- **Contact Form**: A form for users to reach the company for assistance.
- **About Page**: Information about the company, its mission, and its team.

## Customer Sidebar:

- **Order History**: Customers can view their past orders and track their delivery.
- **Profile Management**: Users can update their contact information and preferences.
- **Saved Templates**: Quick access to saved favorite products or templates.

## Tech Stack

- **Frontend**: Next.js, TypeScript, Redux, Tailwind CSS
- **Backend**: Sanity CMS
- **Payment**: Stripe API
- **Shipment**: ShipEngine API

## Features Breakdown:

### Home Page

- **Banner for Offers**: Displaying active offers and discounts.
- **Product Search**: Search bar for easy navigation by product name or category.
- **Category Filter**: Filter products based on categories for better navigation.
- **Cart Icon**: A cart icon showing the number of items added to the cart.

### Product Pages

- **Detailed Product Information**: In-depth product details, features, and variations.
- **User Reviews**: Customers can read reviews from other users.
- **Compare Products**: A page where users can compare multiple products by price, features, and reviews.

### Checkout

- **Shipment Form**: Users will provide shipping details to complete the order.
- **Order Confirmation**: Upon payment, users get order confirmation and estimated delivery details.

### Admin Route

- **Product Management**: Admins can add, edit, or delete products from the store.
- **Order Creation**: Admins can manually create and manage customer orders.
- **Comment Moderation**: Admins can approve or remove comments/reviews left by customers.

### Customer Sidebar

- **Order History**: A section where customers can view all their previous orders.
- **Profile Management**: Customers can update their personal details and preferences.
- **Saved Templates**: Users can access their saved products for easy future reference.

### Additional Pages

- **FAQs Page**: Answers to common questions.
- **Contact Form**: Users can easily contact the company for support.
- **About Page**: Information about the company's mission and team.

## Roadmap

- **User Authentication**: Adding user authentication features for a personalized experience.
- **Invoice System**: Integration of an invoicing system for better payment tracking.
- **Order Tracking**: Implement functionality for users to track their orders in real-time via ShipEngine.

## Folder Structure

Here's the general structure of the project:

. ├── components/ # Reusable UI components ├── app/ # App for routing (e.g., /checkout, /product) ├── public/ # Public assets (e.g., images) ├── sanity/ # Sanity CMS configurations and schemas ├── utils/ # Utility functions and helpers ├── admin/ # Admin route for managing products, orders, comments └── .env.local # Environment variables (for API keys)


## Acknowledgments

- **Next.js**: A React framework for building server-side rendered applications.
- **Sanity CMS**: A headless CMS used for managing product data.
- **Stripe**: A secure payment gateway for online transactions.
- **ShipEngine**: A shipping API for handling delivery services.




This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
"# Nextjs-Hackathon-Challenge" 
"# Final_Hackathon_03" 
