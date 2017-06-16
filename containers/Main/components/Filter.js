import React from 'react';
import { VisibilityFilters } from '../../../constants/constants';

export default class Filter extends React.Component {
  constructor(props) {
    super(props);

    this.renderFilter = this.renderFilter.bind(this);
  }

  renderFilter(filter, name) {
    const { props } = this;

    if (props.currentFilter === filter) {
      return name;
    }

    return <button onClick={() => props.onFilterChange(filter)}>{name}</button>;
  }

  render() {
    return (
      <div>
        {this.renderFilter(VisibilityFilters.SHOW_ALL, 'All')}
        {' '}
        {this.renderFilter(VisibilityFilters.SHOW_COMPLETED, 'Completed')}
        {' '}
        {this.renderFilter(VisibilityFilters.SHOW_ACTIVE, 'Active')}
      </div>
    );
  }
}
