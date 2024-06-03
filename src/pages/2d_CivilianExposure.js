import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function CivilianExposure() {
	return (
		<>
			<Navbar pageIndex={5} />
			<Box mx="25px">
				<MainHeading level={2} color="orange.400" text="4: Civilian Exposure" />
			</Box>
			<NextPageButton pageIndex={6} />
		</>
	);
}
