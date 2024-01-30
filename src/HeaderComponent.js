// HeaderComponent.js
import React, { useState } from 'react';
import { Layout, Button, Menu, Modal, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import './HeaderComponent.css';
import commandsData from './commands.json';


const { Header } = Layout;

const HeaderComponent = () => {
    //const [searchInput, setSearchInput] = useState('');
    const [searchInput, setSearchInput] = useState('');
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        // 根据 searchInput 内容找到对应的命令
        const commandDetails = commandsData.find(cmd => cmd.CommandName.toLowerCase() === searchInput.toLowerCase());
        console.info("commandInfo"+commandDetails.CommandName)
        // 如果找到对应的命令，导航到命令详情页面
        if (commandDetails) {
            navigate(`/command/${commandDetails.CommandName}`);
        } else {
            // 处理未找到命令的情况（可选：显示消息或日志）
            console.log("命令未找到");
        }
    };
    

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    const navigate = useNavigate();

    const onSearchIconClick = () => {
        // 处理搜索图标点击事件
    };
    

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
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                />
            </Modal>
        </Header>
    );
};

export default HeaderComponent;
