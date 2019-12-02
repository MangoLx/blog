import React from 'react';
import Head from 'next/head';
import { Button } from 'antd';
import Header from '@components/header';

import './index.scss';

const Home = () => (
  <React.Fragment>
    <Head>
      <title>这是主页</title>
    </Head>
    <Header />
    <div>home</div>
    <Button type="primary">123</Button>
  </React.Fragment>
);

export default Home;
