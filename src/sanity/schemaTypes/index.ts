import { type SchemaTypeDefinition } from 'sanity'
import { Category } from './category'
import { product } from './products'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Category],
}
