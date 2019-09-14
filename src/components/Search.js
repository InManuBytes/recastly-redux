import React from 'react';

// previous props with React passed down from App.js: getYouTubeVideos (line 14)
// props from - SearchContainers: handleInputChange
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleInputChange(e) {
    // this.props.getYouTubeVideos(e.target.value); -only React
    // in SearchContainers, the mapDispatchToProps returns:
    // handleInputChange: (query) => dispatch(handleVideoSearch(query))
    // where query = e.target.value
    this.props.handleInputChange(e.target.value); // redux takes over
    this.setState({
      value: e.target.value
    });
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input
          className="form-control"
          type="text"
          value={this.state.value}
          onChange={this.handleInputChange.bind(this)}
        />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

export default Search;
