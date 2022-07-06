import React from "react";
import ReactDOM from "react-dom";
import Button from "../UI/Button/Button";
import styled from './Error.module.css';
import Wrapper from "../Helper/Wrapper";
const Error = (props) => {
    const Backdrop = (props) => {
      return <div className={styled.backdrop} onClick={props.onConfirm}></div>;
    }
    const ModalOverlay = (props) => {
      return (
        <div className={styled.modal}>
          <div className={styled.header}>
            <h2>{props.xato}</h2>
          </div>
          <div className={styled.content}>
            <p>{props.mazmun}</p>
          </div>
          <div className={styled.actions}>
            <Button onClick={props.onConfirm}>Okay</Button>
          </div>
        </div>
      );
    }
    return (
      <Wrapper>
        {ReactDOM.createPortal(
          <Backdrop onConfirm={props.errorHands} />,
          document.getElementById("backdrop-root")
        )}
        {ReactDOM.createPortal(
          <ModalOverlay
            onConfirm={props.errorHands}
            xato={props.title}
            mazmun={props.content}
          />,
          document.getElementById("overlay-root")
        )}
      </Wrapper>
    );
}

export default Error;