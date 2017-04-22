import React, { Component } from 'react';
import { Table, Column, Cell } from 'fixed-data-table';
import moment from 'moment';

class DateCell extends Component {
  render() {
    const {rowIndex, field, data, ...props} = this.props;
    return (
      <Cell {...props}>
        { moment(data[rowIndex][field]).format("l")}
      </Cell>
    );
  }
}

const ItemCell = ({rowIndex, field, getter, data, col, ...props}) => (
  <Cell {...props}>
    {getter(data, rowIndex)}
  </Cell>
);

const TextCell = ({rowIndex, format, field, data, col, ...props}) => (
  <Cell {...props}>
    {format(data[rowIndex][field])}
  </Cell>
);

class Orders extends Component {

  render() {
    const { orders } = this.props;
    return (
      <Table
        rowsCount={orders.length}
        rowHeight={50}
        headerHeight={50}
        width={900}
        height={400}
      >
        <Column
          header={<Cell>Start Date</Cell>}
          cell={
            <DateCell
              data={orders}
              field="startDate"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>End Date</Cell>}
          cell={
            <DateCell
              data={orders}
              field="endDate"
            />
          }
          width={100}
        />
        <Column
          header={<Cell>Plant name/Service</Cell>}
          cell={<ItemCell 
            data={orders} 
            getter={(data, index) => data[index].service.service}
          />}
          width={200}
        />
        <Column
          header={<Cell>Subcategory</Cell>}
          cell={<ItemCell 
            data={orders}
            getter={(data, index) => data[index].subcategory.subcategory}
          />}
          width={200}
        />
        <Column
          header={<Cell>Category</Cell>}
          cell={<ItemCell
            data={orders}
            getter={(data, index) => data[index].category.category}
          />}
          width={200}
        />
        <Column
          header={<Cell>Method</Cell>}
          cell={<TextCell 
            data={orders}
            field={'transportMethod'} 
            format={dataString => `${dataString.substring(0, 1).toUpperCase()}${dataString.substring(1, dataString.length)}`}
          />}
          width={100}
        />
        <Column
          header={<Cell>Location</Cell>}
          cell={<ItemCell
            data={orders}
            getter={(data, index) => data[index].location.county}
          />}
          width={200}
        />
      </Table>
    );
  }
}

export default Orders;