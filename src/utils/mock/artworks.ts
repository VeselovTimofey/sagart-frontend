import type { IProduct } from '../types';

export const artworks: IProduct[] = [
  {
    id: 1,
    name: 'Starry Night',
    descrition_id: 101,
    author_id: 1,
    make_date: '1889-06-01',
    size: '74 cm × 92 cm',
    weight: 5.5,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/starry_night.jpg',
    type: 'Painting',
    category: 'Post-Impressionism',
    status: 'Available',
    price: 100000000,
  },
  {
    id: 2,
    name: 'Mona Lisa',
    descrition_id: 102,
    author_id: 2,
    make_date: '1503-06-01',
    size: '77 cm × 53 cm',
    weight: 7.5,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/mona_lisa.jpg',
    type: 'Painting',
    category: 'Renaissance',
    status: 'Unavailable',
    price: 850000000,
  },
  {
    id: 3,
    name: 'The Persistence of Memory',
    descrition_id: 103,
    author_id: 3,
    make_date: '1931-04-01',
    size: '24 cm × 33 cm',
    weight: 3.0,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/persistence_of_memory.jpg',
    type: 'Painting',
    category: 'Surrealism',
    status: 'Available',
    price: 45000000,
  },
  {
    id: 4,
    name: 'The Scream',
    descrition_id: 104,
    author_id: 4,
    make_date: '1893-01-01',
    size: '91 cm × 73 cm',
    weight: 4.5,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/the_scream.jpg',
    type: 'Painting',
    category: 'Expressionism',
    status: 'Unavailable',
    price: 120000000,
  },
  {
    id: 5,
    name: 'Guernica',
    descrition_id: 105,
    author_id: 5,
    make_date: '1937-06-01',
    size: '349 cm × 776 cm',
    weight: 12.0,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/guernica.jpg',
    type: 'Painting',
    category: 'Cubism',
    status: 'Available',
    price: 200000000,
  },
  {
    id: 6,
    name: 'Girl with a Pearl Earring',
    descrition_id: 106,
    author_id: 6,
    make_date: '1665-01-01',
    size: '44.5 cm × 39 cm',
    weight: 2.5,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/girl_with_pearl_earring.jpg',
    type: 'Painting',
    category: 'Baroque',
    status: 'Unavailable',
    price: 50000000,
  },
  {
    id: 7,
    name: 'The Night Watch',
    descrition_id: 107,
    author_id: 7,
    make_date: '1642-01-01',
    size: '363 cm × 437 cm',
    weight: 10.0,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/night_watch.jpg',
    type: 'Painting',
    category: 'Baroque',
    status: 'Available',
    price: 400000000,
  },
  {
    id: 8,
    name: 'The Kiss',
    descrition_id: 108,
    author_id: 8,
    make_date: '1907-08-01',
    size: '180 cm × 180 cm',
    weight: 8.0,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/the_kiss.jpg',
    type: 'Painting',
    category: 'Symbolism',
    status: 'Unavailable',
    price: 100000000,
  },
  {
    id: 9,
    name: 'The Birth of Venus',
    descrition_id: 109,
    author_id: 9,
    make_date: '1486-01-01',
    size: '172.5 cm × 278.9 cm',
    weight: 9.0,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/birth_of_venus.jpg',
    type: 'Painting',
    category: 'Renaissance',
    status: 'Available',
    price: 200000000,
  },
  {
    id: 10,
    name: 'American Gothic',
    descrition_id: 110,
    author_id: 10,
    make_date: '1930-01-01',
    size: '78 cm × 65.3 cm',
    weight: 6.0,
    edition: 'Original',
    auth_signature: true,
    photo: '/images/american_gothic.jpg',
    type: 'Painting',
    category: 'Modernism',
    status: 'Unavailable',
    price: 30000000,
  },
];

export default artworks;
