import React, { useState } from 'react';
// import mockData from '../mockData.json';
// import axios from '../../api/BaseInstance';



// //Bootstap Imports
import Form from 'react-bootstrap/Form';
// import baseInstance from '../api/BaseInstance';


interface account {
    _id: string;
    name: string;
    email: string;
    // owner_id: string;
    stage: string;
}

export const Account: any = () => {
    const [accounts, setAccounts] = useState([]);

    // useEffect(() => {
    //     async function fetchData() {
    //         const request = await axios.post('/accounts');
    //         setAccounts(request.data.data);
    //         return request;
    //     }
    //     fetchData();
    // }, [])
    // useEffect(() => {
    fetch(`https://smash-app-backend.herokuapp.com/api/accounts`)
        .then(res => res.json())
        .then((data) => setAccounts(data.data))
    return (
        accounts.map((account: account) => {

            return (

                <tr key={account._id}>
                    <td><Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" />
                    </Form.Group></td>
                    <td>{account.name}</td>
                    <td>{account.email}</td>
                    {/* <td>{account.owner_id}</td> */}
                    <td>{account.stage}</td>
                </tr >

            )
        })
    )
}

export default Account;