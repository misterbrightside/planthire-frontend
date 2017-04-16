import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import './DropdownSelect.css';

class DropdownSelect extends Component {

  render() {
    const { labelText, listId, options, onSelect, value, multi } = this.props;
    return (
      <div className='DropdownSelect'>
        <label
          htmlFor=""
          className='DropdownSelect-label'
        >{labelText}</label>
        <Select
          name={listId}
          value={value}
          multi={multi}
          clearable={multi}
          placeholder={''}
          onChange={onSelect}
          options={options}
        />
      </div>
    );
  }
}

export default DropdownSelect;
