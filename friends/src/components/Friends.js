import React from "react";
import axios from "axios";
import styled from "styled-components";

const StyledDiv = styled.div`
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  margin: 100px auto 0 auto;
  padding: 20px 0 20px;
  width: fit-content;

  border-radius: 8px;
  background-color: #a7bcff;
  border: 1px solid #8da8ff;
  color: #000;

  box-shadow: 0px 0px 40px 10px #c0cfff;

  h2 {
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: #fff;
    padding: 0 0 20px 0;
    border-bottom: 1px solid #5870cb3d;
  }

  div {
    padding: 15px 40px;
    border-bottom: 1px solid #5870cb3d;
    transition: all 0.3s;

    &:hover {
      background-color: #fff;
      border-bottom: 1px solid #fff;
    }

    span {
      color: #000;
    }

    strong {
      background-color: #f48fb1;
      color: #fff;
      margin: 0 5px;
      padding: 4px;
      font-size: 10px;
      border-radius: 30px;
    }

    a {
      color: #26418f;
      text-decoration: none;
      transition: all 0.3s;

      &:hover {
        color: #3454ff;
      }
    }
  }
`;

class Friends extends React.Component {
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
      <StyledDiv>
        {this.state.loader && <span>Loading friends ...</span>}
        {this.state.errorMsg && <span>{this.state.errorMsg}</span>}

        <h2>FRIENDS</h2>

        {this.state.friends.map(friend => (
          <div key={friend.id}>
            <span>{friend.name}</span>
            <strong>{friend.age}</strong>
            <a href={`mailto:${friend.email}`}>{friend.email}</a>
          </div>
        ))}
      </StyledDiv>
    );
  }
}

export default Friends;
