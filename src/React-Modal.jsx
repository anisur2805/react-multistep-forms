import React, { useState } from 'react'
import Modal from 'react-modal'

const ReactModal = () => {

	const [ modalIsOpen, setModalIsOpen ] = useState(false)
	const openModal = () => {
		setModalIsOpen(true)
	}
	return (
		<div>
			<button onClick={ () => openModal() }>Show Modal</button>
			<Modal isOpen={ modalIsOpen }>
				<h2>Modal Title</h2>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam, dolores delectus totam asperiores laudantium suscipit.</p>
				<button onClick={ () => setModalIsOpen(false) }>Close</button>
			</Modal>
		</div>
	)
}

export default ReactModal
