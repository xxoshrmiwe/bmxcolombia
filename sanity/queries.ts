export const PILOTOS_RANKING_QUERY = `
  *[_type == "piloto" && activo == true] | order(puntos desc) {
    _id,
    nombre,
    slug,
    foto,
    numero,
    departamento,
    categoria,
    puntos,
    victorias,
    podios,
    equipo
  }
`

export const EVENTOS_PROXIMOS_QUERY = `
  *[_type == "evento" && fecha >= $hoy] | order(fecha asc) {
    _id,
    nombre,
    tipo,
    fecha,
    ciudad,
    departamento,
    pista,
    inscripcionesAbiertas,
    urlInscripcion
  }
`

export const NOTICIAS_RECIENTES_QUERY = `
  *[_type == "noticia"] | order(publicadoEn desc) [0..9] {
    _id,
    titulo,
    slug,
    imagen,
    categoria,
    extracto,
    publicadoEn,
    autor
  }
`

export const RESULTADOS_QUERY = `
  *[_type == "resultado"] | order(fecha desc) {
    _id,
    evento->{nombre, fecha},
    piloto->{nombre, numero},
    posicion,
    categoria,
    puntos
  }
`
