import React, { useState } from 'react'

const MultistepForm = () => {
	const steps = [ 'pre-login', 'login', 'forget-password', 'success', 'register' ]
	const [ currentStep, setCurrentStep ] = useState("pre-login");

	// Pre-login
	const PreLogin = () => {
		return (
			<div>Pre Login</div>
		)
	}

	return (
		<div>
			<h1>Hello From Form</h1>
		</div>
	)
}

export default MultistepForm
