// voka.js
import { db } from "../../firebase"
import { collection, getDoc, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";

// Actions

const LOAD = "voka/LOAD";
const CREATE = 'voka/CREATE';
const UPDATE = 'voka/UPDATE';
const DELETE = 'voka/DELETE';

const initialState = {
  card : [{}]
}

// Action Creators
export function loadVoka(voka) {
  return { type: LOAD, voka }
}

export function createCard(voka) {
  return { type: CREATE, voka };
}

export function updateCard(voka) {
  return { type: UPDATE, voka }
}

// middlewares
export const loadVokaFB = () => {
  return async function (dispatch) {
    const voka_data = await getDocs(collection(db, "voka"));

    let voka_list = [];

    voka_data.forEach((voka) => {
      voka_list.push({id:voka.id, ...voka.data()});
    });

    dispatch(loadVoka(voka_list));
  }
}

export const addVokaFB = (voka) => {
  return async function (dispatch) {
    const docRef = await addDoc(collection(db, "voka"), voka);
    // const _voka = await getDoc(docRef);
    const voka_data = {id: docRef.id, ...voka};

    dispatch(createCard(voka_data));
  }
}

export const updateVokaFB = (voka, id) => {
  return function (dispatch) {
    console.log(voka)
    const docRef = doc(collection(db, "voka"), id);
    updateDoc(docRef, voka)
  }
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "voka/LOAD": {
      return {card : action.voka}
    }
    case "voka/CREATE": {
      // console.log(action.word, action.mean, action.ex)
      const new_card = [...state.card, action.voka];
      return {card : new_card};
    }
    case "voka/UPDATE": {
      const update_card = [...state.card, ...action.voka]
      console.log(update_card)
      return {card : update_card}
    }
    default: return state;
  }
}