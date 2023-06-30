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
  ],

  preview: {
    select: {
      titulo: 'titulo',
      duracion: 'duracion',
    },
  },
})
