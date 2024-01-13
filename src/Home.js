import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  let navigate = useNavigate();

  const goToCommandSearch = () => {
    navigate('/search'); // 使用 navigate 函数进行导航
  };

  const goToPlaceholder = () => {
    navigate('/placeholder');
  };

  return (
    <div>
      <h1>欢迎来到主页</h1>
      <button onClick={goToCommandSearch}>Linux命令搜索器</button>
      <button onClick={goToPlaceholder}>其他功能（待实现）</button>
    </div>
  );
};

export default Home;
