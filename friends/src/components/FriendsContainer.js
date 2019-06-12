import React from "react";

import Friends from "./Friends";
import NewFriend from "./NewFriend";

class FriendsContainer extends React.Component {
  render() {
    return (
      <>
        <Friends />
        <NewFriend />
      </>
    );
  }
}

export default FriendsContainer;
