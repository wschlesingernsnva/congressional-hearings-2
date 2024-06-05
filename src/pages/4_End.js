import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import MainHeading from "../components/MainHeading";

export default function End() {
	return (
		<>
			<Navbar pageIndex={8} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading level={1} color="yellow.400" text="The End" />
				{/* CHANGE
				COLOR
				*/}
			</Box>
		</>
	);
}
