import React from 'react';

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      example: ""
    };
    this.updateExample = this.updateExample.bind(this);
  }

  updateExample(e) {
    this.setState({ example: e.currentTarget.value });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.setExample(this.state.example);
  }

  render() {
    return(
      <div>
        <h3>Example</h3>
        <p>Type in the box and updates the store with entered data</p>
        <textarea value={ this.state.example } onChange={ this.updateExample }></textarea>
        <button onClick={ this.handleClick }>Submit</button>
        <br/>
        <p>currently example is: { this.props.example }</p>
      </div>
    );
  }
}

export default Example;
