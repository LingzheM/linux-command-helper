import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Card, Button } from 'antd';
import HeaderComponent from './HeaderComponent';
import FooterComponent from './FooterComponent';
import SphereCanvas from './Sphere';

const Home = () => {
  let navigate = useNavigate();
  const { Header, Content, Footer } = Layout;

  const commands = [
    { id: 1, text: "ls - List directory contents", position: [1.2, 0.5, 0], rotationSpeed: { x: 0.01, y: 0.02, z: 0 }},
    { id: 2, text: "cd - Change directory", position: [1.2, 0, 0], rotationSpeed: { x: 0.02, y: 0, z: 0.01 }},
    { id: 3, text: "pwd - Print working directory", position: [1.2, -0.5, 0], rotationSpeed: { x: 0, y: 0.01, z: 0.02 }},
    // 更多命令...
  ];

  const goToCommandSearch = () => {
    navigate('/search'); // 使用 navigate 函数进行导航
  };

  return (
    <Layout style={{ minHeight: '100vh'}}>
      <HeaderComponent />
      <Content style={{ 
            display: 'flex', 
            flexDirection: 'column',  // 垂直排列内容
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            background: '#f0f2f5',
            padding: '50px'
      }}>
        <SphereCanvas commands={commands}/>
        <Card title="关于项目" style={{ width: '100%', marginBottom: '20px', backgroundColor: '#ffffff', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }}>
            <p>这是一个帮助学习和掌握Linux命令的项目，通过互动式学习，你可以更快地掌握Linux系统的各项功能。</p>
        </Card>
        <Button type="primary" onClick={goToCommandSearch} style={{ marginRight: '10px' }}>Linux命令搜索器</Button>
      </Content>
      <FooterComponent />
    </Layout>
  );
};

export default Home;
