import React, { Component } from "react";



class Dragon extends Component{

  createNewDragon(){
    this.fetchDragon();
  }

  fetchDragon = () => {
    fetch('http://localhost:3000/dragon/new')
    .then(response => response.json())
    .then( json => console.log(json.dragon))
    .catch(error => console.error(error))
  }

  render() {

    return(
      <div>
        <h2>This is a new Dragon</h2>
        <button onSubmit={this.createNewDragon()}>Make a Dragon!</button>
      </div>
    )
  }


}

export default Dragon;
