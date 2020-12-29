import React, { useState } from 'react';
import useForm from '../utils/useForm';
//Bootstrap Imports
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const NewAccountFormModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);

    // const [state, setState] = useState({});

    // const handleChange = (e: any) => {
    //     setState(state => ({ ...state, [e.target.name]: e.target.value }))
    // }

    // eslint-disable-next-line no-empty-pattern
    const [values, handleChange] = useForm();
    const register = (e: any) => {
        e.persist();
        e.preventDefault();
        console.log(values);
    }
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label>Name:</label>
                    <input
                        // value={values.name || ""}
                        // onChange={handleChange}
                        type="text"
                        name="name"
                        placeholder="Name..."
                        className="" />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
          </Button>
                <Button variant="primary" onClick={handleClose}>
                    Save Changes
          </Button>
            </Modal.Footer>
        </Modal>

    )


}

export default NewAccountFormModal;