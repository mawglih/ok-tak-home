import {
  FIELD_NAMES,
} from './constants';


// Action types
// ----------------------------------------------------------------------------

export const SUBMIT_FIELD = 'MADLIBS.SUBMIT_FIELD';
export const INCREMENT_COUNTER = 'MADLIBS.INCREMENT_COUNTER';
export const SET_ESSAY_DATA = 'SET_ESSAY_DATA';
export const SET_ESSAY_TEXT = 'SET_ESSAY_TEXT';
export const CLEAR_ESSAY = 'CLEAR_ESSAY';

// Initial state
// ----------------------------------------------------------------------------

export const INITIAL_STATE = {
  fieldOrder: [
    FIELD_NAMES.hometown,
    FIELD_NAMES.favoriteFood,
    FIELD_NAMES.loveToDo,
    FIELD_NAMES.music,
    FIELD_NAMES.messageIf,
    FIELD_NAMES.bar,
  ],

  fieldAnswers: {},
  essayText: [],

  counter: 1,
};


// Reducer
// ----------------------------------------------------------------------------

export function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case SUBMIT_FIELD: {
      return state;
    }

    case INCREMENT_COUNTER: {
      return {
        ...state,
        counter: state.counter + 1,
      };
    }

    case SET_ESSAY_DATA: {
      return {
        ...state,
        fieldAnswers: {...state.fieldAnswers, ...payload},
      }
    }
    case SET_ESSAY_TEXT: {
      return {
        ...state,
        essayText: [...state.essayText, payload],
      }
    }

    case CLEAR_ESSAY: {
      return {
        ...state,
        essayText: [],
        fieldAnswers: {},
      }
    }

    default:
      return state;
  }
}


// Action creators
// ----------------------------------------------------------------------------

export function submitField({ id, answer }) {
  return { type: SUBMIT_FIELD, payload: { fieldName: id, answer } };
}

export function increment() {
  return { type: INCREMENT_COUNTER };
}

export function setEssayData(payload) {
  return {
    type: SET_ESSAY_DATA,
    payload,
  }
}

export function setEssayText(payload) {
  return {
    type: SET_ESSAY_TEXT,
    payload,
  }
}

export function clearEssay() {
  return {
    type: CLEAR_ESSAY,
  }
}
