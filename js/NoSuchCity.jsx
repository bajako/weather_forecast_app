import React from 'react';
import App from './Index.jsx';

export default class NoSuchCity extends React.Component {
  returnToMainSite = () => <App/>;

  render() {
    return (
      <div>
        <form onSubmit={this.returnToMainSite} className="new-query-form">
          <input type="submit" value="New Query" className="new-query"/>
        </form>
        <div className="no-such-city">{"We couldn't find your city. Please try again with new query"}</div>
        <div className="underline"> </div>
      </div>
    );
  }
}
