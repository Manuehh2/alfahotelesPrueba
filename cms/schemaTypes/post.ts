// Registrar este tipo en schema.types del proyecto Sanity Studio.
import { defineArrayMember, defineField, defineType } from 'sanity';

export const post = defineType({
  name: 'post',
  title: 'Artículo',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Título', type: 'string', validation: (rule) => rule.required() }),
    defineField({ name: 'slug', title: 'Dirección del artículo', type: 'slug', options: { source: 'title' }, validation: (rule) => rule.required() }),
    defineField({ name: 'publishedAt', title: 'Fecha de publicación', type: 'datetime', validation: (rule) => rule.required() }),
    defineField({ name: 'category', title: 'Categoría', type: 'string' }),
    defineField({ name: 'excerpt', title: 'Resumen', type: 'text', rows: 3, validation: (rule) => rule.required().max(220) }),
    defineField({ name: 'cover', title: 'Imagen de portada', type: 'image', options: { hotspot: true }, validation: (rule) => rule.required() }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [defineArrayMember({ type: 'block' }), defineArrayMember({ type: 'image', options: { hotspot: true }, fields: [defineField({ name: 'alt', title: 'Texto alternativo', type: 'string' })] })],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: { select: { title: 'title', subtitle: 'publishedAt', media: 'cover' } },
});
