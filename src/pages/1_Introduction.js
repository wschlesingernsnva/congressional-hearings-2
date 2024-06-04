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
			<Box mx="25px" fontSize="xl">
				<MainHeading level={1} color="red.500" text="Introduction: Trinity" />
				<Grid
					autoRows
					templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
					gap={8}
				>
					<GridItem order={{ base: 2, md: 1 }} colSpan={{ base: 1, md: 2 }}>
						<VStack spacing={5} textAlign="justify">
							<Text>
								On July 16, 1945, at 5:29 AM, the first nuclear bomb exploded in
								New Mexico. Codenamed <Text as="i">Trinity</Text>, this titanic
								fireball was the capstone of the United States' Manhattan
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
					<GridItem order={3} colSpan={{ base: 1, md: 2 }}>
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
								<Text as="i">Operation Crossroads</Text> began on July 1, 1946
								at Bikini Atoll in the Marshall Islands.
							</Text>
							<Text>
								The tests were codenamed <Text as="i">Able</Text>and{" "}
								<Text as="i">Baker</Text>, and both bombs had a yield of around
								23 kilotons, comparable to the 21-kiloton Fat Man bomb dropped
								on Nagasaki City. The stated purpose of the two tests was to
								determine the effects of nuclear devices in the context of naval
								combat, and as such, they were tested on a fleet of
								decommissioned ships. <Text as="i">Able</Text> was to be dropped
								from a plane and detonated, creating an airburst explosion above
								the surface of the water, while <Text as="i">Baker</Text> would
								detonate beneath the surface of the water.
							</Text>
							<Text>
								However, when <Text as="i">Able</Text> was fired on July 1, it
								missed the intended target of the decommissioned ships by over
								two-thousand feet, greatly reducing the usefulness of the test.
								Despite this setback, the state of the warships was assessed,
								data was collected, and shot <Text as="i">Baker</Text> proceeded
								on July 25.
							</Text>
							<Text>
								<Text as="i">Baker</Text> was a disaster, releasing a massive
								amount of unexpected nuclear contamination and fallout. This
								contamination prevented any further tests with the fleet used
								for <Text as="i">Able</Text> and <Text as="i">Baker</Text> and
								made the water around Bikini Atoll so radioactive that the
								island became completely uninhabitable for decades.
							</Text>
							<Text>
								Faced with these two warnings about the dangers of nuclear
								testing and continuous protestation from scientists and others,
								the United States would go on to conduct at least two-hundred
								more tests in the atmosphere and underwater.
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
