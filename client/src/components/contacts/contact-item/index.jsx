import { useStyles } from "./styles";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../store/slices/contactsSlice";

import { Box, Accordion, AccordionSummary, AccordionDetails, Typography, Avatar, IconButton } from "@mui/material";
import { SvgSelectorComponent } from "../../svg-selector";
import user from "../../../assets/user.png";

export const ContactItemComponent = ({ contact, onDeleteContact }) => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const handleDeleteContact = (id) => {
		dispatch(deleteContact(id));
	};

	const calling = () => {
		alert("Calling...");
	};

	return (
		<Box className={classes.root}>
			<Accordion className={classes.accordion}>
				<AccordionSummary
					expandIcon={<SvgSelectorComponent icon="more" />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Box className={classes.nameBlock}>
						<Avatar src={user} alt="user" className={classes.avatar} />
						<Typography color="white" variant="h6">
							{contact.name}
						</Typography>
					</Box>
				</AccordionSummary>
				<AccordionDetails className={classes.details}>
					<Box className={classes.telBlock}>
						<Typography color="white" fontSize="20px">
							Number:{" "}
						</Typography>
						<Typography color="#416ac8" fontSize="20px">
							{contact.phone}
						</Typography>
					</Box>
					<Box className={classes.icons}>
						<IconButton className={classes.icon} onClick={() => handleDeleteContact(contact.id)}>
							<SvgSelectorComponent icon="delete" />
						</IconButton>
						<IconButton className={classes.icon} onClick={calling}>
							<SvgSelectorComponent icon="phone" />
						</IconButton>
					</Box>
				</AccordionDetails>
			</Accordion>
		</Box>
	);
};
