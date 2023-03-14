import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		display: "flex !important",
		alignItems: "center !important",
		height: "100vh",
		padding: "10px",
	},

	app: {
		display: "flex",
		flexDirection: "column",
		width: "100%",
		height: "100%",
		borderRadius: "10px",
		backgroundColor: "#000",
	},

	top: {
		flex: 1,
	},

	title: {
		textAlign: "center",
		color: "white",
		padding: "20px",
		borderRadius: "10px 10px 0px 0px",
	},

	bottom: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},

	help: {
		color: "#fff",
	},
});
