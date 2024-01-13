import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SearchResult from './SearchResult';
import CommandDetail from './CommandDetails';
import commandsData from './commands.json';

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
        <Route path="/search" element={
          <>
            {/* 搜索界面 */}
            <input 
              type="text" 
              placeholder="输入命令或描述" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)} 
            />
            <button onClick={handleSearch}>搜索</button>
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
