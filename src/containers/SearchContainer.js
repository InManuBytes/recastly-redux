import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

// Would an if/ else setup work better in order for us to include mapStateToProps in the SearchContainer function?
// var mapStateToProps = (state) => {
//   return {
//   //  Store State
//     currentVideo: state.currentVideo,
//     videos: state.videos
//   }
// }

// var SearchContainer = () => {}

var mapDispatchToProps = (dispatch, query) => {
    return {
      handleInputChange: () => dispatch(handleVideoSearch(query))
    };
};

var SearchContainer = connect(
  null, // since the search component doesn't take in any other props aside from the callback, doesn't need mapStateToProps
  mapDispatchToProps
)(Search);


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.

// map state to props

//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

export default SearchContainer;
