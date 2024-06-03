import { Box } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function PlutoniumExperiments() {
	return (
		<>
			<Navbar pageIndex={6} />
			<Box mx="25px">
				<MainHeading
					level={2}
					color="purple.400"
					text="5: The Plutonium Experiments"
				/>
			</Box>
			<NextPageButton pageIndex={7} />
		</>
	);
}
