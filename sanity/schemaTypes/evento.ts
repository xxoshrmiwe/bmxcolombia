export default {
  name: 'evento', title: 'Evento', type: 'document',
  fields: [
    { name: 'nombre', title: 'Nombre del Evento', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'nombre' } },
    { name: 'tipo', title: 'Tipo de Evento', type: 'string', options: { list: ['Nacional','Regional','Copa UCI','Internacional','Liga'] } },
    { name: 'fecha', title: 'Fecha', type: 'date', validation: (Rule: any) => Rule.required() },
    { name: 'fechaFin', title: 'Fecha Fin', type: 'date' },
    { name: 'ciudad', title: 'Ciudad', type: 'string' },
    { name: 'departamento', title: 'Departamento', type: 'string' },
    { name: 'pista', title: 'Nombre de la Pista', type: 'string' },
    { name: 'descripcion', title: 'Descripción', type: 'text', rows: 3 },
    { name: 'inscripcionesAbiertas', title: '¿Inscripciones abiertas?', type: 'boolean', initialValue: false },
    { name: 'urlInscripcion', title: 'URL de Inscripción', type: 'url' },
  ],
  preview: { select: { title: 'nombre', subtitle: 'ciudad' } },
}
