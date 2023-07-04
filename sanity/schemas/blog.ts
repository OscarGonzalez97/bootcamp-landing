import {  defineType } from 'sanity';

export default defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'A short description or summary of the blog post.',
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
            },
          ],
        },
      ],
    },
    {
      name: 'publishedAt',
      type: 'date',
      title: 'Published at',
    },
    {
      name: 'autor',
      title: 'Autor',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'autor' } }],
    },
    { 
    name: 'slug',
    title: 'Slug/URL',
    type: 'slug',
    options: {
      source: 'title',
      maxLength: 96,
    },
  },
  ],
});
