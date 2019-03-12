import React, { Component } from 'react';
import { Layout } from 'antd';
import './App.css';
import { Routes } from './routes/route';

const {Header, Content} = Layout;

class App extends Component {
  render() {
    return (
      <Layout>
        <Content>
          <Routes />
        </Content>
      </Layout>
    );
  }
}

export default App;