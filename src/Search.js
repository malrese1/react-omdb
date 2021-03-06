import React, {Component} from "react"

class Search extends Component {
  render(){
    return (
      <div className="searchBox">
        <form onSubmit={(evt) => this.props.handleSubmitQuery(evt)}>
          <input
          onChange={(evt) => this.props.handleSearchInput(evt)}
          value={this.props.query}
          type="text"
          placeholder="Enter a Movie Title..." />
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Search
