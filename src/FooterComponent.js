// FooterComponent.js
import React from 'react';
import { Layout } from 'antd';
import './FooterComponent.css'; // 假设你将样式放在 FooterComponent.css 文件中

const { Footer } = Layout;

const FooterComponent = () => {
    return (
        <Footer className="footer">
            Linux 学习助手 ©2023 Created by もう
            {/* 其他你想在底部展示的内容 */}
        </Footer>
    );
};

export default FooterComponent;
