import React, { Component } from 'react';
import Grade from './Grade';
import css from './grade.module.css';

export default class Grades extends Component {
  render() {
    const { grades, onChange } = this.props;
    return (
      <div className={css.container}>
        {grades.map(({ id, description, nota }) => {
          return (
            <Grade
              key={id}
              id={id}
              value={nota}
              label={description}
              onChange={onChange}
            />
          );
        })}
      </div>
    );
  }
}
