export default {
  name: 'noticia', title: 'Noticia', type: 'document',
  fields: [
    { name: 'titulo', title: 'Título', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'titulo' } },
    { name: 'imagen', title: 'Imagen Principal', type: 'image', options: { hotspot: true } },
    { name: 'categoria', title: 'Categoría', type: 'string', options: { list: ['Nacional','Regional','Internacional','Entrevista','Infraestructura','Formación','Destacado'] } },
    { name: 'extracto', title: 'Extracto', type: 'text', rows: 3 },
    { name: 'cuerpo', title: 'Contenido', type: 'array', of: [{ type: 'block' },{ type: 'image', options: { hotspot: true } }] },
    { name: 'autor', title: 'Autor', type: 'string' },
    { name: 'publicadoEn', title: 'Fecha de Publicación', type: 'datetime' },
    { name: 'destacada', title: '¿Noticia Destacada?', type: 'boolean', initialValue: false },
  ],
  preview: { select: { title: 'titulo', subtitle: 'categoria', media: 'imagen' } },
}
