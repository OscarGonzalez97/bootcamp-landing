import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'proyecto',
    title: 'Proyecto',
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
            name: 'imagen',
            title: 'Imagen',
            type: 'array',
            of: [{type: 'image', options:{
                hotspot: true
            }}],
        }),
    ],

    preview: {
        select: {
        title: 'titulo',
        subtitle: 'descripcion',
        },
    },
})