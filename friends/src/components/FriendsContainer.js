import React from "react";
import axios from "axios";

class FriendsContainer extends React.Component {
  state = {
    friends: [],
    loader: false,
    errorMsg: ""
  };

  fetchData = () => {
    axios
      .get("http://localhost:5000/friends/")
      .then(response => {
        this.setState({
          friends: response.data,
          loader: true
        });
      })
      .catch(error => {
        this.setState({
          errorMsg: error.message
        });
      })
      .finally(() => {
        this.setState({
          loader: false
        });
      });
  };

  componentDidMount() {
    this.fetchData();
  }

  render() {
    return (
      <div>
        {this.state.loader && <span>Loading friends ...</span>}
        {this.state.errorMsg && <span>{this.state.errorMsg}</span>}

        {this.state.friends.map(friend => (
          <div key={friend.id}>
            <span>{friend.name}</span>
            <span>{friend.age}</span>
            <span>{friend.email}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default FriendsContainer;
