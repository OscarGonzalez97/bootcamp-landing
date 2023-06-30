import { type SchemaTypeDefinition } from 'sanity'
import curso from './schemas/curso'
import modulo from './schemas/modulo'
import bootcampsRealizados from './schemas/bootcampsRealizados'
import proyecto from './schemas/proyecto'
import contenido from './schemas/contenido'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [curso, modulo, bootcampsRealizados, proyecto, contenido],
}
