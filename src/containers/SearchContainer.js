import { connect } from "react-redux";
import Search from "./../components/Search.js";
import handleVideoSearch from "../actions/search.js";

// var SearchContainer = () => {}
// mapDispatchToProps takes two arguments dispatch and ownProps (optional)
// once we swapped <Search /> for <SearchContainer defaultinput={'random query generator'} /> there were no props passed
var mapDispatchToProps = (dispatch) => {
  // this.props.handleInputChange(e.target.value);
  return {
    // props are keys here
    handleInputChange: (query) => dispatch(handleVideoSearch(query))
  };
};

var SearchContainer = connect(
  null, // since the search component doesn't take in any other props aside from the callback, doesn't need mapStateToProps
  mapDispatchToProps
)(Search);

export default SearchContainer;
