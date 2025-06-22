import { Exhibition } from '../types';

export const exhibitions: Exhibition[] = [
  {
    id: 'exhibition-1',
    title: 'Rhythms of Memory',
    description: 'A solo exhibition exploring themes of cultural memory, identity, and the diaspora experience through a series of large-scale paintings and mixed media works. The exhibition features Nebyou Chaka\'s most recent body of work, created over the past two years.',
    location: 'Contemporary Arts Center, Berline, Germany',
    startDate: '2023-06-10',
    endDate: '2023-08-15',
    imageUrl: 'https://images.pexels.com/photos/2372978/pexels-photo-2372978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'solo',
    url: 'https://example.com/exhibitions/rhythms-of-memory'
  },
  {
    id: 'exhibition-2',
    title: 'New Perspectives: African Diaspora Artists',
    description: 'A group exhibition featuring works by emerging and established artists from the African diaspora. Nebyou Chaka presents three new paintings that explore the intersection of traditional Ethiopian artistic practices with contemporary abstract expressionism.',
    location: 'The Modern Gallery, New York, NY',
    startDate: '2023-03-05',
    endDate: '2023-05-20',
    imageUrl: 'https://images.pexels.com/photos/1839919/pexels-photo-1839919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'group',
    url: 'https://example.com/exhibitions/new-perspectives'
  },
  {
    id: 'exhibition-3',
    title: 'Transcending Boundaries',
    description: 'This international exhibition explores how artists navigate and transcend geographical, cultural, and conceptual boundaries in their practice. Nebyou Chaka\'s installation piece "Migration Memories" was created specifically for this show.',
    location: 'International Arts Foundation, London, UK',
    startDate: '2022-09-15',
    endDate: '2022-12-10',
    imageUrl: 'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'group'
  },
  {
    id: 'exhibition-4',
    title: 'Ethereal Landscapes',
    description: 'A solo exhibition featuring Nebyou Chaka\'s landscape-inspired abstract paintings. The works in this show reflect on memory, displacement, and the concept of home through evocative color fields and gestural mark-making.',
    location: 'Axis Contemporary Art, Chicago, IL',
    startDate: '2022-04-08',
    endDate: '2022-06-15',
    imageUrl: 'https://images.pexels.com/photos/1674049/pexels-photo-1674049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'solo',
    url: 'https://example.com/exhibitions/ethereal-landscapes'
  },
  {
    id: 'exhibition-5',
    title: 'Art & Identity: Contemporary African Voices',
    description: 'This thematic exhibition brings together artists who explore aspects of African identity in the 21st century. Nebyou Chaka contributes works that examine the fluidity of cultural identity and the impact of migration on artistic practice.',
    location: 'AllianceFranc',
    startDate: '2021-10-12',
    endDate: '2022-01-30',
    imageUrl: '/public/exhibitionAlianceFrancaise.png',
    type: 'group'
  },
  {
    id: 'exhibition-6',
    title: 'Forms of Belonging',
    description: 'A group exhibition where Nebyou Chaka will debut a new series of works exploring concepts of belonging, community, and place. The exhibition will feature paintings, sculptures, and an immersive installation.',
    location: 'HanaAzeb Art Gallery,Sneilville, GA',
    startDate: '2025-04-4',
    endDate: '2025-04-8',
    imageUrl: 'https://images.pexels.com/photos/14682606/pexels-photo-14682606.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'group',
    url: 'https://example.com/exhibitions/forms-of-belonging'
  },
  {
    id: 'exhibition-7',
    title: 'Biennial of Contemporary African Art',
    description: 'Nebyou Chaka has been selected to participate in this prestigious biennial showcasing the best in contemporary African art. He will present a site-specific installation exploring themes of ecology, heritage, and sustainability.',
    location: 'National Museum, Dakar, Senegal',
    startDate: '2024-05-15',
    endDate: '2024-07-30',
    imageUrl: 'https://images.pexels.com/photos/6412502/pexels-photo-6412502.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    type: 'group',
    url: 'https://example.com/exhibitions/biennial-african-art'
  }
];

// Helper function to get upcoming exhibitions
export const getUpcomingExhibitions = (): Exhibition[] => {
  const today = new Date();
  return exhibitions.filter(exhibition => new Date(exhibition.startDate) > today);
};

// Helper function to get current exhibitions
export const getCurrentExhibitions = (): Exhibition[] => {
  const today = new Date();
  return exhibitions.filter(
    exhibition => 
      new Date(exhibition.startDate) <= today && 
      new Date(exhibition.endDate) >= today
  );
};

// Helper function to get past exhibitions
export const getPastExhibitions = (): Exhibition[] => {
  const today = new Date();
  return exhibitions.filter(exhibition => new Date(exhibition.endDate) < today);
};