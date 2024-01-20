import React from "react";
import { useNavigate } from "react-router";

const LevelList = ({ levels }) => {
    const navigate = useNavigate();

    const gotoLevelDetail = (levelId) => {
        navigate(`/levels/${levelId}`); // 根据点击的级别跳转到相应的详情页面
    }
    
    return (
        <div>
            <div style={{ display: 'flex', 'justifyContent': 'space-around'}}>
                {
                    levels.map((level) => (
                        <div key={level.id} onClick={() => gotoLevelDetail(level.levelId)}>
                            {level.levelName}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default LevelList;
