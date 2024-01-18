// 用于展示每个具体项（seq）的详细信息。
// SeqDetail.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const SeqDetail = ({ LinuxCommandData }) => {
  const { seqId } = useParams();
  const navigate = useNavigate();
  const seqDetail = LinuxCommandData.find(cmd => cmd.sequenceId === seqId);

  if (!seqDetail) {
    return <div>详细项未找到</div>;
  }

  const goToCommandDetail = (commandName) => {
    navigate(`/command/${commandName}`); // 根据点击的命令跳转到相应的详情页面
  };

  return (
    <div>
      <h2>{seqDetail.name}</h2>
      <p>{seqDetail.description}</p>
      <h3>相关文件和命令：</h3>
      <ul>
        {seqDetail.filesAndTermsAndUtilities.map((item, index) => (
          <li key={index} onClick={() => goToCommandDetail(item)}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default SeqDetail;
