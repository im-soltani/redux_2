import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allreducers from './reducers';
import { Provider } from 'react-redux';


const store  = createStore(allreducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())




/*
//Action increment
 const Increment = () => {
   return{
   type : 'INCREMENT'
   };
 };
 const Decrement = () => {
   return {
    type : 'DECREMENT'
   }
 }
 // Reducer
 const counter = (state = 0,action) => {
     switch (action.type)
     {
       case 'INCREMENT':
        return state + 1 ;
       
       case 'DECREMENT':
         return state - 1 ;
        
     }
    };

     let store = createStore(counter);
     //display it in the console
     store.subscribe(() => console.log(store.getState()));

   //dispach
   store.dispatch(Increment());
   store.dispatch(Decrement());
   store.dispatch(Decrement());

*/

ReactDOM.render(
  //<React.StrictMode>
  //</React.StrictMode>
  <Provider store={store}>
    <App />
 </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
