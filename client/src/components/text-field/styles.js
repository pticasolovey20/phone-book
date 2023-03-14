import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
	input: {
		"& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
			border: "2px solid #808080",
		},

		"& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
			border: "2px solid #808080",
		},

		"& .MuiOutlinedInput-root:focus-within .MuiOutlinedInput-notchedOutline": {
			border: "2px solid #808080",
		},

		"& .MuiOutlinedInput-root": {
			color: "#fff",
		},

		"& .MuiInputLabel-root": {
			color: "#808080",
		},

		"& .Mui-focused.MuiInputLabel-root": {
			color: "#808080",
		},

		"& .MuiInputBase-root": {
			height: "43px",
		},
	},
});
