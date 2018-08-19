import React, { Component } from 'react';
import MovieComponent from './MovieComponent';

class Dashboard extends Component {
  render() {
    const {userByMovies, movieList, userList} = this.props;
    

    const movieComp = Object.keys(movieList).map(id => (
	  <MovieComponent key={id}
      	movieInfo={movieList[id]}
  		favUsers={userByMovies[id]}
		userList={userList}
      />
    ));


    return <ul>{movieComp}</ul>
  }
  
}
export default Dashboard;