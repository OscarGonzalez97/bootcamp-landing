import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'curso',
  title: 'Curso',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Titulo',
      type: 'string',
    }),
    defineField({
        name: 'descripcion',
        title: 'Descripcion',
        type: 'text',
      }),
    defineField({
      name: 'slug',
      title: 'Slug/URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'imagen',
        title: 'Imagen',
        type: 'image',
        options: {
          hotspot: true,
        },
    }),
    defineField({
      name: 'modulos',
      title: 'Modulos',
      type: 'array',
      of: [{type: 'reference', to: {type: 'modulo'}}],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
    defineField({
      name: 'urlIcono',
      title: 'UrlIcono',
      type: 'string',
    }),
  ],

  preview: {
    select: {
      title: 'titulo',
      subtitle: 'descripcion',
    },
  },
})
