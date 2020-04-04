import React, { Component } from 'react';

class Menu extends Component {
  render() {
    // return <h1 className="menu" >bonjour</h1>;
    return(
      <div className="menu">
        <img className="picture" style={{width: 150, height: 50, margin: 20}} src="../picture/le-wagon.png" alt="logo"/>
      </div>
    ) 
  }
};

export default Menu;
