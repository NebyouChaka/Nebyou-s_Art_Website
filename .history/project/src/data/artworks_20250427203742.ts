import { Artwork } from '../types';

export const artworks: Artwork[] = [
  {
    id: 'artwork1',
    title: 'Untitled -1',
    medium: 'Acrylic on Canvas',
    dimensions: '48 x 60 inches',
    year: 2021,
    price: 8800,
    imageUrl: '/artworks/Untitled -1.jpg',
    description: 'Guided by an intuitive play of colors, forms, and textures, this piece seeks to achieve a sense of balance and movement, allowing abstract elements to converse freely within the canvas.',
    isSold: false,
    isFeatured: true
  },
  {
    id: 'artwork-2',
    title: 'Untitled -3',
    medium: 'Acrylic on Canvas',
    dimensions: '48 x 48 inches',
    year: 2017,
    price: 4400,
    imageUrl: '/artworks/Untitled -3.jpg',
    description: 'Guided by an intuitive play of colors, forms, and textures, this piece seeks to achieve a sense of balance and movement, allowing abstract elements to converse freely within the canvas.',
    isSold: false,
    isFeatured: true
  },
  {
    id: 'artwork-3',
    title: 'Untitled -5,',
    medium: 'Acrylic on Canvas',
    dimensions: '48 x 48 inches',
    year: 2017,
    price: 4200,
    imageUrl: '/artworks/Untitled -4.jpg',
    description: 'Guided by an intuitive play of colors, forms, and textures, this piece seeks to achieve a sense of balance and movement, allowing abstract elements to converse freely within the canvas.',
    isSold: true,
    isFeatured: false
  },
  {
    id: 'artwork-4',
    title: 'Untitled -5',
    medium: 'Acrylic on Canvas',
    dimensions: '48 x 48 inches',
    year: 2023,
    price: 3600,
    imageUrl: '/artworks/Untitled -5.jpg',
    description: 'Guided by an intuitive play of colors, forms, and textures, this piece seeks to achieve a sense of balance and movement, allowing abstract elements to converse freely within the canvas.',
    isSold: false,
    isFeatured: true
  },
  {
    id: 'artwork-5',
    title: 'Transcendence',
    medium: 'Mixed Media',
    dimensions: '36 x 36 inches',
    year: 2022,
    price: 2800,
    imageUrl: 'https://images.pexels.com/photos/2110937/pexels-photo-2110937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An abstract composition exploring spiritual themes through color and form. The piece invites contemplation on transcendence and the relationship between the material and immaterial worlds.',
    isSold: false,
    isFeatured: false
  },
  {
    id: 'artwork-6',
    title: 'Dialogue with Earth',
    medium: 'Sculpture',
    dimensions: '18 x 14 x 12 inches',
    year: 2022,
    price: 4800,
    imageUrl: 'https://images.pexels.com/photos/134402/pexels-photo-134402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'This sculptural piece combines natural materials with traditional techniques, creating a contemporary expression of humanity\'s relationship with the natural world. The form suggests both growth and erosion.',
    isSold: false,
    isFeatured: false
  },
  {
    id: 'artwork-7',
    title: 'Harmonic Displacement',
    medium: 'Acrylic on Canvas',
    dimensions: '48 x 60 inches',
    year: 2023,
    price: 4500,
    imageUrl: 'https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An exploration of migration, displacement, and the search for harmony in new environments. Geometric patterns shift and realign, suggesting adaptation and the formation of new identities within unfamiliar contexts.',
    isSold: false,
    isFeatured: false
  },
  {
    id: 'artwork-8',
    title: 'Liminal Space',
    medium: 'Oil on Canvas',
    dimensions: '30 x 40 inches',
    year: 2022,
    price: 3200,
    imageUrl: 'https://images.pexels.com/photos/2088233/pexels-photo-2088233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'This painting explores transitional spaces - physical, emotional, and spiritual. Using subtle gradients and atmospheric effects, it captures the experience of being between states, the uncertainty and possibility inherent in transitions.',
    isSold: false,
    isFeatured: false
  }
];

export const featuredArtworks = artworks.filter(artwork => artwork.isFeatured);