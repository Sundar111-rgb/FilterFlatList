import React, { useReducer } from "react";

import * as Operation from "./Operation";
import { ADD, SUB, MUL, DIV, RESET } from "./Operation";

const Action = {
  ADD: Operation.Action.ADD,
  SUB: Operation.Action.SUB,
  MUL: Operation.Action.MUL,
  DIV: Operation.Action.DIV,
  RESET: Operation.Action.RESET,
};

export default function Appp() {
  const [VALUE, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case Action["ADD"]:
        return Operation.Add(state, action.payload);

      case Action["SUB"]:
        return Operation.Sub(state, action.payload);

      case Action["MUL"]:
        return Operation.Mul(state, action.payload);

      case Action["DIV"]:
        return Operation.Div(state, action.payload);

      case Action["RESET"]:
        return Operation.Reset(state, action.payload);
    }
  }, 1000);

  

  return (
    <div bgcolor="blood">
      <h1>{[VALUE]}</h1>

      <button onClick={() => dispatch({ type: ADD, payload: 1 })}>
        {[ADD]}
      </button>
      <button onClick={() => dispatch({ type: Action.SUB, payload: 1 })}>
        {Action["SUB"]}
      </button>

      <button onClick={() => dispatch({ type: Action["MUL"], payload: 5 })}>
        {Action["MUL"]}
      </button>

      <button onClick={() => dispatch({ type: Action["DIV"], payload: 4 })}>
        {Action["DIV"]}
      </button>

      <button onClick={() => dispatch({ type: Action.RESET, payload: 1000 })}>
        {[RESET]}
      </button>
    </div>
  );
}
----------------------------------------------------------------------------------

export const Add = (state, payload) => state + payload;
export const Sub = (state, payload) => state - payload;
export const Mul = (state, payload) => state * payload;
export const Div = (state, payload) => state / payload;
export const Reset = (state, payload) => (state = payload);

export const Action = {
  ADD: "Add",
  SUB: "Sub",
  MUL: "Mul",
  DIV: "Div",
  RESET: "Reset",
};

export const ADD = "Add";
export const SUB = "Sub";
export const MUL = "Mul";
export const DIV = "Div";
export const RESET = "Reset";

export const VALUE = "value";
