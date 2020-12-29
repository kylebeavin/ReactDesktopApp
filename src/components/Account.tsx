import React, { useState, useEffect } from 'react';
// import mockData from '../mockData.json';
import axios from '../api/Instance';



// //Bootstap Imports
import Form from 'react-bootstrap/Form';


interface account {
    _id: string;
    name: string;
    email: string;
    owner_id: string;
    stage: string;
}

export const Account: any = () => {
    const [accounts, setAccounts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.post('/accounts');
            setAccounts(request.data.data);
            return request;
        }
        fetchData();
    }, [])
    console.log(accounts);

    return (
        accounts.map((account: account) => {

            return (

                <tr key={account._id}>
                    <td><Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                    </Form.Group></td>
                    <td>{account.name}</td>
                    <td>{account.email}</td>
                    <td>{account.owner_id}</td>
                    <td>{account.stage}</td>
                </tr >

            )
        })
    )
}

export default Account;