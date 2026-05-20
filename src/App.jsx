import {
	Box,
	Card,
	CardActionArea,
	CardContent,
	Checkbox,
	Divider,
	Grid,
	Paper,
	Stack,
	Typography,
} from "@mui/material";
import "./App.css";
import {
	Done,
	RadioButtonChecked,
	RadioButtonUnchecked,
	ReportProblemSharp,
} from "@mui/icons-material";

function App() {
	return (
		<Grid container spacing={6}>
			<Grid size={8}>
				<Stack spacing={3}>
					<Box>
						<Typography variant="h3" sx={{ fontWeight: "light" }}>
							Inbox
						</Typography>
						<Divider />
					</Box>
					<Stack spacing={1}>
						<Card sx={{ borderRadius: 5 }}>
							<CardActionArea>
								<CardContent>
									<Grid container>
										<Grid size={2}>
											<Stack
												sx={{
													height: "100%",
													justifyContent: "center",
													alignItems: "center",
												}}
											>
												<Checkbox
													color="error"
													size="large"
													icon={<RadioButtonUnchecked />}
													checkedIcon={<RadioButtonChecked />}
												/>
											</Stack>
										</Grid>
										<Grid size={10}>
											<Stack spacing={1}>
												<Typography variant="h4" sx={{ fontWeight: "light" }}>
													Lorem ipsum dolor sit amet.
												</Typography>
												<Divider />
												<Grid container>
													<Grid size={6}>
														<Stack>
															<Typography variant="overline">
																Internal
															</Typography>
															<Typography variant="title1">
																Lorem, ipsum dolor.
															</Typography>
														</Stack>
													</Grid>
													<Grid size={6}>
														<Stack>
															<Typography variant="overline">
																Scheduled
															</Typography>
															<Typography variant="title1">
																Tomorrow, 10:00 AM
															</Typography>
														</Stack>
													</Grid>
												</Grid>
											</Stack>
										</Grid>
									</Grid>
								</CardContent>
							</CardActionArea>
						</Card>
					</Stack>
				</Stack>
			</Grid>
			<Grid size={4}>
				<Stack
					spacing={4}
					component={Paper}
					sx={{ p: 3, borderRadius: 4 }}
					elevation={5}
				>
					<Typography variant="h6" sx={{ fontWeight: "light" }}>
						Weekly focus
					</Typography>
					<Grid container>
						<Grid size={6}>
							<Stack
								direction="column"
								spacing={1}
								sx={{ justifyContent: "center", alignItems: "center" }}
							>
								<Done fontSize="large" />
								<Typography variant="overline">Completed</Typography>
								<Typography variant="h3">301</Typography>
							</Stack>
						</Grid>
						<Grid size={6}>
							<Stack
								direction="column"
								spacing={1}
								sx={{ justifyContent: "center", alignItems: "center" }}
							>
								<ReportProblemSharp fontSize="large" />
								<Typography variant="overline">Missed</Typography>
								<Typography variant="h3">301</Typography>
							</Stack>
						</Grid>
					</Grid>
				</Stack>
			</Grid>
		</Grid>
	);
}

export default App;
