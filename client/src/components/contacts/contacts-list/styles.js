import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
	},

	search: {
		padding: "10px",
	},

	list: {
		display: "flex",
		flexDirection: "column",
		gap: "10px",
		padding: "10px",
		backgroundColor: "#000",
		borderRadius: "0px 0px 10px 10px",
		overflow: "scroll",
		overflowX: "hidden",

		"&::-webkit-scrollbar": {
			width: "0em",
			background: "transparent",
			borderRadius: "50px",
		},
	},

	empty: {
		display: "flex",
		justifyContent: "center",
	},

	loading: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		height: "100%",
	},
});
