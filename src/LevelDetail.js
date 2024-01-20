import React from "react";
import { useParams } from "react-router";

const LevelDetail = ({levelData, topicData}) => {
    let { levelId } = useParams();
    const numberLevelId = parseInt(levelId, 10); // 将 topicId 转换为数字
    let level = levelData.find(l => l.id === numberLevelId);
    let topics = topicData.filter(t => t.levelId === numberLevelId);

    const scrollToTopic = (topicId) => {
        const element = document.getElementById(`topic-${topicId}`);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-around'}}>
                {topics.map((topic) => (
                    <div key={topic.id} onClick={() => scrollToTopic(topic.id)}>
                        {topic.name}
                    </div>
                ))}
            </div>
            <div>
                {topics.map((topic) => (
                <div key={topic.id} id={`topic-${topic.id}`}>
                    <h3>{topic.name}</h3>
                    <p>{topic.description}</p>
                    <div>
                    <h4>Key Areas</h4>
                    <ul>
                        {topic.keyArea.map((area, index) => (
                        <li key={index}>{area}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4>Files, Terms, and Utilities</h4>
                    <ul>
                        {topic.filesAndTermsAndUtilities.map((item, index) => (
                        <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
            ))}
            </div>
        </div>
    );
};

export default LevelDetail;