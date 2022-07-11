// voka.js

// Actions
const CREATE = 'voka/CREATE';

const initialState = {
  card : [
    {
      word: "Apple",
      mean: "사과",
      ex: "사과는 맛있다"
    },
    {
      word: "Banana",
      mean: "바나나",
      ex: "바나나는 노란색"
    },
    {
      word: "Strawberry",
      mean: "딸기",
      ex: "딸기는 빨간색"
    },
  ]
}

// Action Creators
export function createCard(word, mean, ex) {
  console.log("액션 생성!")
  return { type: CREATE, word: word, mean: mean, ex: ex };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "voka/CREATE": {
      console.log(action.word, action.mean, action.ex)
      const new_card = [...state.card, {word: action.word, mean: action.mean, ex: action.ex}];
      return {card : new_card};
    }
    default: return state;
  }
}