import React, { useState } from "react";
import styled from "./InputUser.module.css";
import Button from "../../UI/Button/Button";

const InputUserItem = (props) => {
  const [userName, setUserName] = useState();
  const [userAge, setUserAge] = useState();
  const userNameChangedHandler = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };
  const userAgeChangedHandler = (event) => {
    event.preventDefault();
    setUserAge(event.target.value);
  };
  const submitChangedHandler = (event) => {
    event.preventDefault();
    props.getInputInform(userName, userAge);
    setUserAge('');
    setUserName('');
  };
  return (
    <form onSubmit={submitChangedHandler} className={styled.input}>
      <label>Username</label>
      <input type="text" onChange={userNameChangedHandler} value={userName}/>
      <label>Age (Years)</label>
      <input type="number" onChange={userAgeChangedHandler} value={userAge}/>
      <Button type="submit">Add User</Button>
    </form>
  );
};

export default InputUserItem;
