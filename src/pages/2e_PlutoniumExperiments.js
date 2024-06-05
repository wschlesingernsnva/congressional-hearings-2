import {
	Box,
	Divider,
	Grid,
	GridItem,
	Image,
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
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading
					level={2}
					color="purple.400"
					text="5: The Plutonium Experiments"
				/>
				<Grid
					width="100%"
					gridAutoRows="min-content"
					templateColumns={{
						base: "1fr",
						lg: "2fr 1fr 2fr",
						"2xl": "0.55fr 1fr 0.55fr",
					}}
					gap={8}
				>
					<GridItem order={1} colSpan={{ lg: 3 }}>
						<VStack spacing={5} align="start" textAlign="justify">
							<Text>
								In 1987, Eileen Welsome, a reporter for{" "}
								<Text as="i">The Albuquerque Tribune</Text>, discovered
								documents at Kirtland Air Force Base in Albuquerque alluding to
								a series of covert human rights violations committed by the U.S.
								government in the name of nuclear research. From 1945 to 1947,
								several unknowing Americans had been injected with plutonium, a
								radioactive chemical used in nuclear weaponry, by doctors and
								scientists, typically while undergoing surgery or otherwise
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
								the reader's attention: "Some compare it to Nazi war atrocities.
								Others say it had to be done to understand the dangers of a
								powerful new element that launched the Atomic Age. Eighteen
								ordinary people were injected with plutonium without their
								informed consent, and their names have been kept hidden. Until
								now. In this three-part series, <Text as="i">The Tribune</Text>{" "}
								tells some of their stories."
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={2} colSpan={{ lg: 3 }}>
						<Divider />
					</GridItem>
					<GridItem order={3} colSpan={{ lg: 2 }}>
						<MainHeading
							level={3}
							align="start"
							text="Albert Stevens and Elmer Allen"
						/>
						<VStack spacing={5} align="start" textAlign="justify">
							<Text>
								In May 1945, Albert Stevens ("CAL-1"), having just moved with
								his family to California, was misdiagnosed with terminal stomach
								cancer. Doctors told him and his children that he had six months
								to live, and they recommended a surgical operation, during which
								he was secretly injected with a mixture of plutonium-238 and
								plutonium-239—with the highest radiation dose given to anyone
								throughout the eighteen plutonium trials. Soon, scientists and
								doctors would begin to collect urine and fecal samples to send
								off to Los Alamos Scientific Laboratory, the same laboratory
								used to build the first atomic bomb. The plutonium levels in the
								samples were measured as part of a study to determine the rate
								at which the human body would dispense itself of the chemical.
								His data was compiled with others' in a classified report,{" "}
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
								injection (vastly longer than the six months doctors had
								previously told him he had left).
							</Text>
							<Text>
								Eight years after Stevens's death, however, his ashes were
								shipped to Argonne National Laboratory for further research. A
								heading from Welsome's series reads, "Even in Death, Albert's
								Still Their Guinea Pig," followed by a caption denouncing the
								scientists for continuing their "ghoulish experiments."
							</Text>
							<Text>
								In a case similar to that of Stevens, Elmer Allen ("CAL-3"), who
								had worked as a railway porter, was falsely told by doctors that
								he was terminally ill with bone cancer in his left knee. Upon
								receiving surgery to amputate his leg in July 1947, doctors
								clandestinely injected him with plutonium as well—though not
								nearly as much as Stevens had received. Scientists collected
								tissue samples from Allen to use for research surrounding the
								nature of the spread of plutonium throughout the human body.
								Allen developed various illnesses and went his whole life with
								neither him nor his family knowing he had been used as a test
								subject in the plutonium experiments.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={4}>
						<Grid
							width="100%"
							gridAutoRows="min-content"
							templateColumns="repeat(2, 1fr)"
							gap={2.5}
						>
							<GridItem colSpan={2}>
								<VStack spacing={1} mb={3}>
									<Image
										width="100%"
										objectFit="contain"
										src={require("../assets/albert stevens.png")}
										alt="(Albert Stevens)"
									/>
									<Text align="center" fontSize="sm" mt="5px" color="gray.500">
										Albert Stevens.
									</Text>
								</VStack>
							</GridItem>
							<GridItem colSpan={2}>
								<VStack spacing={1} mb={3}>
									<Image
										width="100%"
										objectFit="contain"
										src={require("../assets/disappearing paper trail.png")}
										alt='(Section from The Plutonium Experiments titled "The Disappearing Paper Trail")'
									/>
									<Text align="center" fontSize="sm" mt="5px" color="gray.500">
										An excerpt from Welsome's series,{" "}
										<Text as="i">The Plutonium Experiments</Text>, mysteriously
										describing the secrecy of the trials.
									</Text>
								</VStack>
							</GridItem>
							<GridItem rowSpan={2}>
								<VStack spacing={1}>
									<Image
										width="100%"
										objectFit="contain"
										src={require("../assets/albert stevens humanization.png")}
										alt="(Eileen Welsome describes the story of Albert Stevens, demonstrating her humanizing strategy at portraying the stories of the plutonium experiments' victims)"
									/>
									<Text align="center" fontSize="sm" mt="5px" color="gray.500">
										Another excerpt from{" "}
										<Text as="i">The Plutonium Experiments</Text>, in which
										Welsome illustrates Stevens's background, displaying her
										humanizing strategy at portraying the various stories of the
										experiments' victims.
									</Text>
								</VStack>
							</GridItem>
							<GridItem>
								<Image
									width="100%"
									objectFit="contain"
									src={require("../assets/joseph hamilton 1.png")}
									alt="(Joseph Hamilton)"
								/>
							</GridItem>
							<GridItem>
								<VStack spacing={1}>
									<Image
										width="100%"
										objectFit="contain"
										src={require("../assets/joseph hamilton 2.jpeg")}
										alt="(Joseph Hamilton)"
									/>
									<Text align="center" fontSize="sm" mt="5px" color="gray.500">
										Joseph Hamilton, who carried out several illicit injections
										at Strong Memorial Hospital and died twelve years after
										injecting Stevens with plutonium.
									</Text>
								</VStack>
							</GridItem>
						</Grid>
					</GridItem>
					<GridItem order={{ base: 6, lg: 5 }}>
						<Grid
							width="100%"
							gridAutoRows="min-content"
							templateColumns="repeat(2, 1fr)"
							gap={2.5}
						>
							<GridItem colSpan={2}>
								<VStack spacing={1} mb={3}>
									<Image
										width="100%"
										objectFit="contain"
										src={require("../assets/eda charlton quote.png")}
										alt='(Quote reading "Do you suppose that stuff did anything to me?")'
									/>
									<Text align="center" fontSize="sm" mt="5px" color="gray.500">
										A headline from Welsome's series.
									</Text>
								</VStack>
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
								<VStack spacing={1}>
									<Image
										width="100%"
										objectFit="contain"
										src={require("../assets/eda charlton 2.png")}
										alt="(Eda Charlton)"
									/>
									<Text align="center" fontSize="sm" mt="5px" color="gray.500">
										Eda Charlton.
									</Text>
								</VStack>
							</GridItem>
						</Grid>
					</GridItem>
					<GridItem order={{ base: 5, lg: 6 }} colSpan={{ lg: 2 }}>
						<MainHeading level={3} align="start" text="Eda Charlton" />
						<VStack spacing={5} align="start" textAlign="justify">
							<Text>
								Eda Charlton ("HP-3") was an experimentee injected in November
								1945. Her husband had just died from a tragic heart attack the
								year before, her son had not yet come home from World War II,
								and now, Charlton would be hospitalized for unusual swelling and
								a rash that seemed to be caused by her nutrition. Welsome
								writes, "At the time of her admission, Eda had been working at
								the local Kodak plant. With her legs curled beneath her, she sat
								on a high stool eight hours a day examining the camera shutters
								whirling by. She ate her meals in the Kodak cafeteria. At night,
								alone in her house, she snacked on peanuts and candy, then went
								to bed early." Doctors theorized her swelling was caused by
								hypoproteinemia, a condition in which a deficiency of protein
								circulates through one's blood.
							</Text>
							<Text>
								After starting on the hospital's high-protein, low-salt diet,
								her health greatly improved—yet she was soon fortuitously
								transferred to another ward where, during a typical injection of
								sterile saline, a doctor would swap out her needle for one
								containing her exclusive dose of plutonium-239. Her primary
								doctor, Christine Waterhouse, treated her for decades, yet
								despite knowing of the plutonium injection, she never once
								mentioned it in her medical records. Waterhouse first claimed
								she did not do so because the information was classified until
								1972—after which point, she changed the story, claiming that she
								did not mention the injection in the records because none of
								Charlton's medical issues appeared tied to it.
							</Text>
							<Text>
								Once Charlton learned of the injection, her fear of cancer that
								had already been plaguing her for years turned into sheer
								paranoia. In 1946, she fell down her stairs, knocking herself
								unconscious before later waking up bloody, dizzy, and nauseous.
								Doctors took X-rays of her skull, concluding that she had simply
								been concussed.
							</Text>
							<Text>
								After the fall, Charlton suffered chronically from attacks of
								vertigo, nausea, and fuzzy vision. Doctors doubted any
								connection whatsoever between the injection and the ailments she
								would deal with for the rest of her life. Yet, later testing
								revealed that her blood cells manifested in bizarre shapes—a
								stark indicator of the effects of plutonium radiation. And
								scientists continued to use her for their studies on radiation
								until her death.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={7} colSpan={{ lg: 3 }}>
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
