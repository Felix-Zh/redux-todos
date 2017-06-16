import React from 'react';


export default class Input extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddButtonClick = this.handleAddButtonClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleAddButtonClick() {
    const
      { input, props } = this,
      value = input.value;

    value !== '' && props.onAddTodo(value);
    input.value = '';
  }

  handleSubmit(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={ipt => this.input = ipt} />
        <button onClick={this.handleAddButtonClick}>Add</button>
      </form>
    );
  }
}
