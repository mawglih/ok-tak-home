import React, {useState, useMemo} from 'react';
import { useDispatch } from 'react-redux';
import { setEssayData, setEssayText } from '../../madlibs';
import { bindActionCreators } from 'redux';
import { FIELDS, FIELD_NAMES } from '../../constants';
import { getTextTemplates } from '../../helpers';

const Prompts = () => {
  const dispatch = useDispatch();
  const actions = useMemo(
    () => 
    bindActionCreators(
      {
      setEssayData,
      setEssayText,
    }, 
    dispatch,
    ),
    [dispatch],
  );
  const [data, setData] = useState({});
  const handleChange = e => {
    const {name, value} = e.target
    setData({[name]: value});
  }
  const getRandom = num => {
    const random = Math.floor(Math.random() * num);
    return random;
  };
  const setLine = (key, value) => {
    const obj = {};
    let num = getTextTemplates(FIELD_NAMES[key]).length;
    obj[key] = getTextTemplates(FIELD_NAMES[key])[getRandom(num)].replace('$answer',value);

    return obj;
  }
  const handleOnBlur = e => {
    e.preventDefault();
    const key = Object.keys(data)[0];
    const value = Object.values(data)[0];    
    let answer = setLine(key, value);
    actions.setEssayData(data);
    actions.setEssayText(answer);
  }
  const handleOnFocus = e => {
    e.preventDefault();
    const { name, value } = e.target;
    if(value) {
      console.log('value', name, value);
    }
  }
  return (
    <div className="vertical half grey">
      <h2>About Me</h2>
      {
        Object.keys(FIELDS).map(key => (
          <label 
            key={key}
            className="labelBox"
          >
            {FIELDS[key]}
            <input className="inputBox" name={key} value={data.value} onChange={handleChange} onBlur={handleOnBlur} onFocus={handleOnFocus}/>
          </label>
        ))
      }
    </div>
  )
}

export default Prompts;
