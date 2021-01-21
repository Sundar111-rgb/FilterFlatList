import React from "react";
import ReactDOM from "react-dom";

const NumberContext = React.createContext();


function Howtousecontext() {

    return (
        <>
        <NumberContext.Provider name='sundar'>
            <div>
                <Display />
            </div>
        </NumberContext.Provider>
        <NumberContext.Provider email='kumarsun53@gmail.com'>
           <div>
              <Display1 />
           </div>
        </NumberContext.Provider>
            </>
    );
}

function Display() {
    return (
        <NumberContext.Consumer>
            {name => <div>The answer is {name}.</div>}
        </NumberContext.Consumer>
    );
}

function Display1() {
    return (
        <NumberContext.Consumer>
            {email => <div>The answer is {email}.</div>}
        </NumberContext.Consumer>
    );
}


export default  Howtousecontext;
