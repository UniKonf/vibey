import { NextPage } from 'next';
import { Hero, Navbar } from '../components';

const Home: NextPage = () => {
  return (
    <div className="theme-dark min-h-screen bg-base-100 bg-gradient-to-bl from-[rgb(7,252,193,0.2)] to-[rgba(178,15,255,0.15)] font-bold text-base-content">
      <Navbar />
      <Hero />
    </div>
  );
};
export default Home;
