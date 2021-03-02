import React from "react"

const UserCard = (props) => {
    return (
      <div>
        <li key={props.id}>
          <img src={props.avatar_url} alt={`${props.name}`} ></img>
        </li>
      </div>
    );
  };
  
  export default UserCard;