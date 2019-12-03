import React from 'react';
import { Avatar, Divider } from 'antd';

import './index.scss';

export default function Author() {
  return (
    <div className="author-info">
      <h3>个人简介</h3>
      <div> <Avatar size={100} src="https://lh3.googleusercontent.com/-6gpWd8bBokA/XcTAWL3_0LI/AAAAAAAAAAs/iTAfwLPfyXY0f5OzWUsHH-o6cdRB1O63QCEwYBhgL/w280-h280-p/9e2d83d0482e4a4cf9a5036a240b66b7.jpg" /></div>
      <div className="author-introduction">
          前端程序员，正在向着自己向往的路上奔跑
          <Divider>社交账号</Divider>
          <Avatar size={28} icon="github" className="account" />
          <Avatar size={28} icon="qq" className="account" />
          <Avatar size={28} icon="wechat" className="account" />
      </div>
  </div>
  );
}
