import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
// github pages에 업로드 하는 것이 아닌 경우에는
// HashRouter대신에 BrowserRouter를 사용해보자.
// BrowserRouter는 githun pages에 업로드 하기 번거로운 부분들이 많음
import Home from './routes/Home';
import About from './routes/About';
import Detail from './routes/Detail';
import Navigation from './routes/Navigation';

function App() {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  )
}

export default App;