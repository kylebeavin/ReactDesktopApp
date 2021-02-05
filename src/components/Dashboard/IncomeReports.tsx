import React, { Component } from 'react';

import Table from 'react-bootstrap/Table';

export default class IncomeReports extends Component {
  render() {
    return (
      <div className="IncomeReports">
        <h2>Income Reports</h2>
        <Table>
          <tr>
            <th>&nbsp;</th>
            <th>Gross Income</th>
            <th>Expenses</th>
            <th>Profits</th>
          </tr>
          <tr>
            <td>LAST MONTH</td>
            <td>$0000000.00</td>
            <td>$0000000.00</td>
            <td>$0000000.00</td>
          </tr>
          <tr>
            <td>LAST QUARTER</td>
            <td>$0000000.00</td>
            <td>$0000000.00</td>
            <td>$0000000.00</td>
          </tr>
          <tr>
            <td>LAST MONTH</td>
            <td>$0000000.00</td>
            <td>$0000000.00</td>
            <td>$0000000.00</td>
          </tr>
        </Table>
      </div>
    );
  }
}
