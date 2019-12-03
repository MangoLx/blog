import React from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import { HEADER_CONTENT } from '@utils/constants';
import './index.scss';

export default function Header () {
  return (
    <div className="header">
      <Row type="flex" justify="center">
        <Col className="header-left" xs={24} sm={24} md={10}>
          <span className="header-logo">Mango</span>
          <span className="header-text">我自己的博客</span>
        </Col>
        <Col className="memu-div" xs={0} sm={0} md={14} lg={8} xl={6}>
          <Menu mode="horizontal">
            {
              HEADER_CONTENT.menuInfo.map(item => (
                <Menu.Item key={item.key}>
                  <Icon type={item.iconType} />
                  {item.text}
                </Menu.Item>
              ))
            }
          </Menu>
        </Col>
      </Row>
    </div>
  );
}
