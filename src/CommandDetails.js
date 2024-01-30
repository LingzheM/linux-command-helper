import React from 'react';
import { useParams } from 'react-router-dom';
import { Card, List, Tooltip, Button, Typography } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import commandsData from './commands.json'; // 确保从正确的路径导入数据
import './CommandDetails.css'; // 假设你将样式放在 CommandDetails.css 文件中

const { Title, Paragraph, Text } = Typography;

const CommandDetails = () => {
    const { commandName } = useParams();
    const command = commandsData.find(cmd => cmd.CommandName.toLowerCase() === commandName.toLowerCase());
    console.info("command"+command);
    if (!command) {
        return <div>命令正在加载或未找到...</div>;
    }
    // 假设 command 是包含命令详情的对象
    const { CommandName, Description, Usage, Options, Examples } = command;

    // 复制到剪贴板的函数
    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="command-details">
            <Card bordered={false} className="command-card">
                <Title level={2}>{CommandName}</Title>
                <Paragraph>{Description}</Paragraph>
                <Paragraph strong>使用方法:</Paragraph>
                <Text code>{Usage}</Text>
    
                <List
                    size="small"
                    header={<div>选项:</div>}
                    bordered
                    dataSource={Options}
                    renderItem={item => (
                        <List.Item>
                            <div>
                                <Text strong>{item.Option}</Text> : {item.Description}
                                <br />
                                <Text type="secondary">示例: {item.Example}</Text>
                            </div>
                        </List.Item>
                    )}
                />
    
                <List
                    size="small"
                    header={<div>示例:</div>}
                    bordered
                    dataSource={Examples}
                    renderItem={item => (
                        <List.Item>
                            <Text code>{item}</Text>
                            <Tooltip title="复制到剪贴板">
                                <Button 
                                    icon={<CopyOutlined />} 
                                    onClick={() => copyToClipboard(item)} 
                                    size="small" 
                                    shape="circle" 
                                    style={{ marginLeft: 8 }}
                                />
                            </Tooltip>
                        </List.Item>
                    )}
                />
            </Card>
        </div>
    );
    

};

export default CommandDetails;
