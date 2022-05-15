import React, { Component } from "react";

class Card extends Component {
  render() {
    const { name, id, email } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          height={180}
          width={180}
          src={`https://robohash.org/${id}?set=set2?size=180x180`}
        />
        <h3>
          <span style={{ color: "teal" }}>Name:</span> {name}
        </h3>
        <p>
          <span style={{ color: "red" }}>Email:</span> {email}
        </p>
      </div>
    );
  }
}

export default Card;
