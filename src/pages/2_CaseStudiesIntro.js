import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar.js";
import NextPageButton from "../components/NextPageButton.js";
import MainHeading from "../components/MainHeading.js";

export default function CaseStudiesIntro() {
	return (
		<>
			<Navbar pageIndex={1} />
			<Box mx="25px" fontSize="xl">
				<MainHeading level={1} color="yellow.400" text="Case Studies" />
			</Box>
			<NextPageButton pageIndex={2} />
		</>
	);
}
