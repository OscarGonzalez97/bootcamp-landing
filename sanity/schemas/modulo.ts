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
      validation: Rule => Rule.required().error("Debes ingresar el titulo del módulo")
    }),
    defineField({
        name: 'duracion',
        title: 'Duración aprox.',
        type: 'number',
        validation: Rule => Rule.required().warning("Los modulos deberian tener una duración aproximada")
    }),
    defineField({
      name: 'contenidos',
      title: 'Contenidos',
      type: 'array',
      of: [{type: 'reference', to: {type: 'contenido'}}],
      validation: Rule => Rule.required().warning("Los modulos deberian tener al menos un contenido")
    }),
  ],

  preview: {
    select: {
      title: 'titulo',
      subtitle: 'duracion',
    },
  },
})
