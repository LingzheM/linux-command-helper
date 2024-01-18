// 用于展示选定主题的详细信息和包含的知识点。
import React from "react";
import { useParams, useNavigate } from "react-router";
import LinuxTopicData from './LinuxTopic.json';
import LinuxCommandData from './LinuxCommand.json';


const TopicDetail = () => {
    let { topicId } = useParams();
    const navigate = useNavigate();
    const numericTopicId = parseInt(topicId, 10); // 将 topicId 转换为数字
    let topic = LinuxTopicData.find(t => t.topicId === numericTopicId);
    let sequences = LinuxCommandData.filter(c => c.topicId === numericTopicId);

    if (!topic) {
        return <div>主题未找到</div>
    }

    return (
        <div>
            <h2>{topic.name}</h2>
            <ul>
            {sequences.map((cmd) => (
                <li key={cmd.id} onClick={() => navigate(`/seq/${cmd.sequenceId}`)}>
                <h3>{cmd.name}</h3>
                <p>{cmd.description}</p>
                </li>
            ))}
            </ul>

            {/* <ul>
                {sequences.map((sequence) => (
                    <li key={sequence.id}>
                        <h3>{sequence.name}</h3>
                        <p>{sequence.description}</p>
                    </li>
                ))}
            </ul>    */}
        </div>
    )
};

export default TopicDetail;