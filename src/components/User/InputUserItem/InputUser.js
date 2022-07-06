import React, { useState } from "react";
import styled from "./InputUser.module.css";
import Button from "../../UI/Button/Button";
import Error from "../../ErrorHand/Error";
import Wrapper from "../../Helper/Wrapper";

const InputUserItem = (props) => {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');
  const [error, setError] = useState();
  const submitChangedHandler = (event) => {
    event.preventDefault();
    if(userName.length === 0 || userAge.length ===0) {
        setError({
            title: 'Invalid type',
            content: 'Plese enter a valid name and age (non-empty values)'
        });
        return;
    }
    if(+userAge < 1) {
        setError({
            title: "Invalid age",
            content: "Plese enter a valid age (>0)",
        });
        return;
    }
    props.getInputInform(userName, userAge);
    setUserAge('');
    setUserName('');
  };
  const userNameChangedHandler = (event) => {
    event.preventDefault();
    setUserName(event.target.value.trim());
  };
  const userAgeChangedHandler = (event) => {
    event.preventDefault();
    setUserAge(event.target.value.trim());
  };

  const ErrorHandler = () => {
    setError(null);
  }
  return (
    <Wrapper>
      {error && <Error title={error.title} content={error.content} errorHands={ErrorHandler}/>}
      <form onSubmit={submitChangedHandler} className={styled.input}>
        <label>Username</label>
        <input type="text" onChange={userNameChangedHandler} value={userName} />
        <label>Age (Years)</label>
        <input type="number" onChange={userAgeChangedHandler} value={userAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Wrapper>
  );
};

export default InputUserItem;
