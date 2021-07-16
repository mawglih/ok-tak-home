import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../App.scss';

const EssayText = ({ startOver }) => {
  const data = useSelector(state => state.essayText)
  const [str, setStr] = useState('');
  const handleChange = () => console.log(data)
  const handleClick = e => startOver(e);
  
  useEffect(() => {
    let newStr = '';
    data.map(element => {
      let str = element.answer ? element.string.replace(/\$answer/ig, element.answer) : '';
      return newStr += str;
      });
      setStr(newStr);
    
  }, [data]);

  return(
    <div className="container">
      <div className="centered">
        <h2>Your essay text</h2>
        <textarea value = {str} onChange={handleChange}/>
        <button className="btn" onClick={handleClick}>Start over</button>
      </div>
    </div>
    
  )
}

export default EssayText;
