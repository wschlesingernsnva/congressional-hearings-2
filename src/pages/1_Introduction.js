import { Box, Grid, GridItem, Text, Link, VStack } from "@chakra-ui/react";

import Navbar from "../components/Navbar.js";
import NextPageButton from "../components/NextPageButton.js";
import MainHeading from "../components/MainHeading.js";

export default function Introduction() {
	return (
		<>
			<Navbar pageIndex={0} />
			<Box mx="25px" fontSize="xl">
				<MainHeading level={1} color="red.500" text="Introduction: Trinity" />
				<Grid
					gridAutoRows="min-content"
					templateColumns={{
						base: "1fr",
						lg: "2fr 1fr 2fr",
						"2xl": "0.55fr 1fr 0.55fr",
					}}
					gap={8}
				>
					<GridItem order={{ base: 2, lg: 1 }} colSpan={{ base: 1, lg: 2 }}>
						<VStack spacing={5} textAlign="justify">
							<Text>
								On July 16, 1945, at 5:29 AM, the first nuclear bomb exploded in
								New Mexico. Codenamed <Text as="i">Trinity</Text>, this titanic
								fireball was the capstone of the United States's Manhattan
								Project, demonstrating a functional design for a plutonium-based
								nuclear weapon. The very same design (nicknamed the "Fat Man")
								along with a slightly different uranium-based design (nicknamed
								the "Little Boy") was used for a second time, less than three
								weeks later, when the United States detonated them over
								Hiroshima and Nagasaki City in Japan, bringing a rapid end to
								World War II. These two explosions have been, to date, the only
								time nuclear weapons were ever used in warfare.
							</Text>
							<Text>
								Global politics were forever changed. With the capacity for a
								country to wreak absolute nuclear annihilation on any foe,
								nuclear weapons development became a defining focus of the next
								fifty years of politics and military research. Before long,
								atomic spy Klaus Fuchs leaked the basic design of the Fat Man to
								Russia, and Russia detonated its first atomic bomb at a test
								site in Kazakhstan on August 29th, 1949. With the Soviets now a
								nuclear rival, the U.S. began to greatly escalate its nuclear
								weapons development—and began nuclear testing, resulting in the
								complete environmental destruction of a number of Pacific
								islands.
							</Text>
							<Text>
								<Text as="b">But this isn't the whole story.</Text> America's
								nuclear experimentation had severe toxic effects on large swaths
								of the southwest. In fact, even Trinity, the very first nuclear
								test, was conducted near enough to populations of thousands of
								civilians that such a test would be absolutely prohibited by
								later nuclear testing guidelines. And even after the
								implementation of those guidelines, no effort was made to warn
								or evacuate those living under the nuclear fallout. This
								negligence soon became a clear pattern in the U.S. government's
								behavior: in the Pacific, many American sailors and marines were
								directly exposed to nuclear blasts and accompanying ionizing
								radiation which induced severe health effects both then and
								later in life—not even to mention the tests' effects on local
								populations. As the U.S. military's obsessive, reckless behavior
								and refusal to compensate those harmed by its testing spiraled
								into several nation-wide scandals, these soldiers and civilians'
								struggle for recognition and compensation continued.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={{ base: 1, lg: 2 }}>
						<VStack>
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
									src={require("../assets/videos/trinity-c.mp4")}
								/>
							</video>
							<Text align="center" fontSize="sm" mt="5px" color="gray.500">
								Detonation of <Text as="i">Trinity</Text> (from{" "}
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
					<GridItem order={3} colSpan={{ base: 1, lg: 3 }}>
						<MainHeading level={3} align="start" text="Operation Crossroads" />
						<VStack spacing={5} textAlign="justify">
							<Text>
								The first postwar nuclear test had been planned before a single
								nuclear weapon was ever built. In June 1945, a month before
								Trinity, Vice Admiral E.L. Cochrane and Rear Admiral G.F. Hussey
								proposed a test to determine the effects of high-explosive
								ordinance on warships and merchant vessels. They proposed the
								use of real, retired navy ships in a full-scale test to provide
								better prediction quality over miniature simulations. The idea
								was well-received by military leaders, and preparations began.
								However, following the end of the war, Cochrane changed the
								plan, instead proposing that they "must be prepared to undertake
								broad-scale experiments with the atomic bomb to clear up its
								major influence on naval warfare before we can at all consider
								an extension of the underwater explosion work on the concept of
								TNT or its associated explosives." Soon enough, a joint task
								force was formed, and despite pushback from scientists,
								diplomats, and the public,{" "}
								<Text as="i">Operation Crossroads</Text> began on July 1, 1946,
								at Bikini Atoll in the Marshall Islands.
							</Text>
							<Text>
								The tests were codenamed <Text as="i">Able</Text> and{" "}
								<Text as="i">Baker</Text>, and both bombs had a yield of around
								23 kilotons, comparable to the 21-kiloton Fat Man bomb dropped
								on Nagasaki City. The stated purpose of the two tests was to
								determine the effects of nuclear devices in the context of naval
								combat, so they were tested on a fleet of unoccupied,
								decommissioned ships. <Text as="i">Able</Text> was to be dropped
								from a plane and detonated, creating an airburst explosion above
								the surface of the water, while <Text as="i">Baker</Text> would
								detonate beneath the surface of the water.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={4}>
						<VStack>
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
									src={require("../assets/videos/able-c.mp4")}
								/>
							</video>
							<Text align="center" fontSize="sm" mt="5px" color="gray.500">
								Shot <Text as="i">Able</Text> (
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
					<GridItem order={5} colSpan={{ base: 1, lg: 2 }}>
						<VStack spacing={5} textAlign="justify">
							<Text>
								However, when <Text as="i">Able</Text> was fired on July 1, it
								missed the intended target (the decommissioned ships) by over
								two-thousand feet, greatly reducing the usefulness of the test.
								Despite this setback, the state of the warships was assessed,
								data was collected, and shot <Text as="i">Baker</Text> proceeded
								on July 25.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={6} colSpan={{ lg: 3 }}>
						<VStack spacing={5} textAlign="justify">
							<Text>
								<Text as="i">Able</Text> may have been a failure, but{" "}
								<Text as="i">Baker</Text> was a sheer disaster, releasing a
								massive amount of unexpected nuclear contamination and fallout.
								This contamination prevented any further tests with the fleet
								used for <Text as="i">Able</Text> and <Text as="i">Baker</Text>{" "}
								and made the water around Bikini Atoll so radioactive that the
								island became completely uninhabitable for decades.
							</Text>
						</VStack>
					</GridItem>
					<GridItem order={7} colSpan={{ lg: 3 }}>
						<VStack>
							<Grid
								gridAutoRows="min-content"
								templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }}
								gap={2.5}
							>
								<GridItem>
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
											src={require("../assets/videos/baker-c.mp4")}
										/>
									</video>
								</GridItem>
								<GridItem>
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
											src={require("../assets/videos/baker-2-c.mp4")}
										/>
									</video>
								</GridItem>
							</Grid>
							<Text align="center" fontSize="sm" mt="5px" color="gray.500">
								<Text as="i">Baker ___________</Text> (
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
					<GridItem order={8} colSpan={{ lg: 3 }}>
						<VStack spacing={5} textAlign="justify">
							<Text>
								Faced with these two warnings about the dangers of nuclear
								testing and under continuous protestation from scientists,
								diplomats, artists, and the public, the United States would go
								on to conduct at least two-hundred more tests in the atmosphere
								and underwater.
							</Text>
						</VStack>
					</GridItem>
				</Grid>
				<NextPageButton pageIndex={1} />
			</Box>
		</>
	);
}
