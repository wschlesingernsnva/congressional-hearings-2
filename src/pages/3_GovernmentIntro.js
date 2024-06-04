import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function GovernmentIntro() {
	return (
		<>
			<Navbar pageIndex={7} />
			<Box mx="25px" fontSize="xl">
				<MainHeading
					level={1}
					color="yellow.400"
					text="Government Intervention"
				/>
			</Box>
			<NextPageButton pageIndex={0} />
		</>
	);
}
