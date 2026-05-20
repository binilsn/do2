import {
	BottomNavigation,
	BottomNavigationAction,
	IconButton,
	Paper,
	Stack,
} from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { AddCircleRounded, Home } from "@mui/icons-material";
import { Link } from "react-router";
const Navbar = () => {
	const [value, setValue] = useState();
	return (
		<BottomNavigation
			showLabels
			component={Paper}
			sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
			value={value}
			elevation={3}
			onChange={(event, newValue) => {
				setValue(newValue);
			}}
		>
			<BottomNavigationAction
				label="Home"
				icon={<Home />}
				component={Link}
				to="/"
			/>
			<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
			<BottomNavigationAction
				disableRipple
				icon={
					<Stack sx={{ pb: 4 }}>
						<IconButton color="error" component={Link} to="new">
							<AddCircleRounded sx={{ fontSize: "5rem" }} />
						</IconButton>
					</Stack>
				}
			>
				<IconButton></IconButton>
			</BottomNavigationAction>
			<BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
			<BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
		</BottomNavigation>
	);
};

export default Navbar;
