import { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts, filterContacts } from "../../../store/slices/contactsSlice";

import { Box, Typography, CircularProgress } from "@mui/material";
import { TextFieldComponent } from "../../text-field";
import { ContactItemComponent } from "../contact-item";

export const ContactsListComponent = ({ minHeight }) => {
	const classes = useStyles();

	const [searchValue, setSeacrhValue] = useState("");

	const { filteredContacts, loading } = useSelector((state) => state.contactsReducer);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchContacts());
	}, [dispatch]);

	if (loading) {
		return (
			<Box className={classes.loading}>
				<CircularProgress />
			</Box>
		);
	}

	const handleChange = (event) => {
		setSeacrhValue(event.target.value);
		dispatch(filterContacts(event.target.value));
	};

	return (
		<Box className={classes.root}>
			<Box className={classes.search}>
				<TextFieldComponent label="Search contact" type="text" onChange={handleChange} value={searchValue} />
			</Box>
			{filteredContacts.length ? (
				<Box className={classes.list} sx={{ maxHeight: `${minHeight}px` }}>
					{filteredContacts.map((contact, index) => (
						<ContactItemComponent key={index} contact={contact} />
					))}
				</Box>
			) : (
				<Box className={classes.empty}>
					<Typography color="white">Contacts not found</Typography>
				</Box>
			)}
		</Box>
	);
};
