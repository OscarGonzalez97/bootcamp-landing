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
        }),
    ],

    preview: {
        select: {
            descripcion: 'descripcion',
        },
    },
})
