import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import '../App.scss';

const Essay = ({ handleClick }) => {
  const text = useSelector(state => state.essayText);
  const [buttonStatus, setButtonStatus] = useState('hidden');
  const setEdit = e => handleClick(e);
  const EssayText = () => {
    return (
      <div className="essay">
        {text.map(item => {
            return ( 
              item.answer ? (
              <span key = {item.id}>{item.string.replace(/\$answer/ig, item.answer)}</span>) : (
                <span></span>
              )
          )})
        }
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
        <EssayText />
        <button className = {`btn ${buttonStatus}`} onClick={setEdit}>Edit text</button>
      </div>
    </div>
  )
}

export default Essay;
