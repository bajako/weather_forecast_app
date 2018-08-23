import React from "react";

export class NoSuchCity extends React.Component {
  constructor(props) {
    super(props);
  }

  returnToMainSite = () => {
    return <App/>;
  };

  render() {

    return (
      <div>
        <form onSubmit={this.returnToMainSite} className='newQueryForm'>
          <input type='submit' value='New Query' className='newQuery'/>
        </form>
        <div className='noSuchCity'>We couldn't find your city. Please try again with new query</div>
        <div className='underline'> </div>
      </div>
        )}



}