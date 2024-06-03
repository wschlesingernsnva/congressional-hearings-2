import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function NavySailors() {
	return (
		<>
			<Navbar pageIndex={2} />
			<Box mx="25px">
				<MainHeading level={2} color="blue.400" text="1: Navy Sailors" />
			</Box>
			<NextPageButton pageIndex={3} />
		</>
	);
}
