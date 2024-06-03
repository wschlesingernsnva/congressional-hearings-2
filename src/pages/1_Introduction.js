import {
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
import MainHeading from "../components/MainHeading.js";

export default function Introduction() {
	return (
		<>
			<Navbar pageIndex={0} />
			<Box mx="25px">
				<MainHeading level={1} color="red.500" text="Introduction: Trinity" />
				<Grid
					autoRows
					templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
					gap={8}
				>
					<GridItem order={{ base: 2, md: 1 }} colSpan={{ base: 1, md: 2 }}>
						<VStack
							spacing={5}
							fontSize="xl"
							align={{ base: "start", md: "end" }}
							textAlign={{ base: "start", md: "end" }}
						>
							<Text>
								On July 16, 1945, at 5:29 AM, the U.S. set off its first nuclear
								weapon test. Codenamed "Trinity" (though sometimes referred to
								as "the gadget"), the experiment was intended to determine
								whether its complex design (called "Fat Man") would function.
								The same design was used later, on August 9th of the same year,
								when the U.S. dropped its second atomic bomb on Nagasaki City in
								Japan, ending World War II. However, atomic spy Klaus Fuchs soon
								leaked the Trinity design to Russia, and Russia detonated its
								first atomic bomb on August 29th, 1949. With the Soviets now
								becoming a nuclear rival, the U.S. began to escalate its
								nuclear-weapon testing.
							</Text>
							<Text>
								Nuclear testing would soon become a ______________________, but
								______________________. Thousands of people lived within a range
								of Trinity’s explosion that would later be prohibited under
								nuclear testing guidelines due to radiation hazards, but even
								after the implementation of those guidelines, no effort was made
								to evacuate those living in the nearby area. The negligence the
								government exerted in regard to those who may have been
								unhealthily impacted by radiation from the nuclear explosion
								marked the beginning of what would soon spiral into several
								nation-wide scandals surrounding the health of Americans in the
								face of the government’s obsession with nuclear testing.
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
