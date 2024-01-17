// 用于展示所有主题的列表
import React from "react";
import { useNavigate } from "react-router";
import LinuxTopicData from './LinuxTopic.json';

const TopicList = () => {
    const navigate = useNavigate();

    const gotoTopicDetail = (topicId) => {
        navigate(`/topics/${topicId}`);  // 根据点击的主题跳转到相应的详情页面
    };

    return (
        <div>
            <h1>Linux Topic</h1>
            <ul>
                {LinuxTopicData.map((topic) => (
                    <li key={topic.id} onClick={() => gotoTopicDetail(topic.topicId)}>
                        {topic.name}
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default TopicList;
