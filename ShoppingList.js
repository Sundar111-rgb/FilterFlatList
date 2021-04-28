import React, { useReducer, useRef } from "react";
import ReactDOM from "react-dom";
//import "./styles.css";
import "./index.css";

export default function ShoppingList() {
  const inputRef = useRef();
  const [items, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return [
          ...state,
          {
            id: state.length,
            name: action.name,
          },
        ];
      case "remove":
        // keep every item except the one we want to remove
        return state.filter((_, index) => index != action.index);
      default:
        return state;
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "add",
      name: inputRef.current.value,
    });
    inputRef.current.value = "";
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input ref={inputRef} />
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={item.id}>
            {item.name}{" "}
            <button onClick={() => dispatch({ type: "remove", index })}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

//ReactDOM.render(<ShoppingList />, document.querySelector("#root"));
