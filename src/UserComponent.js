import React, { Component } from 'react';

class UserComponent extends Component {
  render() {
	const {favUsers, userList} = this.props;
    console.log(favUsers);
	if(!favUsers) {
      return <p>None of the current users liked this movie.</p>;
    }
    const users = favUsers.map(id => (
      <li key={id} >
		<p>{userList[id].name}</p>
  	  </li>
    ));

console.log("users: ",users);
    
    return <ul>{users}</ul>
  }
}
export default UserComponent;