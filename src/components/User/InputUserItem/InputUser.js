import React, { useState, useRef } from "react";
import styled from "./InputUser.module.css";
import Button from "../../UI/Button/Button";
import Error from "../../ErrorHand/Error";
import Wrapper from "../../Helper/Wrapper";

const InputUserItem = (props) => {
  const [error, setError] = useState();
  const UserName = useRef('');
  const UserAge = useRef('');
  const submitChangedHandler = (event) => {
    event.preventDefault();
    const EnteredName = UserName.current.value;
    const EnteredAge = UserAge.current.value;
    if (EnteredName.trim().length === 0 || EnteredAge.trim().length === 0) {
      setError({
        title: "Invalid type",
        content: "Plese enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+EnteredAge < 1) {
      setError({
        title: "Invalid age",
        content: "Plese enter a valid age (>0)",
      });
      return;
    }
    props.getInputInform(UserName.current.value, UserAge.current.value);
    UserName.current.value = '';
    UserAge.current.value = '';
  };

  const ErrorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <Error
          title={error.title}
          content={error.content}
          errorHands={ErrorHandler}
        />
      )}
      <form onSubmit={submitChangedHandler} className={styled.input}>
        <label>Username</label>
        <input type="text" ref={UserName} />
        <label>Age (Years)</label>
        <input type="number" ref={UserAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Wrapper>
  );
};

export default InputUserItem;
