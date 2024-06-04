import {
	Box,
	Divider,
	Flex,
	Grid,
	GridItem,
	HStack,
	Image,
	Link,
	Text,
	VStack,
} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function PlutoniumExperiments() {
	return (
		<>
			<Navbar pageIndex={6} />
			<Box px="30px" fontSize="xl">
				<MainHeading
					level={2}
					color="purple.400"
					text="5: The Plutonium Experiments"
				/>
				<Grid
					autoRows
					templateColumns={{ base: "1fr", lg: "1.75fr 1fr 1.75fr" }}
					gap={8}
				>
					<GridItem order={1} colSpan={{ base: 1, lg: 3 }}>
						<VStack spacing={5} align="center" textAlign="justify">
							<Text>
								In 1987, Eileen Welsome, a reporter for{" "}
								<Text as="i">The Albuquerque Tribune</Text>, discovered
								documents at Kirtland Air Force Base in Albuquerque alluding to
								a series of covert human rights violations committed by the U.S.
								government in the name of nuclear research. From 1945 to 1947,
								several unknowing Americans had been injected with plutonium, a
								radioactive chemical used in some nuclear weaponry, by doctors
								and scientists, typically while undergoing surgery or otherwise
								unconscious. The names of the victims were encoded in the
								documents she found, demonstrating the secrecy exercised by the
								U.S. government throughout the various nuclear scandals. Her
								revelations intrigued her to investigate the experiments in her
								free time. By gathering scientific reports and documents from
								the Department of Energy, she eventually discovered the names of
								the eighteen victims, met their relatives, and unearthed their
								stories. In November 1993, she published "The Plutonium
								Experiments," a series in{" "}
								<Text as="i">The Albuquerque Tribune</Text> detailing her
								findings and revealing the stories of the experiments' victims.
							</Text>
							<Text>
								Each part opens with a dramatic introduction, aiming to capture
								the reader's attention: “Some compare it to Nazi war atrocities.
								Others say it had to be done to understand the dangers of a
								powerful new element that launched the Atomic Age. Eighteen
								ordinary people were injected with plutonium without their
								informed consent, and their names have been kept hidden. Until
								now. In this three-part series, <Text as="i">The Tribune</Text>{" "}
								tells some of their stories."
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={2} colSpan={{ base: 1, lg: 3 }}>
						<Divider />
					</GridItem>
					<GridItem order={3} colSpan={{ base: 1, lg: 2 }}>
						<MainHeading level={3} align="start" text="Albert Stevens" />
						<VStack spacing={5} textAlign="justify" mb={8}>
							<Text>
								In 1945, Albert Stevens ("CAL-1"), having just moved with his
								family to California, was misdiagnosed with terminal stomach
								cancer. Doctors told him and his children that he had six months
								to live, and they recommended a surgical operation, during which
								he was secretly injected with a mixture of plutonium-238 and
								plutonium-239—with the highest radiation dose given to anyone
								over the course of the eighteen plutonium trials. Soon,
								scientists and doctors would begin to collect urine and fecal
								samples to send off to Los Alamos Scientific Laboratory, the
								same laboratory used to build the first atomic bomb. The
								plutonium levels in the samples were measured as part of a study
								to determine the rate at which the human body would dispense
								itself of the chemical. His data was compiled with others' in a
								classified report,{" "}
								<Text as="i">
									A Comparison of the Metabolism of Plutonium in Man and the Rat
								</Text>
								.
							</Text>
							<Text>
								Stevens was not the only victim of his own plutonium
								injection—the doctors who delivered injections were also exposed
								to fatal amounts of radiation in the process. Joseph Hamilton,
								who was in charge of Stevens's injection, died twelve years
								later—in nearly half the amount of time it took for the death of
								Stevens himself, which occurred twenty-one years after the
								injection.
							</Text>
							<Text>
								Eight years after Stevens's death, however, his ashes were
								shipped to Argonne National Laboratory for further research. A
								heading from Welsome's series reads, "Even in Death, Albert's
								Still Their Guinea Pig," followed by a caption denouncing the
								scientists for continuing their "ghoulish experiments."
							</Text>
						</VStack>
						<MainHeading level={3} align="start" text="Elmer Allen" />
						<VStack spacing={5} textAlign="justify">
							<Text>
								[Stuff about Elmer Allen] Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Ut et metus vitae nulla hendrerit
								blandit ut vitae nulla. Cras vitae massa purus. Mauris vel neque
								nulla. Praesent interdum leo eu congue sodales. Integer et
								luctus libero. Vivamus pulvinar ultricies semper. Aliquam erat
								volutpat. Maecenas ac lectus lobortis, vestibulum sem at,
								sollicitudin purus. Vivamus luctus luctus felis quis porttitor.
								In viverra tellus erat, sed posuere ipsum mattis sed. Proin ut
								convallis ante. Phasellus quis purus turpis. Phasellus pharetra
								magna eget elit iaculis consequat. Quisque non venenatis elit.
								Praesent convallis nunc sapien, ultrices dictum sapien sagittis
								in. Ut molestie feugiat ullamcorper. Mauris.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={4}>
						<Grid
							autoRows
							templateColumns="repeat(2, 1fr)"
							gap={2.5}
							align="center"
						>
							<GridItem colSpan={2}>
								<Image
									width="100%"
									objectFit="contain"
									src={require("../assets/albert stevens.png")}
									alt="(Albert Stevens)"
								/>
							</GridItem>
							<GridItem colSpan={2}>
								<Image
									width="100%"
									objectFit="contain"
									src={require("../assets/disappearing paper trail.png")}
									alt="(Albert Stevens)"
								/>
							</GridItem>
							<GridItem colSpan={2}>
								<Image
									width="100%"
									objectFit="contain"
									src={require("../assets/radiation killed doctors title.png")}
									alt='(Headline reading "Radiation Killed Doctors Who Did Human Experiments")'
								/>
							</GridItem>
							<GridItem>
								<Image
									width="100%"
									objectFit="contain"
									src={require("../assets/joseph hamilton.png")}
									alt="(Joseph Hamilton)"
								/>
							</GridItem>
							<GridItem>
								<VStack>
									<Image
										width="100%"
										objectFit="contain"
										src={require("../assets/patricia durbin quote.png")}
										alt="(Quote reading )"
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
								</VStack>
							</GridItem>
						</Grid>
						<Flex direction="column">
							<VStack spacing={2.5}>
								<HStack spacing={2.5}></HStack>
							</VStack>
						</Flex>
					</GridItem>
					<GridItem order={{ base: 6, lg: 5 }}>
						<Grid
							autoRows
							templateColumns="repeat(2, 1fr)"
							gap={2.5}
							align="center"
						>
							<GridItem colSpan={2}>
								<Image
									width="100%"
									objectFit="contain"
									src={require("../assets/eda charlton quote.png")}
									alt='(Quote reading "Do you suppose that stuff anything to me?")'
								/>
							</GridItem>
							<GridItem>
								<Image
									width="100%"
									objectFit="contain"
									src={require("../assets/eda charlton 1.png")}
									alt="(Eda Charlton)"
								/>
							</GridItem>
							<GridItem>
								<VStack>
									<Image
										width="100%"
										objectFit="contain"
										src={require("../assets/eda charlton 2.png")}
										alt="(Eda Charlton)"
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
								</VStack>
							</GridItem>
						</Grid>
					</GridItem>
					<GridItem order={{ base: 5, lg: 6 }} colSpan={{ base: 1, lg: 2 }}>
						<MainHeading level={3} align="start" text="Eda Charlton" />
						<VStack spacing={5} textAlign="justify">
							<Text>
								[Stuff about Eda Charlton] Lorem ipsum dolor sit amet,
								consectetur adipiscing elit. Ut et metus vitae nulla hendrerit
								blandit ut vitae nulla. Cras vitae massa purus. Mauris vel neque
								nulla. Praesent interdum leo eu congue sodales. Integer et
								luctus libero. Vivamus pulvinar ultricies semper. Aliquam erat
								volutpat. Maecenas ac lectus lobortis, vestibulum sem at,
								sollicitudin purus. Vivamus luctus luctus felis quis porttitor.
								In viverra tellus erat, sed posuere ipsum mattis sed. Proin ut
								convallis ante. Phasellus quis purus turpis. Phasellus pharetra
								magna eget elit iaculis consequat. Quisque non venenatis elit.
								Praesent convallis nunc sapien, ultrices dictum sapien sagittis
								in. Ut molestie feugiat ullamcorper. Mauris.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={7} colSpan={{ base: 1, lg: 3 }}>
						<Text align="justify">
							The victims had been given no compensation by the government prior
							to Welsome's revelatory publications nearly fifty years later,
							which went largely unnoticed until around a month after appearing
							in the <Text as="i">Tribune</Text>. Her findings caught the eye of
							Energy Secretary Hazel O'Leary, who vowed to compensate the
							victims as a campaign strategy. President Bill Clinton soon took
							notice and appointed a committee to investigate the experiments.
						</Text>
					</GridItem>
				</Grid>
			</Box>

			<NextPageButton pageIndex={7} />
		</>
	);
}
