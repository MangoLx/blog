import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Row, Col } from 'antd';
import Header from '@components/header';
import Footer from '@components/footer';

import './index.scss';

const Layout = (props) => (
  <React.Fragment>
    <Head>
      <title>{props.title || 'Mango 的个人博客'}</title>
    </Head>
    <Header />
    <Row className="comm-main" type="flex" justify="center" align="top">
      <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
        {props.children[0]}
      </Col>
      <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
        {props.children[1]}
      </Col>
    </Row>
    <Footer />
  </React.Fragment>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Layout;