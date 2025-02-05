import { type SchemaTypeDefinition } from 'sanity'
import { product } from './products'
import { orderSchema } from './orders'
import { userSchema } from './user'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,orderSchema, userSchema,],
}
