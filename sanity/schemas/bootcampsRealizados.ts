
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'bootcampRealizado',
    title: 'Bootcamp Realizado',
    type: 'document',
    fields: [
        defineField({
            name: 'fechaDesde',
            title: 'Fecha Desde',
            type: 'date',
        }),
        defineField({
            name: 'fechaHasta',
            title: 'Fecha Hasta',
            type: 'date',
        }),
        defineField({
            name: 'curso',
            title: 'Curso',
            type: 'curso',
        }),
        defineField({
            name: 'imagen',
            title: 'Imagen',
            type: 'image',
            options:{
                hotspot: true
            }
        }),
        defineField({
            name: 'proyectos',
            title: 'Proyectos',
            type: 'array',
            of: [{type: 'reference', to: {type: 'proyecto'}}],
          }),
    ]
})