import { Box, Paper, Grid, Typography, Rating, createTheme, ThemeProvider } from "@mui/material";
import { AccessTime } from "@mui/icons-material";

const theme = createTheme({
	components: {
		MuiTypography: {
			variants: [
				{
					props: {
						variant: "body2",
					},
					style: {
						fontSize: 11,
						// Can add more styling
					},
				},
				{
					props: {
						variant: "body3",
					},
					style: {
						fontSize: 11,
					},
				},
			],
		},
	},
});

const TourCard = ({ tour }) => {
	return (
		<Grid item xs={3}>
			<ThemeProvider theme={theme}>
				<Paper elevation={3}>
					<img className="img" src={tour.image} alt="place.jpg"></img>
					<Box sx={{ paddingX: 1 }}>
						<Typography variant="subtitle1">{tour.name}</Typography>
						<Box sx={{ display: "flex", alignItems: "center" }}>
							<AccessTime sx={{ width: 12.5 }} />
							<Typography variant="body2" sx={{ marginLeft: 0.5 }}>
								{tour.duration} hours
							</Typography>
						</Box>
						<Box sx={{ display: "flex", alignItems: "center", marginTop: 3 }}>
							<Rating name="read-only" value={tour.rating} precision={0.5} size="small" readOnly />
							<Typography variant="body2" sx={{ marginLeft: 0.5 }}>
								{tour.rating}
							</Typography>
							<Typography variant="body3" sx={{ marginLeft: 1.5 }}>
								{tour.numberOfReviews} reviews
							</Typography>
						</Box>
						<Box>
							<Typography variant="h6">From ${tour.price}</Typography>
						</Box>
					</Box>
				</Paper>
			</ThemeProvider>
		</Grid>
	);
};

export default TourCard;
