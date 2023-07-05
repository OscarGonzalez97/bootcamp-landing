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
            validation: Rule => Rule.required().error("Debes ingresar el titulo del proyecto")
        }),
        defineField({
            name: 'descripcion',
            title: 'Descripcion',
            type: 'text',
            validation: Rule => Rule.required().warning("Idealmente los proyectos tienen una descripción")
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