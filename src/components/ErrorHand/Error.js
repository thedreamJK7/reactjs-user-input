import React from "react";
import Button from "../UI/Button/Button";
import styled from './Error.module.css';
const Error = (props) => {
    return (
      <div>
        <div className={styled.backdrop} onClick={props.errorHands}></div>
        <div className={styled.modal}>
          <div className={styled.header}>
            <h2>{props.title}</h2>
          </div>
          <div className={styled.content}>
            <p>{props.content}</p>
          </div>
          <div className={styled.actions}>
            <Button onClick={props.errorHands}>Okay</Button>
          </div>
        </div>
      </div>
    );
}

export default Error;