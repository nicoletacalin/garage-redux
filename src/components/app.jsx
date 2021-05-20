import React from 'react';


const App = (props) => {
  return (
    <div className="aside">
      <div className="background" style={{backgroundImage: "url('/assets/images/mechanic.jpeg')"}}></div>
      <img className="logo" src="/assets/images/logo.svg" alt="logo" />
      <h1>{props.garage}</h1>
      <p>My garage is the best</p>
      {props.children}
    </div>
  );
}




export default App;
