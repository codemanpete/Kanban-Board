import { connect } from 'react-redux';
import Table from './table';
import { createCard } from '../actions/table_actions';

const mapStateToProps = ({ tables }, ownProps) => ({
  cards: tables[ownProps.id].cards
});

const mapDispatchToProps = dispatch => ({
  createCard: (text, tableId) => dispatch(createCard(text, tableId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
