import React, { Component } from 'react';
import css from './calculations.module.css';

export default class Calculations extends Component {
  getTotalNote() {
    const { grades } = this.props;
    return grades.reduce((acc, curr) => {
      let nota = 0;
      if (curr.nota !== '' && !Number.isNaN(curr.nota)) {
        nota = curr.nota;
      }
      return (acc += nota);
    }, 0);
  }
  render() {
    const { grades } = this.props;
    const totalNote = this.getTotalNote();
    const totalPercent = totalNote / 5;
    const approvedByPercentual = totalPercent < 70 ? 'Não' : 'Sim';
    const approvedByAverage = grades.some(({ nota }) => nota < 60)
      ? 'Não'
      : 'Sim';
    return (
      <div className={css.container}>
        <h5 className={css.title}>Cálculos</h5>
        <div className={css.content}>
          <span>Nota Total: {totalNote}</span>
          <span>Percentual Total {totalPercent}</span>
          <span>Aprovação pela média (60%)? {approvedByAverage}</span>
          <span>
            Aprovação pelo percentual total (70%)? {approvedByPercentual}
          </span>
        </div>
      </div>
    );
  }
}
