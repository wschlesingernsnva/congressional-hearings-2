import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function CleanupCrews() {
	return (
		<>
			<Navbar pageIndex={3} />
			<Box mx="25px" fontSize="xl">
				<MainHeading level={2} color="green.400" text="2: Cleanup Crews" />
			</Box>
			<NextPageButton pageIndex={4} />
		</>
	);
}
