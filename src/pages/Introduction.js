import {
	Heading,
	Center,
	Box,
	Grid,
	GridItem,
	Text,
	Image,
	Flex,
	Link,
	VStack,
} from "@chakra-ui/react";

import Navbar from "../components/Navbar.js";
import NextPageButton from "../components/NextPageButton.js";

export default function Introduction() {
	return (
		<>
			<Navbar pageIndex={0} />
			<Box mx="25px">
				<Center>
					<Heading size="4xl" mt="15px" mb="50px" color="red.500">
						Introduction: Trinity
					</Heading>
				</Center>
				<Grid
					autoRows
					templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
					gap={8}
				>
					<GridItem order={{ base: 2, md: 1 }} colSpan={{ base: 1, md: 2 }}>
						<VStack spacing={5} fontSize="xl" align="start">
							<Text>
								On July 16, 1945, at 5:29 AM, the U.S. set off its first nuclear
								weapon test. Codenamed "Trinity" (though sometimes referred to
								as "the gadget"), the experiment is a testament to the
								politically charged atmosphere of 20th-century America: a
								rampant fear of communism and the reckless drive to defend the
								U.S. from communist takeover at all costs.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={{ base: 1, md: 2 }}>
						<Center>
							<Flex direction="column">
								<Image
									maxHeight="360px"
									objectFit="contain"
									src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/TrinityDetonation1945GIF.gif/420px-TrinityDetonation1945GIF.gif"
									alt="(Detonation image)"
								/>
								<Text align="center" fontSize="sm" mt="5px" color="gray.500">
									{'"'}Detonation of the 'gadget', with an estimated yield of 25
									kilotons of TNT, and the ensuing mushroom cloud{'" '}
									<Link
										color="teal.500"
										href="https://en.wikipedia.org/w/index.php?title=Trinity_(nuclear_test)&oldid=1223946038"
									>
										(from Wikipedia)
									</Link>
								</Text>
							</Flex>
						</Center>
					</GridItem>
				</Grid>
				<NextPageButton pageIndex={1} />
			</Box>
		</>
	);
}
