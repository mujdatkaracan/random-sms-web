import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import { Routes } from './routes/route';

const {Header, Content} = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Header style={{ background: '#000', padding: 0 }}>
          GUDCK LUCK
        </Header>
        <Content>
          <Routes />
        </Content>
      </Layout>
    );
  }
}

export default App;