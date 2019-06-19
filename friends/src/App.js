import React from "react";
import axios from "axios";
import styled from "styled-components";

import Friends from "./components/Friends";
import NewFriend from "./components/NewFriend";

const data = "http://localhost:5000/friends/";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      errorMsg: null,
      friend: null
    };
  }

  nameInput = React.createRef();
  ageInput = React.createRef();
  emailInput = React.createRef();

  componentDidMount() {
    this.fetchData();
  }

  fetchData = () => {
    axios
      .get(data)
      .then(res => this.setState({ friends: res.data }))
      .catch(err => this.setState({ errorMsg: err.message }));
  };

  addData = () => {
    console.log("meu");
    const newFriend = {
      name: this.nameInput.current.value,
      age: this.ageInput.current.value,
      email: this.emailInput.current.value
    };

    axios
      .post(data, newFriend)
      .then(() => this.fetchData())
      .then(() => {
        this.nameInput.current.value = "";
        this.ageInput.current.value = "";
        this.emailInput.current.value = "";
      });
  };

  deleteData = e => {
    console.log("delete");
    const deleteTarget = e.target.value;
    axios
      .delete(`${data}${deleteTarget}`)
      .then(() => this.fetchData())
  }

  render() {
    return (
      <StyledDiv>
        <Friends
          friends={this.state.friends}
          buttonDelete={this.buttonDelete}
          deleteData={this.deleteData}
        />
        <NewFriend
          nameInput={this.nameInput}
          ageInput={this.ageInput}
          emailInput={this.emailInput}
          addData={this.addData}
        />
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  background-color: #e84545;
  padding: 40px 0;
  width: fit-content;
  margin: 50px auto;
  border-radius: 4px;
  border: 1px solid #53354a;
`;

export default App;
