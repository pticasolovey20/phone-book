import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		backgroundColor: "#000",
		padding: "0px",
	},

	accordion: {
		width: "100%",
		backgroundColor: "#222224 !important",
	},

	nameBlock: {
		display: "flex",
		gap: "10px",
		alignItems: "center",
	},

	avatar: {
		height: "30px !important",
		width: "30px !important",
		border: "2px solid gray",
	},

	details: {
		display: "flex",
		justifyContent: "space-between",
	},

	telBlock: {
		display: "flex",
		gap: "10px",
	},

	icons: {
		display: "flex",
		gap: "10px",
	},

	icon: {
		cursor: "pointer",
		height: "30px !important",
		width: "30px !important",
	},
});
