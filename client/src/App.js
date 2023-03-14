import { useState } from "react";
import { useStyles } from "./styles/styles";

import { Box, Container, IconButton, Typography } from "@mui/material";
import { ContactsListComponent } from "./components/contacts/contacts-list";
import { FormComponent } from "./components/add contacts form";
import { SvgSelectorComponent } from "./components/svg-selector";

export const App = () => {
	const classes = useStyles();
	const [open, setOpen] = useState(false);

	let minHeight = 510;

	const handleHeighChange = () => {
		if (open) {
			minHeight = 510;
		} else {
			minHeight = 730;
		}
	};

	handleHeighChange();

	return (
		<Container maxWidth="sm" className={classes.root}>
			<Box className={classes.app}>
				<Box className={classes.top}>
					<Typography variant="h4" className={classes.title}>
						Contacts
					</Typography>
					<ContactsListComponent minHeight={minHeight} />
				</Box>
				<Box className={classes.bottom}>
					<IconButton onClick={() => setOpen(!open)}>
						{!open && <Typography className={classes.help}>Add Contact</Typography>}
						{open ? <SvgSelectorComponent icon="more" /> : <SvgSelectorComponent icon="less" />}
					</IconButton>
					{open && <FormComponent />}
				</Box>
			</Box>
		</Container>
	);
};
