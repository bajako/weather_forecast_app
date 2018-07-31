import React from 'react';
import ReactDOM from 'react-dom';
import {Search} from "./Search.jsx";


const App = () => ( <Search /> );


document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render( <App />, document.getElementById('app'))
});
