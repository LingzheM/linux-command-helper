// HeaderComponent.js
import React, { useState } from 'react';
import { Layout, Button, Menu, Modal, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './HeaderComponent.css';

const { Header } = Layout;

const HeaderComponent = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        // 处理搜索逻辑
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const navigate = useNavigate();

    const goToPlaceholder = () => {
        navigate('/levels');
    };

    const onSearchIconClick = () => {
        // 处理搜索图标点击事件
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
            <Button onClick={() => navigate('/levels')} type="default">LPIC TOPIC</Button>
            <div className="header-buttons">
                <SearchOutlined onClick={showModal} style={{ marginRight: 15, fontSize: 22, cursor: 'pointer' }} />
            </div>
            <Modal title="搜索" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <Input
                    placeholder="输入搜索内容"
                    // ...
                />
            </Modal>
        </Header>
    );
};

export default HeaderComponent;
