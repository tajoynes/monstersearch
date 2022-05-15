import React, { Component } from "react";
import CardList from "./card-list/card-list.component";
import SearchBox from "./search-box/search-box.component";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFilter: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  onSearchChange = (event) => {
    const searchFilter = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchFilter };
    });
  };

  render() {
    const { monsters, searchFilter } = this.state;
    const { onSearchChange } = this;

    const filteredList = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchFilter);
    });

    return (
      <>
        <h2 className="app-title">Monster Search</h2>
        <div>
          <SearchBox
            onChangeHandler={onSearchChange}
            placeholder="search monsters"
          />
          <div>
            <CardList monsters={filteredList} />
          </div>
        </div>
      </>
    );
  }
}

export default Home;
