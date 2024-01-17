import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout } from 'antd';


const Home = () => {
  let navigate = useNavigate();
  const { Header, Content, Footer } = Layout;


  const goToCommandSearch = () => {
    navigate('/search'); // 使用 navigate 函数进行导航
  };

  const goToPlaceholder = () => {
    navigate('/topics');
  };

  return (
    <Layout style={{ minHeight: '100vh'}}>
      <Header>

      </Header>
      <Content style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center', 
            height: '100vh', 
            background: '#f0f2f5'
      }}>
        <div>
          <h1>主页</h1>
          <button onClick={goToCommandSearch}>Linux命令搜索器</button>
          <button onClick={goToPlaceholder}>其他功能（待实现）</button>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>

      </Footer>
    </Layout>
  );

  // return (
  //   <div>
  //     <h1>欢迎来到主页</h1>
  //     <button onClick={goToCommandSearch}>Linux命令搜索器</button>
  //     <button onClick={goToPlaceholder}>其他功能（待实现）</button>
  //   </div>
  // );
};

export default Home;
