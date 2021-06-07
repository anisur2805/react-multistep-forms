import React, { useState } from "react";
import { Button, Modal } from "reactstrap";
import MultiStepForm from "./Multi-stepForm";

const Main = () => {
	const [ modalState, setModalState ] = useState(false);
	const toggle = () => setModalState(!modalState);

	return (
		<div>
			<div className="modal-wrapper ">
				<h1>Multi Step Modal</h1>
				<Button color="danger" className="btn" onClick={ toggle }>
					Open Form Modal
        </Button>
			</div>

			<Modal isOpen={ modalState } toggle={ toggle }>
				<MultiStepForm toggle={ toggle } />
			</Modal>
		</div>
	);
};

export default Main;
