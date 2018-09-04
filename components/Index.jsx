import React from 'react';
import ReactDOM from 'react-dom';
import Search from './Search.jsx';


export default class App extends React.Component {
  render() {
    return <Search/>;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<App />, document.getElementById('app'));
});
