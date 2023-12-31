import { defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().error("Debe ingresar el titulo del blog"),
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'A short description or summary of the blog post.',
      validation: (Rule) => Rule.required().error("Debe ingresar la descripcion"),
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
              be they blind, color-blind, low-sighted; 
              alternative text is of great help for those 
              people that can rely on it to have a good idea of 
              what's on your page.`,
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.required().error("Debe ingresar el contenido del blog"),
    },
    {
      name: 'publishedAt',
      type: 'date',
      title: 'Published at',
      validation: (Rule) => Rule.required().error("Debe ingresar la fecha de publicacion"),
    },
    {
      name: 'autor',
      title: 'Autor',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'autor' } }],
      validation: (Rule) => Rule.required().error("Debe elegir el autor del blog"),
    },
    {
      name: 'slug',
      title: 'Slug/URL',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required().error("Debe ingresar el slug para la url"),
    },
  ],
});
