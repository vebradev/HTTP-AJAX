import React from "react";
import styled from "styled-components";

class Friends extends React.Component {
  render() {
    return (
      <StyledDiv>
        {/* {this.props.loader && <span>Loading friends ...</span>}
        {this.props.errorMsg && <span>{this.props.errorMsg}</span>} */}

        {this.props.friends.map(friend => (
          <div key={friend.id}>
            <span>{friend.name}</span>
            <strong>{friend.age}</strong>
            <a href={`mailto:${friend.email}`}>{friend.email}</a>
            <button value={friend.id} onClick={this.props.deleteData}>x</button>
          </div>
        ))}
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  color: #2b2e4a;
  font-weight: bold;
  font-family: monospace;
  font-size: 18px;

  div {
    position: relative;
    padding: 20px 60px;
    border-top: 1px solid #903749;
    transition: all 0.3s;
    cursor: pointer;

    &:last-child {
      border-bottom: 1px solid #903749;
    }

    &:hover {
      background-color: #fff;

      button {
        opacity: 1;
      }

      strong {
        color: #fff;
        transition: all 0.3s;
      }
    }
  }

  strong {
    background-color: #2b2e4a;
    padding: 6px;
    border-radius: 50px;
    font-size: 14px;
    font-weight: normal;
    margin: 0 7px;
    color: #e84545;
  }

  a {
    color: #2b2e4a;
  }

  button {
    background-color: #903749;
    color: #e84545;
    position: absolute;
    right: 0;
    top: 0;
    border: 0;
    height: 58px;
    width: 50px;
    font-size: 14px;
    cursor: pointer;
    transition: all 0.3s;
    opacity: 0;

    &:hover {
      background-color: #2b2e4a;
      color: #fff;
    }
  }
`;

export default Friends;
