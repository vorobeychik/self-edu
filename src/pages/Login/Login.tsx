import styles from './Login.module.css';
import React, { useEffect } from 'react';
import { Avatar, Button } from 'antd';
import { LoginOutlined, UserOutlined } from '@ant-design/icons';
import { userAuth } from '../../requests/requests';


const Login = () => {
  useEffect(() => {
    console.log(location.search);
    const [argument, argumentValue] = location.search.split('=');
    console.log(argument, argumentValue);
    (async () => {
      const res = await userAuth(argumentValue);
      console.log(res);
    })();

  }, []);


  return (
        <div className={styles.login}>
          <Avatar icon={<UserOutlined />} size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 80, xxl: 100 }}/>
                <Button
                    type="primary"
                    shape="round"
                    size={'large'}
                    icon={<LoginOutlined />}
                    href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GIT_HUB_APP_ID}`}
                >
                    Login
                </Button>
        </div>
  );
};

export default Login;