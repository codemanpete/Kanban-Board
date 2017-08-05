import Example from './example';
import { connect } from 'react-redux';
import { exampleAction } from '../actions/example_actions';

const mapStateToProps = (store) => ({
  example: store.example.example
});

const mapDispatchToProps = dispatch => ({
  setExample: example => dispatch(exampleAction(example))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Example);
