import React from 'react';
import './Header.css';
import { useSelector } from 'react-redux';
import { userNameSelector } from '../../store/selectors'

const Header = (props: any) => {
  const userName = useSelector(userNameSelector);

  return (
    <div className="header">
      <div className="header-welcome">
        <strong>Good luck, {userName} here!</strong>
        <p>Pick up the right cards</p>
      </div>
      <div className="header-score">
        <strong>Your score: {props.score} seconds</strong>
        <p>The faster the better</p>
      </div>
    </div>
  )
}

export default Header;