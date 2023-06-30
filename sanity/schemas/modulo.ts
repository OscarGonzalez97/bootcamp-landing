import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'modulo',
  title: 'Modulo',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Titulo',
      type: 'string',
    }),
    defineField({
        name: 'duracion',
        title: 'Duración aprox.',
        type: 'number',
    }),
    defineField({
      name: 'contenidos',
      title: 'Contenidos',
      type: 'array',
      of: [{type: 'reference', to: {type: 'contenido'}}],
    }),
  ],

  preview: {
    select: {
      titulo: 'titulo',
      duracion: 'duracion',
    },
  },
})
