export default {
  name: 'resultado', title: 'Resultado', type: 'document',
  fields: [
    { name: 'evento', title: 'Evento', type: 'reference', to: [{ type: 'evento' }], validation: (Rule: any) => Rule.required() },
    { name: 'piloto', title: 'Piloto', type: 'reference', to: [{ type: 'piloto' }], validation: (Rule: any) => Rule.required() },
    { name: 'categoria', title: 'Categoría', type: 'string' },
    { name: 'posicion', title: 'Posición Final', type: 'number' },
    { name: 'puntos', title: 'Puntos Obtenidos', type: 'number' },
    { name: 'tiempo', title: 'Tiempo', type: 'string' },
  ],
  preview: { select: { title: 'posicion', subtitle: 'categoria' } },
}
