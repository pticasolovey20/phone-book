import { ExpandMore, ExpandLess, PhoneEnabledOutlined, DeleteOutlineOutlined } from "@mui/icons-material";

export const SvgSelectorComponent = ({ icon }) => {
	switch (icon) {
		case "more":
			return <ExpandMore htmlColor="#fff" />;

		case "less":
			return <ExpandLess htmlColor="#fff" />;

		case "phone":
			return <PhoneEnabledOutlined htmlColor="#00d933" />;

		case "delete":
			return <DeleteOutlineOutlined htmlColor="red" />;

		default:
			break;
	}
};
