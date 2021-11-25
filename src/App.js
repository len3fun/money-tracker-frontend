import React, {Component} from "react";
import Main from "./components/main";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Signup from "./components/signup";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main/>}/>
                <Route path="/sign-up" element={<Signup/>}/>
            </Routes>
        </Router>
    );
}

export default App;
