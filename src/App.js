import React, { Component } from 'react';
import Grades from './components/Grades';
import Calculations from './components/Calculations';
import css from './app.module.css';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      grades: [
        {
          id: '1',
          description: 'Módulo 01 - Fundamentos (0 - 100)',
          nota: '',
        },
        {
          id: '2',
          description: 'Módulo 02 - Angular (0 - 100)',
          nota: '',
        },
        {
          id: '3',
          description: 'Módulo 03 - React (0 - 100)',
          nota: '',
        },
        {
          id: '4',
          description: 'Módulo 04 - Vue (0 - 100)',
          nota: '',
        },
        {
          id: '5',
          description: 'Módulo 05 - Desafio Final (0 - 100)',
          nota: '',
        },
      ],
    };
  }
  handleChange = ({ target: { id, value } }) => {
    const newGrades = [...this.state.grades];
    newGrades.find((grade) => grade.id === id).nota = parseInt(value, 10);
    this.setState({
      grades: newGrades,
    });
  };
  render() {
    const { grades } = this.state;
    return (
      <div className={css.flexbox}>
        <Grades grades={grades} onChange={this.handleChange} />
        <Calculations grades={grades} />
      </div>
    );
  }
}
