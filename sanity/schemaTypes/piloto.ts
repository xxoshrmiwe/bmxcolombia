export default {
  name: 'piloto', title: 'Piloto', type: 'document',
  fields: [
    { name: 'nombre', title: 'Nombre Completo', type: 'string', validation: (Rule: any) => Rule.required() },
    { name: 'slug', title: 'Slug (URL)', type: 'slug', options: { source: 'nombre' } },
    { name: 'foto', title: 'Foto del Piloto', type: 'image', options: { hotspot: true } },
    { name: 'numero', title: 'Número de Dorsal', type: 'number' },
    { name: 'departamento', title: 'Departamento', type: 'string', options: { list: ['Bogotá D.C.','Antioquia','Valle del Cauca','Cundinamarca','Santander','Atlántico','Risaralda','Caldas','Nariño','Boyacá','Tolima','Meta','Huila','Córdoba','Otro'] } },
    { name: 'categoria', title: 'Categoría', type: 'string', options: { list: ['Elite Hombres','Elite Mujeres','Junior Hombres','Junior Mujeres','Cruiser','Infantil A','Infantil B','Novatos','Master'] } },
    { name: 'puntos', title: 'Puntos Temporada', type: 'number', initialValue: 0 },
    { name: 'victorias', title: 'Victorias', type: 'number', initialValue: 0 },
    { name: 'podios', title: 'Podios', type: 'number', initialValue: 0 },
    { name: 'equipo', title: 'Equipo / Club', type: 'string' },
    { name: 'bio', title: 'Biografía', type: 'text', rows: 4 },
    { name: 'activo', title: '¿Activo en temporada actual?', type: 'boolean', initialValue: true },
  ],
  preview: { select: { title: 'nombre', subtitle: 'categoria', media: 'foto' } },
}
