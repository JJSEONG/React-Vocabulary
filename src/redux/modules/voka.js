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
    {
      word: "Strawberry",
      mean: "딸기",
      ex: "딸기는 빨간색"
    },
    {
      word: "Strawberry",
      mean: "딸기",
      ex: "딸기는 빨간색"
    },
    {
      word: "Strawberry",
      mean: "딸기",
      ex: "딸기는 빨간색"
    }
  ]
}

// Action Creators
export function createCard(card_text) {
  return { type: CREATE, card_text };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "voka/CREATE": {
      const new_card = [...state.list, action.card_text];
      return {list : new_card};
    }
    default: return state;
  }
}