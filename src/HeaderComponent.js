// HeaderComponent.js
import React from 'react';
import { Layout, Button, Menu, Dropdown } from 'antd';
import { useNavigate } from 'react-router-dom';
import './HeaderComponent.css';

const { Header } = Layout;

const HeaderComponent = () => {
    const navigate = useNavigate();

    const goToPlaceholder = () => {
        navigate('/levels');
    };

    // 定义下拉菜单内容
    const menu = (
        <Menu items={[
            {
                key: '1',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="http://www.example.com/">
                        例子 1
                    </a>
                ),
            },
            {
                key: '2',
                label: (
                    <a target="_blank" rel="noopener noreferrer" href="http://www.example.com/">
                        例子 2
                    </a>
                ),
            },
            // ...其他菜单项
        ]} />
    );
      

    return (
        <Header className="header">
            <h2 className="header-title">Linux 学习助手</h2>
            <div className="header-buttons">
                <Dropdown menu={menu}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        快速链接
                    </a>
                </Dropdown>
                <Button onClick={goToPlaceholder} type="default">Linux Topic</Button>
            </div>
            <div className="header-buttons">
            </div>
        </Header>
    );
};

export default HeaderComponent;
