import React from 'react';
import { Link } from 'react-router-dom';
import './navigation.scss';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      {/* <Link to="/about">About</Link> 기본 링크 이동  */} 
      <Link to="/about">About</Link>
    </div>
  )
}

export default Navigation;