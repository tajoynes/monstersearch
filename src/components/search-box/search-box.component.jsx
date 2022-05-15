import React, { Component } from "react";

class SearchBox extends Component {
  render() {
    const { placeholder, onChangeHandler } = this.props;
    return (
      <input
        className="search-box"
        placeholder={placeholder}
        type="search"
        style={{
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
          backgroundColor: "antiquewhite",
          borderBottomColor: "red",
          borderBottomWidth: 2,
          color: "black",
          outline: "none",
          height: 30,
        }}
        onChange={onChangeHandler}
      />
    );
  }
}

export default SearchBox;
