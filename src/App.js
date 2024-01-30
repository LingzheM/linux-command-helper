import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css'; // 或 'antd/dist/antd.less'
import Home from './Home';
import SearchResult from './SearchResult';
import CommandDetail from './CommandDetails';
import commandsData from './commands.json';
import LinuxCommandData from './LinuxCommand.json';
import { Input, Button } from 'antd';
import TopicList from './TopicList';
import TopicDetail from './TopicDetail';
import TopicLevel from './TopicLevel.json'
import SeqDetail from './SeqDetail';
import LevelList from './LevelList';
import LevelDetail from './LevelDetail';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [selectedCommand, setSelectedCommand] = useState(null); // 新状态变量


  const handleSearch = (commandName) => {
    const filteredResults = commandsData.find(cmd => cmd.CommandName === commandName);
    console.log("filter"+filteredResults)
    setResults(filteredResults);
  };

  const handleCommandClick = (commandName) => {
    // 根据 commandName 找到对应的命令详情
    const commandDetails = commandsData.find(cmd => cmd.CommandName === commandName);
    setSelectedCommand(commandDetails);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/levels' element={<LevelList levels={TopicLevel}/>}/>
        <Route path='/levels/:levelId' element={<LevelDetail levelData={TopicLevel} topicData={LinuxCommandData} />} />
        <Route path='/topics' element={< TopicList/>} />
        <Route path='/topics/:topicId' element={<TopicDetail />} />
        <Route path="/seq/:seqId" element={<SeqDetail LinuxCommandData={LinuxCommandData} />} />
        <Route path="/search" element={
          <>
            {/* 搜索界面 */}
            <Input
              placeholder="输入命令"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: 200, marginRight: 10 }}
            />
            <button 
              variant="contained"
              color='primary'
              onClick={handleSearch}
            >
            搜索
            </button>
            <SearchResult results={results} onCommandClick={handleCommandClick} />
          </>
        } />
        <Route path="/command/:commandName" element={<CommandDetail />} />
        <Route path="/placeholder" element={<div>其他</div>} />
      </Routes>
    </Router>
  );  

}

export default App;
