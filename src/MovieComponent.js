import React, { Component } from 'react';
import UserComponent from './UserComponent'

class MovieComponent extends Component {
  render() {
    const {movieInfo, favUsers, userList} = this.props;
    return(
      <li key={movieInfo.id} >
        <h2>{movieInfo.name}</h2>
		<h3>Liked by: </h3>
		<UserComponent 
		  favUsers={favUsers}
    	  userList={userList}
		/>
      </li>
    ) 
  } 
}
export default MovieComponent;