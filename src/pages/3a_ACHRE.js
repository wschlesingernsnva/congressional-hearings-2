import { Box, Text, VStack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function ACHRE() {
	return (
		<>
			<Navbar pageIndex={4} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading
					level={1}
					color="yellow.400"
					text="Government Intervention"
				/>
				<MainHeading level={2} color="red.400" text="The ACHRE" />
				<VStack spacing={5} align="start" textAlign="justify">
					<Text>
						Even today, some scientists, notably some of those involved, have
						looked back on the plutonium injections apathetically. Patricia
						Durbin, a scientist who worked with Hamilton as a student,
						proclaimed soon after Welsome's publications in the{" "}
						<Text as="i">Tribune</Text>, "They were always on the lookout for
						somebody who had some kind of terminal disease who was going to
						undergo an amputation. These things were not done to plague people
						or make them sick and miserable. They were not done to kill people.
						They were done to gain potentially valuable information. The fact
						that they were injected and provided this valuable data should
						almost be a sort of memorial rather than something to be ashamed of.
						It doesn't bother me to talk about the plutonium injectees because
						of the value of the information they provided."
					</Text>
					<Text>
						Those whose family members were impacted by the injections seem to
						disagree. Elmerine Whitfield, whose father was one of the victims,
						declared shortly after the publication of Welsome’s series, "There
						was no value to be gained by this. They caught my father at a very
						vulnerable time. And for 40 years, he sat around waiting to die."
					</Text>
					<Text>
						Yet, Durbin spoke of Dr. Samuel Bassett, the leader of the plutonium
						experiments at Strong Memorial Hospital, saying, "He was the one who
						did most of the injections. He injected some people with uranium,
						too. He was not a monster. He was not a ghoul. He was a scientist."
					</Text>
					<Text>
						As the ACHRE began to investigate the plutonium injections, many
						other human radiation experiments came back to light. One fact
						quickly became clear: the morality of the experiments was deeply
						complex, and no one argument could easily be given to justify or
						criminalize the scientists involved—at least, that is, with the
						information available at the time. The preface to the committee’s
						final report begins:
					</Text>
				</VStack>

				<VStack
					as="i"
					spacing={5}
					align="start"
					textAlign="justify"
					mx={{ base: 5, md: "5%" }}
					my={10}
				>
					<Text>
						Past research with human subjects, including human radiation
						research, has been a source of life-saving knowledge. Research
						involving human subjects continues to be essential to the progress
						of medical science, since most advances in medicine must at some
						point in their development be tested in human subjects. Every one of
						us who has been either a patient or a loved one of a patient has
						benefited from knowledge gained through research with human
						subjects. But medical science, like all science, does not proceed or
						progress without the taking of risks. In medical research, these
						risks often fall on the human subject, who sometimes does not stand
						to benefit personally from the knowledge gained. This is the source
						of the moral tension at the core of the enterprise of research
						involving human subjects. In order to secure important collective
						goods—scientific knowledge and advances in medicine—individuals are
						put in harm's way. The moral challenge is how to protect the rights
						and interests of these individuals while enabling and encouraging
						the advancement of science. [...]
					</Text>
					<Text>
						Underlying the outrage and concern expressed by government officials
						and members of the public were many unanswered questions. How many
						human radiation experiments were conducted? No one knew if the
						number was closer to 100 or 1,000. Were all the human radiation
						experiments done in secret, and were any of them still secret? Are
						any secret or controversial studies still ongoing? Scientists and
						science journalists pointed out that some of the highly publicized
						experiments had long ago been the subject of technical journal
						articles, even press accounts, and were old news; other commentators
						countered that, for most of the public, articles in technical
						journals might as well be secret. [...]
					</Text>
					<Text>
						Did the experiments benefit the American people through the
						advancement of science and the enhancement of the ability to treat
						disease? [...]
					</Text>
					<Text>
						Insofar as wrong things happened in the past, how confident should
						we be that they could not happen again? Have practices changed? Do
						we have the right rules, and are they implemented and enforced?
					</Text>
				</VStack>

				<VStack spacing={5} align="start" textAlign="justify">
					<Text>
						The committee sought to answer these questions thoroughly, aiming to
						keep such devastating infringements of human rights from ever
						occurring in the future.
					</Text>
				</VStack>
			</Box>
			<NextPageButton pageIndex={5} />
		</>
	);
}
