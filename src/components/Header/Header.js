import {useEffect, useState} from 'react';
import './Header.css';
import PubSub from 'pubsub-js';

function Header() {

  const [done, setDone] = useState(1);

  useEffect(() => {
    const token = PubSub.subscribe('doneCount',(_,num) => {
      setDone(num);
    })
    return () => {
      PubSub.unsubscribe(token);
    }
  })


  return (
    <div className="header">
      <nav className="nav">
        <span className="nav-title">Pomodoros</span>
      </nav>
      <div className="sub-header">
        <span className="target">
          {
            done === 0 ? 'Come on !' : `Only ${done} left，keep going ！`
          }
      </span>
      </div>

    </div>
  );
}

export default Header;