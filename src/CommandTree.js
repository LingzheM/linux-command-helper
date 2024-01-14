// CommandTree.js 用来渲染树状图
import React from "react";
import Tree from "react-d3-tree";

const CommandTree = ({ data }) => {
    // 
    const nodeSize = { x: 200, y: 200 };
    const translate = { x: 100, y: 100};

    return (
        <div id="treeWrapper" style={{ width: '100%', height: '100vh'}}>
            <Tree data={data} nodeSize={nodeSize} translate={translate} />
        </div>
    );
}

export default CommandTree;