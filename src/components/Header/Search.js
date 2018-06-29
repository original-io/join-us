import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
      <div className="search">
        <form>
          <div className="form-group mb-0">
            <input type="text" className="form-control form-control-sm search__input" placeholder="Busca" />
          </div>
        </form>
      </div>
    );
  }
}

export default Search;