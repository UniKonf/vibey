import { NextPage } from 'next';
import { Navbar } from '../components';

const Home: NextPage = () => {
  return (
    <div className="h-screen font-bold">
      <Navbar />
    </div>
  );
};
export default Home;
