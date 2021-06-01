import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MultistepForm from './MultistepForm';


const Home = (props) => {

	const [ modalState, setModalState ] = useState(false)

	const toggle = () => setModalState(!modalState)

	return (
		<div>
			<div className="modal-wrapper">
				<h1>Multi Step Modal</h1>
				<Button color="danger" className="btn" onClick={ toggle }>Open Form Modal</Button>
			</div>
			<Modal toggle={ toggle } isOpen={ modalState }  >
				<MultistepForm />
			</Modal>
		</div>
	)
}

export default Home
