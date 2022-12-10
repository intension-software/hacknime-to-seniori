import { FC } from 'react'
import Header from '../components/Header';
import Tips from '../components/Tips';
import Tutorials from '../components/Tutorials';
import Forum from '../components/Forum';
import storage from '../utils/storage';

const Account: FC = () => {
  const user = storage.getItem('user');

  return (
    <div className="Account">
      <Header />
      <img style={{width: "100%", height: "100%"}} src="./images/user.png"/>
    </div>
  );
}

export default Account;
