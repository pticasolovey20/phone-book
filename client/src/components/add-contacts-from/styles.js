import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	root: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		width: "96%",
		padding: "20px 10px",
		marginBottom: "10px",
		borderRadius: "10px",
		backgroundColor: "#222224",
	},
	form: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "center",
		gap: "20px",
		width: "100%",
	},
});
