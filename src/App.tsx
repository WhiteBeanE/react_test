import React, {ChangeEvent, useRef, useState, useEffect} from 'react';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Counter from "./javaScript/Counter";
import Main from "./javaScript/page/Main";
import MyPage from "./javaScript/page/MyPage";
import Login from "./javaScript/page/Login";
import Auth from "./javaScript/Auth";
export default function App(){
    return (
      <div className="App">
          <BrowserRouter>
              <header>
                  <Link to="/">
                      <button>Main</button>
                  </Link>
                  <Link to="/mypage">
                      <button>MyPage</button>
                  </Link>
                  <Link to="/login">
                      <button>Login</button>
                  </Link>
                  <Link to="/count">
                      <button>useEffect</button>
                  </Link>
              </header>
              <Routes>
                  <Route path="/" Component={Auth(Main, null)}/>
                  <Route path="/mypage" Component={Auth(MyPage, true)}/>
                  <Route path="/login" Component={Auth(Login, false)}/>
                  <Route path="/count" Component={Auth(Counter, null)}/>
              </Routes>
          </BrowserRouter>
      </div>
    );
}