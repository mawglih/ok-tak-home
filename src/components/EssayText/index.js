import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import '../App.scss';

const EssayText = ({ startOver }) => {
  const data = useSelector(state => state.essayText)
  const [str, setStr] = useState('');
  const handleChange = () => console.log(data)
  const handleClick = e => startOver(e);
  console.log('data', data)
  
  useEffect(() => {
    let newStr = '';
    data.map(element => {
      let str = Object.values(element)[0];
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
