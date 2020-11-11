import React, { ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useSelector, useDispatch } from 'react-redux';
import { userNameSelector } from '../../store/selectors';
import { setUser } from '../../store/actions';

const Home = () => {
  const dispatch = useDispatch();
  const userName: string = useSelector(userNameSelector);

  const inputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch(setUser(event.target.value));
  }

  return (
    <div className="home">
      <div className="home-login">
        <p className="home-login-title"><strong>Hello friend, tell me your name...</strong></p>
        <input className="home-login-input" placeholder="Your name here" value={userName} onChange={inputChangeHandler} />
        <Link to="/game" className="home-login-submit">Let's go</Link>
      </div>
    </div>
  );
}

export default Home;
