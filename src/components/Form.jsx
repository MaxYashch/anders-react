import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: '',
      disabled: true,
    };
    this.inputRef = React.createRef();
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('CLICK');
  }

  handleUserInput(e) {
    this.setState({ input: e.target.value });
    if (e.target.value.includes('реакт')) {
      this.setState({ disabled: true });
      return;
    }
    this.setState({ disabled: false });
  }

  handleFocus() {
    this.inputRef.current.focus();
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.handleFocus();
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    console.log(props);
    console.log(state);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate');
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
    console.log(prevProps);
    console.log(prevState);
    return { value: 42 };
  }

  componentDidUpdate(...args) {
    console.log('componentDidUpdate');
    console.log(args);
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  componentDidCatch(err, msg) {
    console.log('componentDidCatch');
    console.log(err);
    console.log(msg);
  }

  render() {
    return (
      <form className="form" onSubmit={(event) => this.handleSubmit(event)}>
        <div>
          <input
            type="text"
            name="inputField"
            className="inputField"
            placeholder="Enter text"
            input={this.state.input}
            onChange={(event) => this.handleUserInput(event)}
            ref={this.inputRef}
          />
        </div>
        <div className="btnArea">
          <button
            className="button"
            type="button"
            onClick={(event) => this.handleFocus(event)}
          >
            Focus
          </button>
          <button
            className="button"
            type="submit"
            disabled={this.state.disabled}
          >
            {!this.state.disabled ? 'Submit' : 'Disabled'}
          </button>
        </div>
      </form>
    );
  }
}

export default Form;
