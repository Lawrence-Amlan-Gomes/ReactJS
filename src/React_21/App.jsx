import { useState, useCallback, useMemo  } from "react";
import Button from "./Component/Button";
import Title from "./Component/Title";
import ShowCount from "./Component/ShowCount";
import React from "react"
function App() {
      // useCallback and useMemo helps us in React Performence
      const [count1, setCount1] = useState(0);
      const [count2, setCount2] = useState(0);

      const incrementByOne = useCallback(() => {
            setCount1((prevState) => prevState + 1);
      }, []); // it will memorise the reference of the function and it will render only once

      const incrementByFive = useCallback(() => {
            setCount2((prevState) => prevState + 5);
      }, []) // it will memorise the reference of the function and it will render only once

      const isEvenOrOdd = useMemo(() => { // it memorise the return value of a function
            return count1 % 2 == 0
      },[count1])
      return (
            <div className="app">
                  <Title/>
                  <ShowCount count={count1} title="Coounter 1"/>
                  <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
                  <Button handleClick={incrementByOne}>Increment by one</Button>
                  <hr />
                  <ShowCount count={count2} title="Coounter 2"/>
                  <Button handleClick={incrementByFive}>Increment by five</Button>
            </div>
            
      );
     
};

export default App
