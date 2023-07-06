import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'autor',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'nombre',
      title: 'Nombre',
      type: 'string',
      validation: Rule => Rule.required().error("Debes ingresar el nombre del autor")
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
      validation: Rule => Rule.required().warning("Idealmente el autor debe tener una imagen")
    }),
  ],

  preview: {
    select: {
      title: 'nombre',
      subtitle: 'descripcion',
    },
  },
})
