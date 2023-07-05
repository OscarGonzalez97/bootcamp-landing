
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
            validation: Rule => Rule.required().error("Debes ingresar la fecha de inicio")
        }),
        defineField({
            name: 'fechaHasta',
            title: 'Fecha Hasta',
            type: 'date',
            validation: Rule => Rule.required().error("Debes ingresar la fecha de fin")
        }),
        defineField({
            name: 'curso',
            title: 'Curso',
            type: 'reference',
            to: [{ type: 'curso' }],
            validation: Rule => Rule.required().error("Debes seleccionar un curso")
        }),
        defineField({
            name: 'imagen',
            title: 'Imagen',
            type: 'image',
            options: {
                hotspot: true
            }
        }),
        defineField({
            name: 'proyectos',
            title: 'Proyectos',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'proyecto' } }],
        }),
    ],
    preview: {
        select: {
            title: 'curso.titulo',
            subtitle: 'fechaDesde',
        },
    },
})