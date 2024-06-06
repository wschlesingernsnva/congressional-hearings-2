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
					templateColumns={{
						base: "1fr",
						lg: "2fr 1fr 2fr",
						"2xl": "0.55fr 1fr 0.55fr",
					}}
					gap={8}
				>
					<GridItem order={1} colSpan={{ lg: 2 }}>
						<VStack spacing={5} align="start" textAlign="justify">
							<Text>
								Of the nuclear tests performed in the Marshall Islands, the vast
								majority took place on the Enewetak and Bikini atolls.{" "}
								<Text as="i">Operation Crossroads</Text>, the first nuclear
								test, took place at Enewetak, among many others, including{" "}
								<Text as="i">Operation Hardtack</Text> and{" "}
								<Text as="i">Operation Ivy</Text>.
							</Text>
							<Text>
								During <Text as="i">Operation Hardtack</Text>, gunner's mate
								Wayne Brooks was stationed at Enewetak. Wayne became what would
								soon be known as an <Text as="i">atomic veteran</Text> when he
								and thousands of others like him were nearly within spitting
								distance of dozens of nuclear explosions and were forced to
								clean contaminated water from their ships following any
								radioactive rain at the atolls.
							</Text>
							<Text>
								He and his fellow sailors were unknowingly and unwillingly
								exposed to extremely unsafe levels of direct radiation and
								fallout. However, the United States has never recognized this
								sacrifice: there are no honors for atomic veterans. The
								illnesses Brooks has experienced as a result of his exposure
								don't fall within the very short list of acceptable conditions
								to receive compensation either.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={2}>
						<VStack spacing={1} mb={4}>
							<Image
								width="100%"
								objectFit="contain"
								src={require("../assets/wayne brooks.jpg")}
								alt="(Wayne Brooks)"
							/>
							<Text align="center" fontSize="sm" mt="5px" color="gray.500">
								Wayne Brooks.
							</Text>
						</VStack>
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
								src={require("../assets/videos/generic-test-c.mp4")}
							/>
						</video>
						<Text align="center" fontSize="sm" mt="5px" color="gray.500">
							<Text as="i">Operation Hardtack I</Text> (
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
					</GridItem>
					<GridItem order={{ base: 4, lg: 3 }}>
						<VStack spacing={1} mb={4}>
							<Image
								width="100%"
								objectFit="contain"
								src={require("../assets/the boat ride home.jpg")}
								alt='(Image captioned "The Boat Ride Home")'
							/>
							<Text align="center" fontSize="sm" mt="5px" color="gray.500">
								A cleanup crew without protective equipment stays in a small
								cargo craft, which had recently held extremely radioactive
								material.
							</Text>
						</VStack>
						<VStack spacing={1} mb={3}>
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
									src={require("../assets/videos/cleanup-c.mp4")}
								/>
							</video>
							<Text align="center" fontSize="sm" mt="5px" color="gray.500">
								The Enewetak cleanup crew.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={{ base: 3, lg: 4 }} colSpan={{ lg: 2 }}>
						<VStack spacing={5} align="start" textAlign="justify">
							<Text>
								Of course, much of the testing at Enewetak produced a great
								amount of highly radioactive waste. Later, nuclear cleanup crews
								were created and assigned to remove the waste around Enewetak.
								Naturally, the cleanup operation, too, was a failure—they not
								only were unable to contain much of the damage but were also
								regularly unsafe in the manner in which they were instructed to
								clean the atoll, with little to no protection from the
								radiation.
							</Text>
							<Text>
								The vast majority of both the exposed sailors and cleanup crews
								have been in no way compensated for their special service—most
								radiation-induced health problems are not considered eligible by
								the government.
							</Text>
							<Text>
								The people who were most harmed by the use of the atolls,
								though, were their former inhabitants. The Bikini and Enewetak
								atolls both had native populations of hundreds that were
								forcibly relocated from their island to perform nuclear tests.
								Despite the government's claims that the native islanders were
								happy to leave, the chosen new homes for the natives did not
								support their traditional way of life, causing mass starvation,
								and the nuclear experimentation rendered their ancestral home
								pockmarked, poisoned, and dead.
							</Text>
							<Text>
								Many other Marshall Islands residents were impacted by nuclear
								fallout on multiple occasions, being forced to evacuate their
								homes or, worse, developing radiation-related illnesses as a
								result of exposure. While originally very negligent, the U.S.
								government created a trust fund to aid the islands
								economically—though the United States was still unwilling to
								provide more when poor economic conditions at the islands made
								the support insufficient.
							</Text>
						</VStack>
					</GridItem>
				</Grid>
			</Box>
			<NextPageButton pageIndex={2} />
		</>
	);
}
