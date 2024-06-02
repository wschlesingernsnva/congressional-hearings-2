import {
	Heading,
	Center,
	Box,
	Grid,
	GridItem,
	Text,
	Image,
	Flex,
} from "@chakra-ui/react";

import Navbar from "../components/Navbar.js";

function Introduction() {
	return (
		<>
			<Navbar path={["Introduction"]} />
			<Box mx="25px">
				<Center>
					<Heading size="4xl" mt="15px" mb="50px" color="red.500">
						Introduction: Trinity
					</Heading>
				</Center>
				<Grid templateColumns={{ base: "1fr", lg: "repeat(3, 1fr)" }} gap={8}>
					<GridItem order={{ base: 2, lg: 1 }} colSpan={{ base: 1, lg: 2 }}>
						<Text fontSize="xl">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
							non quam fermentum erat tincidunt tincidunt. Aliquam eu feugiat
							justo, a lobortis erat. Quisque bibendum massa vel mi varius, ac
							ullamcorper urna laoreet. Curabitur et enim quam. Morbi nec velit
							nunc. Praesent gravida augue in ex feugiat, sollicitudin fringilla
							eros lacinia. Etiam nec iaculis nunc. Pellentesque placerat, lorem
							elementum vestibulum interdum, leo lectus cursus nulla, a
							ultricies risus nibh a augue. Vestibulum ac orci feugiat,
							scelerisque purus quis, dictum nibh. Sed porttitor, nulla ac
							pellentesque venenatis, tellus velit finibus tellus, in malesuada
							erat lorem vel risus. Donec eget ligula pharetra, porttitor.
						</Text>
					</GridItem>
					<GridItem order={{ base: 1, lg: 2 }}>
						<Center>
							<Flex direction="column">
								<Image
									objectFit="contain"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/TrinityDetonation1945GIF.gif/420px-TrinityDetonation1945GIF.gif"
									alt="(Detonation image)"
								/>
								<Text align="center" fontSize="sm" mt="5px" color="gray.500">
									&quot;Detonation of the 'gadget', with an estimated yield of
									25 kilotons of TNT, and the ensuing mushroom cloud&quot; (from
									Wikipedia)
								</Text>
							</Flex>
						</Center>
					</GridItem>
				</Grid>
			</Box>
		</>
	);
}

export default Introduction;
