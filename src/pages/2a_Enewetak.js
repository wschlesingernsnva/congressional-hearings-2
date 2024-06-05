import {
	Box,
	Center,
	Flex,
	Grid,
	GridItem,
	Image,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function Enewetak() {
	return (
		<>
			<Navbar pageIndex={1} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading level={1} color="yellow.400" text="Case Studies" />
				<MainHeading level={2} color="blue.400" text="1 — Enewetak Atoll" />
				<Grid
					width="100%"
					gridAutoRows="min-content"
					templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
					gap={8}
				>
					<GridItem order={{ base: 2, md: 1 }} colSpan={{ md: 2 }}>
						<VStack
							spacing={5}
							align={{ base: "start", md: "end" }}
							textAlign={{ base: "start", md: "end" }}
						>
							<Text>FILLER TEXT</Text>
						</VStack>
					</GridItem>
					<GridItem order={{ md: 2 }}>
						<Center>
							<Flex direction="column">
								<Image
									width="100%"
									objectFit="contain"
									src="https://i0.wp.com/revealnews.org/wp-content/uploads/2016/05/wayne_brooks_1959_gun_station_crop.jpg?w=903&ssl=1"
									alt="(Wayne Brooks in 1958)"
								/>
								<Image
									mt="10px"
									width="100%"
									objectFit="contain"
									src="https://i0.wp.com/revealnews.org/wp-content/uploads/2016/05/wayne-brooks.png?resize=1024%2C576&ssl=1"
									alt="(Wayne Brooks in 1958)"
								/>
								<Text align="center" fontSize="sm" mt="5px" color="gray.500">
									FILLER TEXT{" "}
									<Link
										color="teal.500"
										href="https://en.wikipedia.org/w/index.php?title=Trinity_(nuclear_test)&oldid=1223946038"
									>
										(FILLER LINK)
									</Link>
								</Text>
							</Flex>
						</Center>
					</GridItem>
				</Grid>
			</Box>
			<NextPageButton pageIndex={2} />
		</>
	);
}
