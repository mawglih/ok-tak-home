import React, { useState, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearEssay } from '../../madlibs';
import Essay from '../Essay';
import Prompts from '../Prompts';

import '../App.scss';
import EssayText from '../EssayText';

const AboutMe = () => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();
  const actions = useMemo(
    () => 
    bindActionCreators(
      {
      clearEssay,
    }, 
    dispatch,
    ),
    [dispatch],
  );
  const handleStartOver = e => {
    e.preventDefault();
    setEdit(false);
    actions.clearEssay();
  }

  return (
    <>
      {edit ? (
        <EssayText startOver={e => handleStartOver(e)}/>
      ) : (
        <div className="horizontal half">
          <Prompts/>
          <Essay handleClick={e => setEdit(true)}/>
        </div>
      )}
      
   </>
  )
}

export default AboutMe;