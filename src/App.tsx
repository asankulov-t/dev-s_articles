import React, {useEffect, useState} from 'react';
import './App.css';
import NavSide from "./components/NavSide/NavSide";
import MainBlock from "./components/MainBlock/MainBlock";
import {Route, Routes} from 'react-router-dom';

function App() {
    return (
        <div className="App">
          <NavSide/>
          <MainBlock/>

        </div>
    );
}

export default App;
