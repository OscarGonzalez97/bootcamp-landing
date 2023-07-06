import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'curso',
  title: 'Curso',
  type: 'document',
  fields: [
    defineField({
      name: 'titulo',
      title: 'Titulo',
      type: 'string',
      validation: Rule => Rule.required().error("Debes ingresar el titulo del curso")
    }),
    defineField({
      name: 'descripcion',
      title: 'Descripcion',
      type: 'text',
      validation: Rule => [
        Rule.required().error("Debes ingresar la descripción del curso"),
        // Rule.max(350).error('La descripción puede tener máximo 350 caracteres')
      ]
    }),
    defineField({
      name: 'slug',
      title: 'Slug/URL',
      type: 'slug',
      options: {
        source: 'titulo',
        maxLength: 96,
      },
      validation: Rule => Rule.required().error("Debes ingresar el slug para la url")
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
      of: [{ type: 'reference', to: { type: 'modulo' } }],
      validation: Rule => Rule.required().warning("Los cursos deberian tener al menos un modulo")
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
      validation: Rule => Rule.required().error("Debes ingresar un icono para el curso")
    }),
  ],

  preview: {
    select: {
      title: 'titulo',
      subtitle: 'descripcion',
    },
  },
})
