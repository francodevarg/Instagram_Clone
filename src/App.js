import { Icon, InlineIcon } from "@iconify/react";
import homeOutline from '@iconify-icons/teenyicons/home-outline';
import messengerOutline from '@iconify-icons/teenyicons/messenger-outline';
import compassOutline from '@iconify-icons/teenyicons/compass-outline';
import heartOutline from '@iconify-icons/teenyicons/heart-outline';
import userCircleOutline from '@iconify-icons/teenyicons/user-circle-outline';
import Profile from './components/Profile'


import './App.css';

function App() {
  return (
    <div className="App">
      <header className="container">
        <nav className="navbar">
          <div className="navbar__logo">
            <figure>
              <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"/>
            </figure>
          </div>
          <div className="navbar__search">
            <input className="search-input" type="text" placeholder="Busca"/>
          </div>
          <div className="navbar__actions">
            <ul className="navbar__list">
              <li className="navbar__link">
                <Icon icon={homeOutline} height="21px"/>
              </li>
              <li className="navbar__link">
                <Icon icon={messengerOutline} height="21px"/>
              </li>
              <li className="navbar__link">
                <Icon icon={compassOutline} height="21px"/>
              </li>
              <li className="navbar__link">
                <Icon icon={heartOutline} height="21px"/>
              </li>
              <li className="navbar__link"> 
                <Icon icon={userCircleOutline} height="22px" />

              </li>
            </ul>
          </div>
        </nav>
      </header>
      <Profile></Profile>
    </div>
  );
}

export default App;
