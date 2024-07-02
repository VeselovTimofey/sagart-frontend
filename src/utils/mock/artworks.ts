import type { IProduct } from '../types';

const artworks: IProduct[] = [
  {
    id: 1,
    aricle_num: 1001,
    name: 'Starry Night',
    descrition_id: 101,
    author_id: 1,
    make_year: 1889,
    size: '74 cm × 92 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/starry_night.jpg',
    photo_gallery: [{ photo: '/images/starry_night.jpg' }],
    ishorizontal: true,
    genre: 'Post-Impressionism',
    type: 'Painting',
    category: 'Post-Impressionism',
    status: 'Available',
    price: 100000000,
  },
  {
    id: 2,
    aricle_num: 1002,
    name: 'Mona Lisa',
    descrition_id: 102,
    author_id: 2,
    make_year: 1503,
    size: '77 cm × 53 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/mona_lisa.jpg',
    photo_gallery: [{ photo: '/images/mona_lisa.jpg' }],
    ishorizontal: false,
    genre: 'Renaissance',
    type: 'Painting',
    category: 'Renaissance',
    status: 'Unavailable',
    price: 850000000,
  },
  {
    id: 3,
    aricle_num: 1003,
    name: 'The Persistence of Memory',
    descrition_id: 103,
    author_id: 3,
    make_year: 1931,
    size: '24 cm × 33 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/persistence_of_memory.jpg',
    photo_gallery: [{ photo: '/images/persistence_of_memory.jpg' }],
    ishorizontal: true,
    genre: 'Surrealism',
    type: 'Painting',
    category: 'Surrealism',
    status: 'Available',
    price: 45000000,
  },
  {
    id: 4,
    aricle_num: 1004,
    name: 'The Scream',
    descrition_id: 104,
    author_id: 4,
    make_year: 1893,
    size: '91 cm × 73 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/the_scream.jpg',
    photo_gallery: [{ photo: '/images/the_scream.jpg' }],
    ishorizontal: false,
    genre: 'Expressionism',
    type: 'Painting',
    category: 'Expressionism',
    status: 'Unavailable',
    price: 120000000,
  },
  {
    id: 5,
    aricle_num: 1005,
    name: 'Guernica',
    descrition_id: 105,
    author_id: 5,
    make_year: 1937,
    size: '349 cm × 776 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/guernica.jpg',
    photo_gallery: [{ photo: '/images/guernica.jpg' }],
    ishorizontal: true,
    genre: 'Cubism',
    type: 'Painting',
    category: 'Cubism',
    status: 'Available',
    price: 200000000,
  },
  {
    id: 6,
    aricle_num: 1006,
    name: 'Girl with a Pearl Earring',
    descrition_id: 106,
    author_id: 6,
    make_year: 1665,
    size: '44.5 cm × 39 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/girl_with_pearl_earring.jpg',
    photo_gallery: [{ photo: '/images/girl_with_pearl_earring.jpg' }],
    ishorizontal: false,
    genre: 'Baroque',
    type: 'Painting',
    category: 'Baroque',
    status: 'Unavailable',
    price: 50000000,
  },
  {
    id: 7,
    aricle_num: 1007,
    name: 'The Night Watch',
    descrition_id: 107,
    author_id: 7,
    make_year: 1642,
    size: '363 cm × 437 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/night_watch.jpg',
    photo_gallery: [{ photo: '/images/night_watch.jpg' }],
    ishorizontal: true,
    genre: 'Baroque',
    type: 'Painting',
    category: 'Baroque',
    status: 'Available',
    price: 400000000,
  },
  {
    id: 8,
    aricle_num: 1008,
    name: 'The Kiss',
    descrition_id: 108,
    author_id: 8,
    make_year: 1907,
    size: '180 cm × 180 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/the_kiss.jpg',
    photo_gallery: [{ photo: '/images/the_kiss.jpg' }],
    ishorizontal: true,
    genre: 'Symbolism',
    type: 'Painting',
    category: 'Symbolism',
    status: 'Unavailable',
    price: 100000000,
  },
  {
    id: 9,
    aricle_num: 1009,
    name: 'The Birth of Venus',
    descrition_id: 109,
    author_id: 9,
    make_year: 1486,
    size: '172.5 cm × 278.9 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/birth_of_venus.jpg',
    photo_gallery: [{ photo: '/images/birth_of_venus.jpg' }],
    ishorizontal: true,
    genre: 'Renaissance',
    type: 'Painting',
    category: 'Renaissance',
    status: 'Available',
    price: 200000000,
  },
  {
    id: 10,
    aricle_num: 1010,
    name: 'American Gothic',
    descrition_id: 110,
    author_id: 10,
    make_year: 1930,
    size: '78 cm × 65.3 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/american_gothic.jpg',
    photo_gallery: [{ photo: '/images/american_gothic.jpg' }],
    ishorizontal: false,
    genre: 'Modernism',
    type: 'Painting',
    category: 'Modernism',
    status: 'Unavailable',
    price: 30000000,
  },
  {
    id: 11,
    aricle_num: 1001,
    name: 'Starry Night',
    descrition_id: 101,
    author_id: 1,
    make_year: 1889,
    size: '74 cm × 92 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/starry_night.jpg',
    photo_gallery: [{ photo: '/images/starry_night.jpg' }],
    ishorizontal: true,
    genre: 'Post-Impressionism',
    type: 'Painting',
    category: 'Post-Impressionism',
    status: 'Available',
    price: 100000000,
  },
  {
    id: 12,
    aricle_num: 1002,
    name: 'Mona Lisa',
    descrition_id: 102,
    author_id: 2,
    make_year: 1503,
    size: '77 cm × 53 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/mona_lisa.jpg',
    photo_gallery: [{ photo: '/images/mona_lisa.jpg' }],
    ishorizontal: false,
    genre: 'Renaissance',
    type: 'Painting',
    category: 'Renaissance',
    status: 'Unavailable',
    price: 850000000,
  },
  {
    id: 13,
    aricle_num: 1003,
    name: 'The Persistence of Memory',
    descrition_id: 103,
    author_id: 3,
    make_year: 1931,
    size: '24 cm × 33 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/persistence_of_memory.jpg',
    photo_gallery: [{ photo: '/images/persistence_of_memory.jpg' }],
    ishorizontal: true,
    genre: 'Surrealism',
    type: 'Painting',
    category: 'Surrealism',
    status: 'Available',
    price: 45000000,
  },
  {
    id: 14,
    aricle_num: 1004,
    name: 'The Scream',
    descrition_id: 104,
    author_id: 4,
    make_year: 1893,
    size: '91 cm × 73 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/the_scream.jpg',
    photo_gallery: [{ photo: '/images/the_scream.jpg' }],
    ishorizontal: false,
    genre: 'Expressionism',
    type: 'Painting',
    category: 'Expressionism',
    status: 'Unavailable',
    price: 120000000,
  },
  {
    id: 15,
    aricle_num: 1005,
    name: 'Guernica',
    descrition_id: 105,
    author_id: 5,
    make_year: 1937,
    size: '349 cm × 776 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/guernica.jpg',
    photo_gallery: [{ photo: '/images/guernica.jpg' }],
    ishorizontal: true,
    genre: 'Cubism',
    type: 'Painting',
    category: 'Cubism',
    status: 'Available',
    price: 200000000,
  },
  {
    id: 16,
    aricle_num: 1006,
    name: 'Girl with a Pearl Earring',
    descrition_id: 106,
    author_id: 6,
    make_year: 1665,
    size: '44.5 cm × 39 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/girl_with_pearl_earring.jpg',
    photo_gallery: [{ photo: '/images/girl_with_pearl_earring.jpg' }],
    ishorizontal: false,
    genre: 'Baroque',
    type: 'Painting',
    category: 'Baroque',
    status: 'Unavailable',
    price: 50000000,
  },
  {
    id: 17,
    aricle_num: 1007,
    name: 'The Night Watch',
    descrition_id: 107,
    author_id: 7,
    make_year: 1642,
    size: '363 cm × 437 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/night_watch.jpg',
    photo_gallery: [{ photo: '/images/night_watch.jpg' }],
    ishorizontal: true,
    genre: 'Baroque',
    type: 'Painting',
    category: 'Baroque',
    status: 'Available',
    price: 400000000,
  },
  {
    id: 18,
    aricle_num: 1008,
    name: 'The Kiss',
    descrition_id: 108,
    author_id: 8,
    make_year: 1907,
    size: '180 cm × 180 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/the_kiss.jpg',
    photo_gallery: [{ photo: '/images/the_kiss.jpg' }],
    ishorizontal: true,
    genre: 'Symbolism',
    type: 'Painting',
    category: 'Symbolism',
    status: 'Unavailable',
    price: 100000000,
  },
  {
    id: 19,
    aricle_num: 1009,
    name: 'The Birth of Venus',
    descrition_id: 109,
    author_id: 9,
    make_year: 1486,
    size: '172.5 cm × 278.9 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/birth_of_venus.jpg',
    photo_gallery: [{ photo: '/images/birth_of_venus.jpg' }],
    ishorizontal: true,
    genre: 'Renaissance',
    type: 'Painting',
    category: 'Renaissance',
    status: 'Available',
    price: 200000000,
  },
  {
    id: 20,
    aricle_num: 1010,
    name: 'American Gothic',
    descrition_id: 110,
    author_id: 10,
    make_year: 1930,
    size: '78 cm × 65.3 cm',
    edition: 'Original',
    auth_signature: true,
    preview_photo: '/images/american_gothic.jpg',
    photo_gallery: [{ photo: '/images/american_gothic.jpg' }],
    ishorizontal: false,
    genre: 'Modernism',
    type: 'Painting',
    category: 'Modernism',
    status: 'Unavailable',
    price: 30000000,
  },
];

export default artworks;
