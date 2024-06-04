import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function CivilianExposure() {
	return (
		<>
			<Navbar pageIndex={5} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading level={2} color="green.400" text="4: Civilian Exposure" />
			</Box>
			<NextPageButton pageIndex={6} />
		</>
	);
}
