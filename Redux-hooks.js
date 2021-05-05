import React from "react";
import { useSelector, connect, useDispatch } from "react-redux";

const Qwerty = (props) => {
  const name = useSelector((state) => state.rootReducer1);

  const dispatch = useDispatch();
  return (
    <div>
      <h1>
        FirstName: {name.firstName}, LastName: {name.lastName}
      </h1>

      <h1>
        FirstName: {props.Name.firstNamee},LastName: {props.Name.lastNamee}
      </h1>
      <button onClick={props.increment}>Increment</button>
      <button onClick={props.decrement}>Decrement</button>
      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
            payload: {
              firstName: "Vijay..",
              lastName: "Deverakonda...",
              firstNamee: "Rahul.....",
              lastNamee: "Rohan.....",
            },
          })
        }
      >
        INCREMENT
      </button>
      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
            payload: {
              firstName: "Vijay..........",
              lastName: "Deverakonda................",
              firstNamee: "Rahul..",
              lastNamee: "Rohan...",
            },
          })
        }
      >
        DECREMENT
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    Name: state.rootReducer2,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () =>
      dispatch({
        type: "INCREMENT",
        payload: {
          firstName: "Samantha",
          lastName: "Akeneni",
          firstNamee: "dinesh",
          lastNamee: "rishant",
        },
      }),
    decrement: () =>
      dispatch({
        type: "DECREMENT",
        payload: {
          firstName: "Vijay",
          lastName: "Deverakonda",
          firstNamee: "Rahul",
          lastNamee: "rohan",
        },
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Qwerty);
-------------------------------------------------------------------------

import { INCREMENT, DECREMENT } from "../actions/actions";

const initialState = {
  counter: 0,
  founter: 0,
};

const initialName = {
  firstName: "sundar",
  lastName: "chauhan",
};

const initialNamee = {
  firstNamee: "sundar1",
  lastNamee: "chauhan1",
};

// function rootReducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1, founter: state.founter - 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1, founter: state.founter + 1 };
//     default:
//       return state;
//   }
// }

export const rootReducer1 = (state = initialName, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    case DECREMENT:
      return {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
};

export const rootReducer2 = (state = initialNamee, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        firstNamee: action.payload.firstNamee,
        lastNamee: action.payload.lastNamee,
      };
    case DECREMENT:
      return {
        firstNamee: action.payload.firstNamee,
        lastNamee: action.payload.lastNamee,
      };
    default:
      return {
        firstNamee: "Sundar",
        lastNamee: "Pandit",
      };
  }
};

// export const rootReducer3 = (state = initialCount, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return {
//         ...state, state++;
//   }
//    case 'INCREMENT':
//       return {
//         ...state, state + 1;
//       }
//   }
// }

----------------------------------------------------------------------------

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Info from "./Info";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { rootReducer1, rootReducer2 } from "./reducer/rootReducer";
import { combineReducers } from "redux";
import Qwerty from "./Qwerty";
import Counter from "./Counter";

// const rootReducer = combineReducers({
//   reduce1: rootReducer1,
//   reduce2: rootReducer2,
// });

// const store = createStore(
//   combineReducers({
//     rootReducer1,
//     rootReducer2,
//   })
// );

const store = createStore(rootReducer2);

console.log("------->>>>>>>------", store.getState());
ReactDOM.render(
  <React.StrictMode>
    <Provider
      store={createStore(combineReducers({ rootReducer1, rootReducer2 }))}
    >
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
