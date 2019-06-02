import React from 'react';
import './App.css';
import GroupCreation from './components/GroupCreation'
import data from './data/friends';


function App() {
    return (
        <div className="App">
            <GroupCreation data={data}/>
        </div>
    );
}

export default App;
