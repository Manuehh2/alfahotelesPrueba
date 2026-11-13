// Artículos publicados en el sitio anterior. Sus páginas completas siguen allí
// hasta que se migren al CMS; este archivo alimenta el índice y la portada.
export const posts = [
  {
    title: 'Casa Loreto 1893: una historia viva en el corazón de Mérida',
    date: '2026-09-29',
    category: 'Casa Loreto 1893',
    excerpt: 'Una casona del siglo XIX donde la arquitectura y la memoria de Mérida forman parte de la estancia.',
    image: 'https://img1.wsimg.com/isteam/ip/33351b08-7efe-48ac-882f-66f26701bf10/CasaLoreto-32.jpg/:/rs=w:1100,m',
    url: 'https://alfahoteles.com/f/casa-loreto-1893-una-historia-viva-en-el-coraz%C3%B3n-de-m%C3%A9rida',
  },
  {
    title: 'Mejor hotel y precios en Mérida, Yucatán',
    date: '2026-09-14',
    category: 'Hospedaje',
    excerpt: 'Ideas para elegir dónde hospedarte en Mérida según la experiencia que buscas.',
    image: 'https://img1.wsimg.com/isteam/ip/33351b08-7efe-48ac-882f-66f26701bf10/CA62_marzo--2.jpg/:/rs=w:1100,m',
    url: 'https://alfahoteles.com/f/mejor-hotel-y-precios-en-m%C3%A9rida-yucat%C3%A1n',
  },
  {
    title: 'Bodas en Mérida: celebración en Casa Loreto 1893',
    date: '2026-08-11',
    category: 'Eventos',
    excerpt: 'Un espacio con historia para celebrar momentos especiales en el centro de Mérida.',
    image: 'https://img1.wsimg.com/isteam/ip/33351b08-7efe-48ac-882f-66f26701bf10/XV%20A%C3%91OS-165.jpg/:/rs=w:1100,m',
    url: 'https://alfahoteles.com/f/bodas-en-m%C3%A9rida-celebraci%C3%B3n-en-casa-loreto-1893',
  },
  {
    title: 'Eventos corporativos en Casa Loreto 1893',
    date: '2026-08-11',
    category: 'Eventos',
    excerpt: 'Encuentros de trabajo en una casa histórica con el carácter de Mérida.',
    image: 'https://img1.wsimg.com/isteam/ip/33351b08-7efe-48ac-882f-66f26701bf10/_DSC7560.jpg/:/rs=w:1100,m',
    url: 'https://alfahoteles.com/f/eventos-corporativos-en-casa-loreto-1893',
  },
  {
    title: 'Actividades gratuitas para hacer en Mérida, Yucatán',
    date: '2026-08-11',
    category: 'Guía de Mérida',
    excerpt: 'Paseos y planes para conocer la ciudad a tu ritmo.',
    image: 'https://img1.wsimg.com/isteam/ip/33351b08-7efe-48ac-882f-66f26701bf10/semanameridana.jpg/:/rs=w:1100,m',
    url: 'https://alfahoteles.com/f/actividades-gratuitas-para-hacer-en-m%C3%A9rida-yucat%C3%A1n',
  },
  {
    title: 'Plan your week in Mérida',
    date: '2026-08-11',
    category: 'Guía de Mérida',
    excerpt: 'Una guía de experiencias para disfrutar una semana en Mérida.',
    image: 'https://img1.wsimg.com/isteam/ip/33351b08-7efe-48ac-882f-66f26701bf10/collage-beneficios.jpg/:/rs=w:1100,m',
    url: 'https://alfahoteles.com/f/experiencias-%C3%BAnicas-en-hoteles-de-m%C3%A9rida',
  },
].sort((a, b) => b.date.localeCompare(a.date));

export const formatPostDate = (date: string) =>
  new Intl.DateTimeFormat('es-MX', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${date}T12:00:00Z`));
