import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'antd/dist/antd.css'; // 或 'antd/dist/antd.less'
import Home from './Home';
import SearchResult from './SearchResult';
import CommandDetail from './CommandDetails';
import commandsData from './commands.json';
import LinuxCommandData from './LinuxCommand.json';
import { Input, Button } from 'antd';
import { Layout } from 'antd';
import TopicList from './TopicList';
import TopicDetail from './TopicDetail';
import TopicLevel from './TopicLevel.json'
import SeqDetail from './SeqDetail';
import LevelList from './LevelList';
import LevelDetail from './LevelDetail';


function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filteredResults = commandsData.filter(item =>
      item.command.includes(searchTerm) || item.description.includes(searchTerm)
    );
    setResults(filteredResults);
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
              placeholder="输入命令或描述"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: 200, marginRight: 10 }}
            />
            {/* <input 
              type="text" 
              placeholder="输入命令或描述" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            /> */}
            <button 
              variant="contained"
              color='primary'
              onClick={handleSearch}
            >
            搜索
            </button>
            <SearchResult results={results} />
          </>
        } />
        <Route path="/command/:command" element={<CommandDetail />} />
        <Route path="/placeholder" element={<div>其他功能（待实现）</div>} />
      </Routes>
    </Router>
  );  

}

export default App;
