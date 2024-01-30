import React from "react";
import { Link } from "react-router-dom";

// 在这个 `SearchResult` 组件中，我们接受一个 `results` 属性，它应该是一个包含搜索结果的数组。
const SearchResult = ({results}) => {
    if (!results || results.length === 0) {
        return <p>没有找到任何结果</p>;
    }

    return (
        <div>
            {/* 渲染搜索结果 */}
            {results.map(result => (
                <div key={result.CommandID} >
                    {result.CommandName}
                </div>
            ))}
        </div>
    );
  

    // return (
    //     <ul>
    //         {results.map((result, index)=>(
    //             // 在这个更新后的 `SearchResult` 组件中，每个命令名称被一个 `Link` 组件包裹，这使得用户可以点击命令名称并导航到该命令的详情页面。
    //             <li key={index}>
    //                 <Link to={`/command/${result.command}`}>
    //                     <h3>{result.command}</h3>
    //                 </Link>
    //                 <p>{result.description}</p>
    //             </li>
    //         ))}
    //     </ul>
    // );
};

export default SearchResult;