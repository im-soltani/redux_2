import React from 'react';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import {Increment,Decrement} from './Actions'

function App() {
  const  bonjour = useSelector(state => state.counter);
  const   hello = useSelector(state => state.isLogged);
  const   dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter {bonjour}</h1>
      <button onClick={() =>dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
      { hello ?<h3>valuable information i sholdn't see </h3> : ''}

    </div>
  );
}

export default App;
