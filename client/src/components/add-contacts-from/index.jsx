import { useState } from "react";
import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { addContact } from "../../store/slices/contactsSlice";

import { Box, Button } from "@mui/material";
import { TextFieldComponent } from "../text-field";

export const FormComponent = () => {
	const classes = useStyles();

	const [name, setName] = useState("");
	const [phone, setPhone] = useState("");

	const dispatch = useDispatch();

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handleNumberChange = (event) => {
		setPhone(event.target.value);
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const newContact = { name, phone };
		dispatch(addContact(newContact));

		setName("");
		setPhone("");
	};

	return (
		<Box className={classes.root}>
			<form className={classes.form} onSubmit={handleSubmit}>
				<TextFieldComponent
					label={"Name"}
					type="text"
					value={name}
					onChange={handleNameChange}
					required={true}
				/>
				<TextFieldComponent
					label={"Number"}
					type="tel"
					value={phone}
					onChange={handleNumberChange}
					required={true}
				/>
				<Button fullWidth variant="contained" type="submit">
					Add Contact
				</Button>
			</form>
		</Box>
	);
};
