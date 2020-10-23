import React, { Component } from 'react';

export default class Input extends Component {
  constructor() {
    super();
    this.state = { labelClass: '' };
  }
  componentDidMount() {
    if (!!this.props.value && this.state.labelClass === '') {
      this.setLabelClassActive();
    }
  }
  componentDidUpdate() {
    if (!!this.props.value && this.state.labelClass === '') {
      this.setLabelClassActive();
    }
  }
  handleClassChangeOnLabel = () => {
    this.setLabelClassActive();
  };
  handleInputChange = (event) => {
    this.setLabelClassActive();
    this.props.onChange(event);
  };
  handleOnBlur = (event) => {
    const inputValue = event.target.value;
    if (inputValue === '') {
      this.setState({ labelClass: '' });
    }
  };
  handleLabelClick = (event) => {
    const { previousElementSibling } = event.target;
    previousElementSibling.focus();
  };
  setLabelClassActive() {
    this.setState({ labelClass: 'active' });
  }
  render() {
    const { label, value, id, type, disabled, maxValue, minValue } = this.props;
    const { labelClass } = this.state;
    return (
      <div className="input-field col">
        <input
          value={value}
          id={id}
          type={type}
          disabled={disabled}
          className="validate"
          onFocus={this.handleClassChangeOnLabel}
          onBlur={this.handleOnBlur}
          onChange={this.handleInputChange}
          max={maxValue}
          min={minValue}
        />
        <label
          className={labelClass}
          htmlFor={id}
          onClick={this.handleLabelClick}
        >
          {label}
        </label>
      </div>
    );
  }
}
