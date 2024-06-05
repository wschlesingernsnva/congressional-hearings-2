import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function EQ() {
	return (
		<>
			<Navbar pageIndex={6} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading
					level={1}
					color="yellow.400"
					text="Government Intervention"
				/>
				<MainHeading level={2} color="yellow.400" text="ESSENTIAL QUESTION" />
				{/* CHANGE
				COLOR
				*/}
			</Box>
			<NextPageButton pageIndex={7} />
		</>
	);
}
