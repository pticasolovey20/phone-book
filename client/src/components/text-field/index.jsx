import { useStyles } from "./styles";

import { Box, FormControl, TextField } from "@mui/material";

export const TextFieldComponent = ({ label, type, value, onChange, required }) => {
	const classes = useStyles();

	return (
		<Box width="100%">
			<FormControl fullWidth>
				<TextField
					className={classes.input}
					label={label}
					type={type}
					size="small"
					required={required}
					variant="outlined"
					onChange={onChange}
					value={value}
				/>
			</FormControl>
		</Box>
	);
};
