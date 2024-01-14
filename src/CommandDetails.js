import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import commandsData from './commands.json';
import CommandTree from "./CommandTree";

// 在 CommandDetail 组件中，你不需要将 commandData 作为一个 prop。
const CommandDetail = () => {
    let { command } = useParams();
    let navigate = useNavigate();
    let commandInfo = commandsData.find(cmd => cmd.command === command);

    if (!commandInfo) {
        return <p>命令未找到</p>;
    }

    const goBack = () => {
        navigate(-1);
    }

    const formatDataForTree = (commandInfo) => {
        console.log("commandData"+commandInfo);
        let root = {
            name: commandInfo.command,
            children: commandInfo.paramList.map(param => {
                return {
                    name: param.param,
                    attributes: {
                        declare: param.declare,
                        example: param.example
                    }
                    // 如果有子参数，可以递归地添加到 children
                };
            })
        }
        // 树状图的数据通常是一个包含根节点的数组
        return [root];
    };

    const treeData = formatDataForTree(commandInfo);

    return (
        <div>
        <h2>命令详情</h2>
        <CommandTree data={treeData} />
        {/* 其他组件和内容 */}
        {/* 我们需要在 CommandDetail 组件中添加一个返回按钮。当用户点击这个按钮时，他们将被带回到之前的搜索结果页面。*/}
        <button onClick={goBack}>返回</button>
      </div>
        // <div>
        //     <h2>{commandInfo.command}</h2>
        //     <p>{commandInfo.description}</p>
        //     {/* Todo 在这里你可以添加更多关于命令的详细信息，如使用示例等 */}

        // </div>
    )
}

export default CommandDetail;