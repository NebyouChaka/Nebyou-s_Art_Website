import { Helmet } from 'react-helmet-async';
import Hero from '../components/Home/Hero';
import FeaturedWorks from '../components/Home/FeaturedWorks';
import LatestExhibition from '../components/Home/LatestExhibition';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Nebyou Chaka | Visual Artist</title>
        <meta name="description" content="Nebyou Chaka is a contemporary visual artist exploring the intersection of heritage, identity, and human experience through various artistic mediums." />
      </Helmet>
      
      <Hero />
      <FeaturedWorks />
      {/* <LatestExhibition /> */}
    </>
  );
};

export default Home;