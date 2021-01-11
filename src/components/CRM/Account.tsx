import React, { useState, useEffect } from 'react';
// import mockData from '../mockData.json';
import axios from '../../api/BaseInstance';



// //Bootstap Imports
import Form from 'react-bootstrap/Form';
// import baseInstance from '../api/BaseInstance';


interface IAccount {
    _id: string;
    name: string;
    email: string;
    stage: string;
    owner_id: string;
    address_street: string;
    address_city: string;
    address_state: string;
    address_zip: string;
}

export const Account: any = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get('/accounts', {
                headers: {
                    'x-access-token': process.env.REACT_APP_ACCESS_TOKEN
                }
            })
            setAccounts(request.data.data);
            return request;
        }
        fetchData();
    }, [])
    return (
        accounts.map((account: IAccount) => {

            return (
                <tr key={account._id}>
                    <td><Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                    </Form.Group></td>
                    <td>{account.name}</td>
                    <td>{account.email}</td>
                    <td>{account.stage}</td>
                    <td>{account.address_street}
                        <br />
                        {account.address_city},{account.address_state} {account.address_zip}</td>
                    <td>{account.owner_id}</td>
                </tr >
            )
        })
    )
}

export default Account;