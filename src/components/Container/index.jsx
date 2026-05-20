import { Outlet } from "react-router";
import TopBar from "../Navbar/Topbar";
import { Box } from "@mui/material";
import Navbar from "../Navbar";

const Container = () => {
	return (
		<>
			<TopBar />
			<Box sx={{ px: 3, py: 5 }}>
				<Outlet></Outlet>
			</Box>
			<Navbar />
		</>
	);
};

export default Container;
