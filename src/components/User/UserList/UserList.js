import React from "react";
import UserItem from "../UserItem/UserItem";
import styled from './UserList.module.css'

const UserList = (props) => {
    return (
      <div className={styled.users}>
        <ul>{props.inform.map((information)=>(
            <UserItem>
                {information.name + ` (${information.age} years old)`}
            </UserItem>
        ))}</ul>
      </div>
    );
}

export default UserList;