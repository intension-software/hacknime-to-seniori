import { FC } from 'react'
import Header from '../components/Header';
import Tips from '../components/Tips';
import Tutorials from '../components/Tutorials';
import Forum from '../components/Forum';
import storage from '../utils/storage';

const Home: FC = () => {
  const user = storage.getItem('user');

  return (
    <div className="Home">
      <Header />
      {user ? <Forum /> : null}
      <Tips />
      <Tutorials />
    </div>
  );
}

export default Home;
