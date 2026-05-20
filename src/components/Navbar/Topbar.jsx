import { PersonRounded } from "@mui/icons-material";
import {
	AppBar,
  Box,
	IconButton,
	Stack,
	Toolbar,
	Typography,
} from "@mui/material";

const TopBar = () => {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar elevation={3} color="default" position="static">
				<Toolbar>
					<Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
						TodoX
					</Typography>
					<Stack
						direction="row"
						justifyContent="center"
						sx={{ maxWidth: "30%", alignItems: "center" }}
					>
						<IconButton>
							<PersonRounded />
						</IconButton>
						<Typography variant="overline">Lorem ipsum dolor sit.</Typography>
					</Stack>
				</Toolbar>
			</AppBar>
		</Box>
	);
};

export default TopBar;
