import React, { useReducer } from "react";

const Action =  {
  ADD: "Add",
  SUB: "Sub",
  MUL: "Mul",
  DIV: "Div",
  RESET: "Reset",
};

export default function Appp() {
  const [value, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case Action.ADD:
        return state + action.payload;

      case Action.SUB:
        return state - action.payload;

      case Action.MUL:
        return state * action.payload;

      case Action.DIV:
        return state / action.payload;

      case Action.RESET:
        return (state = action.payload);
    }
  }, 1000);

  return (
    <div bgcolor="blood">
      <h1>{value}</h1>

      <button onClick={() => dispatch({ type: Action.ADD, payload: 1 })}>
        ADD
      </button>
      <button onClick={() => dispatch({ type: Action.SUB, payload: 1 })}>
        SUB
      </button>

      <button onClick={() => dispatch({ type: Action.MUL, payload: 5 })}>
        MUL
      </button>

      <button onClick={() => dispatch({ type: Action.DIV, payload: 4 })}>
        DIV
      </button>

      <button onClick={() => dispatch({ type: Action.RESET, payload: 1000 })}>
        RESET
      </button>
    </div>
  );
}
