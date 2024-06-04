import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function CastleBravo() {
	return (
		<>
			<Navbar pageIndex={4} />
			<Box mx="25px" fontSize="xl">
				<MainHeading level={2} color="pink.500" text="3: Castle Bravo" />
			</Box>
			<NextPageButton pageIndex={5} />
		</>
	);
}
