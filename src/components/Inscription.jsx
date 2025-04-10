import React, { useState } from "react";
import App from "../App";
import {
	Container,
	Row,
	Col,
	Form as BootstrapForm,
	Button,
	Card,
	Alert,
} from "react-bootstrap";
// import './src/index.css'


const Inscription = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		message: "",
		subscription: false,
	});

	const [validated, setValidated] = useState(false);
	const [showAlert, setShowAlert] = useState(false);
	const [alertType, setAlertType] = useState("success");
	const [alertMessage, setAlertMessage] = useState("");

	const handleChange = (e) => {
		const { name, value, type, checked } = e.target;
		setFormData({
			...formData,
			[name]: type === "checkbox" ? checked : value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const form = e.currentTarget;

		if (form.checkValidity() === false) {
			e.stopPropagation();
			setValidated(true);
			return;
		}

		setValidated(true);

		// Simulate form submission
		setTimeout(() => {
			setAlertType("success");
			setAlertMessage("Formulaire envoyé avec succès!");
			setShowAlert(true);

			// Reset form after successful submission
			setFormData({
				firstName: "",
				lastName: "",
				email: "",
				phone: "",
				message: "",
				subscription: false,
			});
			setValidated(false);

			// Hide alert after 5 seconds
			setTimeout(() => {
				setShowAlert(false);
			}, 5000);
		}, 1000);
	};

	return (
		<Container className="py-5">
			<Row className="justify-content-center">
				<Col md={10} lg={8}>
					<Card className="shadow-sm border-0">
						<Card.Header className="bg-primary text-white py-3">
							<h2 className="h4 mb-0 text-center">Formulaire de contact</h2>
						</Card.Header>
						<Card.Body className="p-4">
							{showAlert && (
								<Alert
									variant={alertType}
									onClose={() => setShowAlert(false)}
									dismissible
								>
									{alertMessage}
								</Alert>
							)}

							<BootstrapForm
								noValidate
								validated={validated}
								onSubmit={handleSubmit}
							>
								<Row>
									<Col md={6} className="mb-3">
										<BootstrapForm.Group controlId="firstName">
											<BootstrapForm.Label>Prénom</BootstrapForm.Label>
											<BootstrapForm.Control
												type="text"
												name="firstName"
												value={formData.firstName}
												onChange={handleChange}
												placeholder="Entrez votre prénom"
												required
											/>
											<BootstrapForm.Control.Feedback type="invalid">
												Veuillez entrer votre prénom.
											</BootstrapForm.Control.Feedback>
										</BootstrapForm.Group>
									</Col>

									<Col md={6} className="mb-3">
										<BootstrapForm.Group controlId="lastName">
											<BootstrapForm.Label>Nom</BootstrapForm.Label>
											<BootstrapForm.Control
												type="text"
												name="lastName"
												value={formData.lastName}
												onChange={handleChange}
												placeholder="Entrez votre nom"
												required
											/>
											<BootstrapForm.Control.Feedback type="invalid">
												Veuillez entrer votre nom.
											</BootstrapForm.Control.Feedback>
										</BootstrapForm.Group>
									</Col>
								</Row>

								<Row>
									<Col md={6} className="mb-3">
										<BootstrapForm.Group controlId="email">
											<BootstrapForm.Label>Email</BootstrapForm.Label>
											<BootstrapForm.Control
												type="email"
												name="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="Entrez votre email"
												required
											/>
											<BootstrapForm.Control.Feedback type="invalid">
												Veuillez entrer un email valide.
											</BootstrapForm.Control.Feedback>
										</BootstrapForm.Group>
									</Col>

									<Col md={6} className="mb-3">
										<BootstrapForm.Group controlId="phone">
											<BootstrapForm.Label>Téléphone</BootstrapForm.Label>
											<BootstrapForm.Control
												type="tel"
												name="phone"
												value={formData.phone}
												onChange={handleChange}
												placeholder="Entrez votre numéro de téléphone"
											/>
										</BootstrapForm.Group>
									</Col>
								</Row>

								<BootstrapForm.Group className="mb-3" controlId="message">
									<BootstrapForm.Label>Message</BootstrapForm.Label>
									<BootstrapForm.Control
										as="textarea"
										name="message"
										value={formData.message}
										onChange={handleChange}
										rows={5}
										placeholder="Écrivez votre message ici..."
										required
									/>
									<BootstrapForm.Control.Feedback type="invalid">
										Veuillez entrer un message.
									</BootstrapForm.Control.Feedback>
								</BootstrapForm.Group>

								<BootstrapForm.Group className="mb-3" controlId="subscription">
									<BootstrapForm.Check
										type="checkbox"
										name="subscription"
										label="Je souhaite recevoir la newsletter"
										checked={formData.subscription}
										onChange={handleChange}
									/>
								</BootstrapForm.Group>

								<div className="d-grid gap-2">
									<Button variant="primary" type="submit" size="lg">
										Envoyer
									</Button>
								</div>
							</BootstrapForm>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default Inscription;
