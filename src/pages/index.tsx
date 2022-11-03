import { NextPage } from 'next';
import { Navbar } from '../components';

const Home: NextPage = () => {
  return (
    <div className="theme-dark min-h-screen bg-base-100 font-bold text-base-content">
      <Navbar />
    </div>
  );
};
export default Home;
