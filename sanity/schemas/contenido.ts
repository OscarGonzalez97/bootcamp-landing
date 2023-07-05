import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'contenido',
    title: 'Contenido',
    type: 'document',
    fields: [
        defineField({
            name: 'descripcion',
            title: 'Descripcion',
            type: 'string',
            validation: Rule => Rule.required().error("Debes ingresar la descripción del contenido")
        }),
    ],

    preview: {
        select: {
            title: 'descripcion',
        },
    },
})
