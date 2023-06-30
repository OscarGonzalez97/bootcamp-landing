import { type SchemaTypeDefinition } from 'sanity'
import curso from './schemas/curso'
import modulo from './schemas/modulo'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [curso, modulo],
}
