import React, { Component } from 'react';
import Input from './basics/Input';

export default class Grade extends Component {
  render() {
    const { id, label, value, onChange } = this.props;
    return (
      <div>
        <Input
          value={value}
          id={id}
          type="number"
          disabled={false}
          label={label}
          onChange={onChange}
          maxValue="100"
          minValue="0"
        />
      </div>
    );
  }
}
