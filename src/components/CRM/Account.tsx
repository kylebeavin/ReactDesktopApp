import React from 'react';
import { connect } from 'react-redux';
import { IAccount, fetchAccounts } from '../../actions';
import { StoreState } from '../../reducers';

// //Bootstap Imports
import Form from 'react-bootstrap/Form';

interface IAccountProps {
  accounts: IAccount[];
  fetchAccounts: Function;
}

class _Account extends React.Component<IAccountProps> {
  componentDidMount() {
    this.props.fetchAccounts();
  }
  renderAccountList(): JSX.Element[] {
    return this.props.accounts.map((account: IAccount) => {
      return (
        <tr key={account._id}>
          <td>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" />
            </Form.Group>
          </td>
          <td>{account.account_name}</td>
          {account.email ? (
            <td>{account.email}</td>
          ) : (
            <td className="notrequired">Not Required in current stage</td>
          )}
          <td>{account.stage}</td>
          {account.address_street ? (
            <td>
              {account.address_street}
              <br />
              {account.address_city}, {account.address_state}{' '}
              {account.address_zip}
            </td>
          ) : (
            <td className="notrequired">Not Required in current stage</td>
          )}
          <td>{account.owner_name}</td>
        </tr>
      );
    });
  }

  render() {
    return this.renderAccountList();
  }
}

const mapStateToProps = (state: StoreState): { accounts: IAccount[] } => {
  return { accounts: state.accounts };
};

export const Account = connect(mapStateToProps, { fetchAccounts })(_Account);
