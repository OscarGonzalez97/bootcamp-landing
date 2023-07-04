import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'autor',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
    }),
    defineField({
        name: 'descripcion',
        title: 'Descripcion',
        type: 'text',
      }),
    defineField({
        name: 'avatar',
        title: 'Avatar',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
  ],

  preview: {
    select: {
      title: 'nombre',
      subtitle: 'descripcion',
    },
  },
})
