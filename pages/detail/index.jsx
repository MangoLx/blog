import React from 'react';
import ReactMarkdown from 'react-markdown';
import MarkNav from 'markdown-navbar';
import { Icon, Breadcrumb, Affix } from 'antd';
import Layout from '@components/layout';
import Author from '@components/author';

import 'markdown-navbar/dist/navbar.css';
import './index.scss';

const markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '`console.log(111)` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```';

const Detail = () => {
  return (
    <Layout>
      <div className="left">
        <div className="bread">
          <Breadcrumb>
              <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
              <Breadcrumb.Item>文章列表</Breadcrumb.Item>
              <Breadcrumb.Item>xxxx</Breadcrumb.Item>
          </Breadcrumb>
        </div>
        <div>
          <div className="detailed-title">
            React生命周期
          </div>
          <div className="list-icon center">
            <span><Icon type="calendar" /> 2999-1-28</span>
            <span><Icon type="folder" /> 技术文章</span>
            <span><Icon type="fire" /> 5498热度</span>
          </div>
          <div className="detailed-content" >
            <ReactMarkdown
              source={markdown}
              escapeHtml={false}
            />
          </div>
        </div>
      </div>
      <div className="right">
        <Author />
        <Affix offsetTop={5}>
          <div className="detailed-nav">
            <h3 className="nav-title">文章目录</h3>
            <MarkNav
              className="article-menu"
              source={markdown}
              ordered={false}
            />
          </div>
        </Affix>
      </div>
    </Layout>
  );
};

export default Detail;