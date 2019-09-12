import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';


var mapStateToProps = (state) => {
  return: {
    videos: state.videos
  }
}

var mapDispatchToProps = (dispatch) => {
  return: {

  }
}

var SearchContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Search)

//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.

// map state to props

//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
