import {
	Box,
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

export default function CastleBravo() {
	return (
		<>
			<Navbar pageIndex={4} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading level={2} color="pink.500" text="3: Castle Bravo" />
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
								The first thermonuclear hydrogen bomb was detonated on November
								1, 1952. Codenamed <Text as="i">Ivy Mike</Text>, it was the
								largest nuclear device ever detonated at the time. With a yield
								of 10.4 megatons, it was six hundred times more powerful than
								the bombs dropped on Hiroshima and Nagasaki.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={2} colSpan={{ lg: 3 }} align="center">
						<VStack width={{ base: "100%", md: "75%", lg: "60%", xl: "50%" }}>
							<video
								muted
								autoPlay
								loop
								playsInline
								disablePictureInPicture
								width="100%"
							>
								<source
									type="video/mp4"
									src={require("../assets/videos/ivy-mike-c.mp4")}
								/>
							</video>
							<Text align="center" fontSize="sm" mt="5px" color="gray.500">
								<Text as="i">Ivy Mike</Text> (
								<Link
									color="teal.500"
									href="https://archive.org/details/trinity-and-beyond"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Text as="i">Trinity and Beyond</Text>
								</Link>
								)
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={3} colSpan={{ lg: 3 }}>
						<VStack spacing={5} textAlign="justify">
							<Text>
								While <Text as="i">Mike</Text> explosively demonstrated that
								fusion bombs worked (the plausibility of such had been in
								question), it did not prove their feasibility in warfare.{" "}
								<Text as="i">Ivy Mike</Text>'s design used liquid deuterium,
								meaning it had to be kept at extremely low temperatures, which
								complicated the construction and made the bomb design both far
								too bulky and far too fragile to be used as a practical bomb or
								missile.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={4} colSpan={{ lg: 3 }} align="center">
						<VStack
							spacing={1}
							width={{ base: "100%", md: "75%", lg: "60%", xl: "50%" }}
						>
							<Image
								width="100%"
								objectFit="contain"
								src={require("../assets/ivy mike guy.jpg")}
								alt="(Ivy Mike casing)"
							/>
							<Text align="center" fontSize="sm" mt="5px" color="gray.500">
								The massive casing of Ivy Mike. For the test, the casing also
								had to be connected to a large cooling apparatus.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={5} colSpan={{ lg: 3 }}>
						<VStack spacing={5} align="start" textAlign="justify">
							<Text>
								Nuclear physicists looked for alternatives to liquid deuterium
								and considered that lithium deuteride could solve the problem. A
								solid at room temperature, the material would not have to be
								cooled, greatly reducing the complexity, fragility, and weight
								of the weapon while still providing the deuterium necessary for
								the fusion reaction.
							</Text>
							<Text>
								Fusion-related calculations at the time were extremely
								laborious, and somewhat inaccurate, so physicists were not
								certain if lithium deuteride would work as well as their
								calculations predicted, or at all. To probe the feasibility of
								lithium deuteride, a test of a lithium deuteride fusion weapon
								was scheduled for March 1, 1954, codenamed{" "}
								<Text as="i">Castle Bravo</Text>, with an intended max yield of
								5 megatons.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={6} colSpan={{ lg: 3 }} align="center">
						<VStack width={{ base: "100%", md: "75%", lg: "60%", xl: "50%" }}>
							<video
								muted
								autoPlay
								loop
								playsInline
								disablePictureInPicture
								width="100%"
							>
								<source
									type="video/mp4"
									src={require("../assets/videos/castle-bravo.mp4")}
								/>
							</video>
							<Text align="center" fontSize="sm" mt="5px" color="gray.500">
								<Text as="i">Castle Bravo</Text> (
								<Link
									color="teal.500"
									href="https://archive.org/details/trinity-and-beyond"
									target="_blank"
									rel="noopener noreferrer"
								>
									<Text as="i">Trinity and Beyond</Text>
								</Link>
								)
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={7} colSpan={{ lg: 3 }}>
						<VStack spacing={5} align="start" textAlign="justify">
							<Text>
								Instead, <Text as="i">Castle Bravo</Text> exploded over Bikini
								Atoll with a yield of over 15 megatons—more than triple what
								calculations had suggested. As it was so spectacularly
								discovered, the lithium-7 present in the lithium deuteride,
								expected to be mostly passive, instead underwent fission,
								splitting into additional neutrons and alpha particles,
								massively increasing the power and efficiency of the reaction.
								The result was a detonation so powerful it remains the largest
								American nuclear test to this day and is second in the world
								only to a series of Soviet tests in Novaya Zemlya (including the
								infamous Tsar Bomba).
							</Text>
							<Text>
								While this unmistakably confirmed the effectiveness of lithium
								deuteride as a fusion fuel source, it created some significant
								problems. The unexpected reaction material turned into nuclear
								fallout—especially as Bravo was tested at the surface,
								irradiating and literally vaporizing the entire island it was
								stationed on. Nuclear water, dust, and ash carried westward,
								reaching as far as two hundred miles away and contaminating
								several populated islands—many of which were not even evacuated
								for several days. But one particular incident led to further
								worldwide denouncement of nuclear testing and calls for testing
								bans.
							</Text>
							<Text>
								The <Text as="i">Daigo Fukuryū Maru</Text> was a Japanese boat
								operating in waters near the Marshall Islands on March 1. When
								unexpected wind conditions blew the fallout from{" "}
								<Text as="i">Bravo</Text> outside the marked zone, a dry, white
								powder began falling from the sky, coating the ship and its
								crew. The crew was unable to leave the area for six hours as
								they were trawling and processing tuna. When all of the crew
								members soon experienced symptoms of severe radiation poisoning,
								including nausea and dizziness, they began to refer to the
								powder as "death ash." On the 14-day voyage back to port,
								members of the crew only grew more ill, and upon their arrival,
								many crew members had browned skin and reddened eyes, were
								losing hair, and had developed severe blisters on large sections
								of their bodies.
							</Text>
							<Text>
								Members of the crew were hospitalized, and samples of the "death
								ash" were reviewed by Japanese scientists. The scientists
								determined the ash was a result of a thermonuclear detonation,
								blowing the U.S.'s secrecy surrounding the tests, and the crew
								was correctly diagnosed with acute radiation exposure. The U.S.
								Atomic Energy Commission (AEC) sent two medical scientists to
								study the patients, but no further assistance was provided. The
								crew members remained in hospital care for at least fourteen
								months, and one crewman died in late September. The rest were
								released several months afterward and did not receive
								compensation or healthcare benefits from any source. Many
								members of the crew died relatively young, mostly from
								cancer-related illnesses.
							</Text>
							<Text>
								The U.S. government first claimed they were not responsible for
								the disaster. AEC head Lewis Strauss contended that the rashes
								were merely a result of contact with coral debris, that the ship
								had been within the danger zone (which it was not), and finally
								that the ship might have been a Soviet spy craft. Eventually,
								the United States reluctantly took responsibility for the
								disaster and paid Japan just $15 million in reparations.
							</Text>
							<Text>
								The incident led to a massive anti-nuclear movement gaining
								traction in Japan. Perhaps spurred by concerns over contaminated
								fish, the massive push contributed to the international effort
								to end nuclear weapons testing.
							</Text>
						</VStack>
					</GridItem>
				</Grid>
			</Box>
			<NextPageButton pageIndex={5} />
		</>
	);
}
