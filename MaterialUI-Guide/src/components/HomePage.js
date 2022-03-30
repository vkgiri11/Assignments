import { Grid, Container, Typography } from "@mui/material";


import TourCard from "./TourCard";

import cities from "../data.json";

const HomePage = () => {
	return (
		<>
			
			<Container sx={{ marginY: 5 }}>
				{cities.map((city) => (
					<>
						<Typography variant="h4" marginTop={5} marginBottom={3}>
							Top {city.name} Tours
						</Typography>
						<Grid container spacing={5}>
							{city.tours.map((tour, index) => (
								<TourCard tour={tour} key={index} />
							))}
						</Grid>
					</>
				))}
			</Container>
		</>
	);
};

export default HomePage;
