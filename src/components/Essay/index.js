import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../App.scss';

const Essay = ({ handleClick }) => {
  const text = useSelector(state => state.essayText);
  const [buttonStatus, setButtonStatus] = useState('hidden');
  const setEdit = e => handleClick(e);
  const Essay = () => {
    return (
      <div className="essay">
        {text.map((item, ind) => {
          return Object.values(item).map(el => <span key={ind}>{el}</span>)
        })}
      </div>
    )
  }
  useEffect(() => {
    if(text.length > 5) setButtonStatus('visible');
  }, [text]);
  
  return (
    <div className="vertical">
      <div className="textField">
        <h2>Your essay text</h2>
        <Essay />
        <button className = {`btn ${buttonStatus}`} onClick={setEdit}>Edit text</button>
      </div>
    </div>
  )
}

export default Essay;