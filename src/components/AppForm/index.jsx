import {
	Box,
	Button,
	Divider,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	TextField,
	Typography,
} from "@mui/material";
import { useState } from "react";

const AppForm = () => {
	const [type, setType] = useState();
	return (
		<Stack sx={{ alignItems: "center" }}>
			<Box sx={{ minWidth: "50%" }}>
				<Typography variant="h5">New Task</Typography>
				<Divider />
				<Stack spacing={3} sx={{ my: 3 }}>
					<TextField label="Task title" variant="outlined" />
					<TextField label="Note" variant="outlined" />
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">Age</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							value={type}
							label="Age"
							onChange={setType}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
					<TextField type="date" variant="outlined" label="Schedule" />
					<Button variant="contained" color="error">
						Save
					</Button>
				</Stack>
			</Box>
		</Stack>
	);
};

export default AppForm;
