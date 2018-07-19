import React, { Component } from 'react';
import './MainList.css';

class MainList extends Component {
  constructor(props){
    super(props);
  };

  createRows = function(){
    let rows = "<div className='piece'><p>Here is the List</p></div>";
    for(var i =0; i<this.props.todos.length; i++){
        var thing = this.props.todos.length[i]
    // this.props.todos.forEach(function(todo) {
        rows += "<p className='item'>{thing.action}</p>"
      }
      rows += "</div>"
    return rows;
  };

  render(){
    return (
      // <div className="piece"><p>Here is the List</p></div>
      this.createRows()
      )
  }
}

export default MainList