import React from 'react';

import Form from 'react-bootstrap/Form';

const Summary = () => {
  return (
    <div>
      <div className="MonthlySummary">
        <Form>
          <div className="MonthlySplit">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Month</Form.Label>
              <Form.Control as="select" custom>
                <option>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </Form.Control>
            </Form.Group>
          </div>
          <div className="MonthlySplit">
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Year</Form.Label>
              <Form.Control as="select" custom>
                <option>2021</option>
                <option>2020</option>
                <option>2019</option>
                <option>2018</option>
                <option>2017</option>
                <option>2016</option>
              </Form.Control>
            </Form.Group>
          </div>
        </Form>

        <div className="MonthlyStats">
          <h2 className="SummaryStat">Monthly Summary</h2>
          <div className="NetIncomeRibbon SummaryStat">
            <h4>Net Income: $000000</h4>
          </div>
          <div className="SummaryStat">
            <h4>Close Percentage</h4>
            <h4>00%</h4>
          </div>
          <div className="SummaryStat">
            <h4>Avg Time Per Smash</h4>
            <h4>00:00</h4>
          </div>
          <div className="SummaryStat">
            <h4>Demos Completed</h4>
            <h4>00</h4>
          </div>
          <div className="SummaryStat">
            <h4>Smashes Per Hour</h4>
            <h4>00</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
