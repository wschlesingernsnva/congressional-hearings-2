import { Box, Text, VStack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function RECA() {
	return (
		<>
			<Navbar pageIndex={7} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading
					level={1}
					color="yellow.400"
					text="Government Intervention"
				/>
				<MainHeading level={2} color="pink.400" text="RECA" />
				<VStack spacing={5} align="start" textAlign="justify">
					<Text>
						Congress had already, in 1990, passed the Radiation Exposure
						Compensation Act (RECA), which provided <Text as="i">some</Text>{" "}
						benefits to <Text as="i">some</Text> civilians in{" "}
						<Text as="i">some</Text> regions around the U.S. mainland testing
						sites. Given proof of exposure, the government would provide a
						$50,000 remuneration to anyone in certain areas downwind of the test
						sites. This figure has not changed since the bill was conceived in
						the late 1970s. It also provides somewhat larger remunerations to
						those actively involved in radiation work, such as uranium miners
						and those involved in testing.
					</Text>
					<Text>
						The bill was limited in scope and had a set expiration date. Despite
						this, RECA was a success, providing over two billion dollars to
						eligible recipients.
					</Text>
					<Text>
						The expiration date, though, has become a serious concern. When it
						was about to expire in 2022, Joe Biden extended the bill for two
						years. But to further extend the deadline and provide the benefits
						to a larger area of affected downwinders, a second law, the RECA
						Reauthorization Act has been proposed in Congress. Despite
						bipartisan support in the Senate, the bill appears to have died or
						been forgotten—and the final day for RECA filings is June 10, 2024:
						in five days!
					</Text>
					<Text>
						This failure demonstrates, once again, the complete lack of
						accountability displayed by the government toward those harmed by
						the nuclear tests. Despite the seemingly pressing nature of many
						other congressional debates and decisions, veterans, victims, and
						their impacted descendants have patiently waited 80 years for their
						justice.
					</Text>
					<Text my="60px" as="b" fontSize="3xl">
						We ask Congress: show them all a little bit of respect.
					</Text>
				</VStack>
			</Box>
			<NextPageButton pageIndex={8} />
		</>
	);
}
