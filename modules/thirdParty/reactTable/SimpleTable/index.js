import React from 'react';
import {makeData} from '../data/Utils';
import ReactTable from 'react-table';

class SimpleTable extends React.Component {
  constructor() {
    super();
    this.state = {
      data: makeData(),
    };
  }

  render() {
    const {data} = this.state;
    return (
      <ReactTable
        data={data}
        columns={[
          {
            Header: 'Name',
            columns: [
              {
                Header: 'First Name',
                accessor: 'firstName',
              },
              {
                Header: 'Last Name',
                id: 'lastName',
                accessor: (d) => d.lastName,
              },
            ],
          },
          {
            Header: 'Info',
            columns: [
              {
                Header: 'Age',
                accessor: 'age',
              },
              {
                Header: 'Status',
                accessor: 'status',
              },
            ],
          },
          {
            Header: 'Stats',
            columns: [
              {
                Header: 'Visits',
                accessor: 'visits',
              },
            ],
          },
        ]}
        defaultPageSize={10}
        className='-striped -highlight'
      />
    );
  }
}

export default SimpleTable;
