import React from 'react';
// import logo from './logo.svg';
import './App.css';
import {Layout, Header, Navigation, Drawer, Button, Card, CardText, Textfield, Content} from 'react-mdl';
import Main from './components/main';
function App() {
  return (
   
    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
            </Navigation>
        </Drawer>

        <Content className="page-content">
        <Main/>
        </Content>
    </Layout>
</div>
  );
}

export default App;
