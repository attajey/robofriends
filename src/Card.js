import React from "react";

const Card = ({ name, email, id }) => {
  return (
    <div className="tc bg-light-green dib f8 br4 pa1 ma2 grow bw2 shadow-5 w-30">
      <img alt="Robo" src={`https://robohash.org/${id}?300x300`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};
export default Card;
