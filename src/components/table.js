import React from 'react';
import Card from './card';
import './table.css';

class Table extends React.Component {
  constructor(props){
    super(props);
    this.props.createCard("Finish cleaning Basement", this.props.id);
    this.props.createCard("Buy eggs from grocery store", this.props.id);
    this.state = {
      newCardText: "",
      showField: false
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.renderNewCardField = this.renderNewCardField.bind(this);
    this.updateField = this.updateField.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleToggle(e) {
    e.preventDefault();
    this.setState({ showField: !this.state.showField });
  }

  handleKeyDown(e) {
    if(e.key === 'Enter' && e.shiftKey === false) {
      e.preventDefault();
      this.handleSubmit();
    }
  }

  handleSubmit() {
    this.props.createCard(this.state.newCardText, this.props.id);
    this.setState({ newCardText: "", showField: false });
  }

  updateField(e) {
    this.setState({ newCardText: e.currentTarget.value });
  }

  renderNewCardField() {
    const newCardField = (
      <input
        value={ this.state.newCardText }
        onChange={ this.updateField }
        onKeyDown={ this.handleKeyDown }
        placeholder="Card text"
      />
    );
    return(
      <div>
        <button onClick={ this.handleToggle }>Add a card</button>
        <br />
        { this.state.showField ? newCardField : "" }
      </div>
    );
  }

  render() {
    return(
      <table className={ this.props.id === "4" ? "last" : "" }>
        <tr className="header" style={{ backgroundColor: `${this.props.color}`}}>
          <th>{this.props.title}</th>
        </tr>
        { this.props.cards.map( card =>
          <tr>
            <Card text={card} />
          </tr>
        )}
        <tr>
          { this.renderNewCardField() }
        </tr>
      </table>
    );
  }

}

export default Table;
