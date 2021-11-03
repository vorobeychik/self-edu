import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import styles from './Login.module.css';
import { store } from '../../store/store';
import Icon from '../../components/Icon/Icon';
import { Icons } from '../../enums/enums';
import { authUrl } from '../../constants/const';

const Login = observer(() => {
  useEffect(() => {
    (async () => {
      await store.authorize();
    })();
  }, []);

  if (store.isLoading) {
    return (
      <div className={styles.loader}>
        <svg
          style={{
            margin: 'auto', background: 'rgb(255, 255, 255)', display: 'block', shapeRendering: 'auto', width: '100%',
          }}
          width="200px"
          height="200px"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            r="32"
            strokeWidth="8"
            stroke="#c7c7c5"
            strokeDasharray="50.26548245743669 50.26548245743669"
            fill="none"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              keyTimes="0;1"
              values="0 50 50;360 50 50"
            />
          </circle>
        </svg>
      </div>
    );
  }

  return (
    <div className={styles.login}>
      <Icon iconType={Icons.User} iconSize={70} />
      <a href={authUrl}>
        <button className={styles.login_button}>Login</button>
      </a>
    </div>
  );
});

export default Login;
