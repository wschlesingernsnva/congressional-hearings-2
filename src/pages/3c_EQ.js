import {
	Box,
	Button,
	Center,
	Heading,
	Text,
	Tooltip,
	VStack,
} from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function EQ() {
	return (
		<>
			<Navbar pageIndex={6} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading
					level={1}
					color="yellow.400"
					text="Government Intervention"
				/>
			</Box>
			<Box
				my="45px"
				py="70px"
				px={{ base: 5, md: "5%" }}
				backgroundColor="gray.900"
			>
				<Center>
					<Heading size="4xl" color="teal.300" mb="20px">
						ESSENTIAL QUESTION
					</Heading>
				</Center>
				<Center>
					<Text as="i" fontSize="4xl">
						How do congressional hearings affect policy, foster accountability,
						and serve the interests of the public?
					</Text>
				</Center>
			</Box>
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<VStack spacing={5} align="start" textAlign="justify">
					<Text>
						Clinton told the ACHRE that their most important task was to reveal
						the full story to the American public. The committee was{" "}
						<Text as="b">not</Text> instructed, however, to navigate remedies
						that the U.S. government could provide to those affected by the
						nuclear radiation experiments. The committee did so anyway. Their
						recommendations to the government and its agencies, largely
						surrounding methods of guaranteeing the protection of human rights
						during scientific studies, are as follows.{" "}
						<Text as="i">
							You may skim these if you wish&mdash;but try to understand the
							general ideas here.
						</Text>
					</Text>
				</VStack>
				<VStack my={12} spacing={5} align="start" textAlign="justify">
					<Text as="b">
						Apologize and provide financial support to those impacted by the
						experiments and their descendants.
					</Text>
					<Text as="b">
						Extend{" "}
						<Tooltip
							hasArrow
							label="RECA was a 1990 act providing financial support for a limited subset of those impacted by radiation experiments and nuclear testing. More on this, next page."
						>
							<Text as="u" color="cyan.300">
								RECA
							</Text>
						</Tooltip>{" "}
						to other populations that may have been exposed to similar levels of
						radiation to those who are already covered by the act.
					</Text>
					<Text as="b">
						Extend RECA to provide relief to veterans who have developed other
						diseases than those currently covered by the act as a probable
						result of radiation exposure, and provide relief to a broader range
						of uranium miners with lung cancer than what is currently being
						provided.
					</Text>
					<Text as="b">
						If inhabitants of other atolls than those currently supported by the
						Department of Energy's medical-relief program for the Marshall
						Islands may have been exposed to harmful levels of nuclear radiation
						as well, extend relief to those atolls. Also, review whether the
						current program is providing enough support, and expand it if
						necessary.
					</Text>
					<Text>
						<Text as="b">
							Take efforts to ensure the ethicality of future experiments on
							human subjects: allocate time and other mechanisms for reviewing
							studies posing potential risks to human subjects, and ensure
							subjects know of the difference between research and treatment,
							which agencies are conducting any given study, and what the
							financial implications of participating may be.{" "}
						</Text>
						"
						<Text as="i">
							The federal government must work in concert with the biomedical
							research community to exert leadership that alters the way in
							which research with human subjects is conceived and conducted so
							that no one in the scientific community should be able to say 'I
							didn't know' or 'nobody told me' about the substance or importance
							of research ethics.
						</Text>
						"
					</Text>
					<Text as="b">
						Continue to interpret the ethics of research in the future through
						surveying public opinion and interest.
					</Text>
					<Text as="b">
						Ensure that military personnel participating in research know that
						doing so is optional, and distinguish between mandatory and optional
						activities as armed-service members
					</Text>
					<Text as="b">
						Maintain a registry of those who participate in research and
						development programs, particularly those run by the military.
					</Text>
					<Text as="b">
						Implement enhanced{" "}
						<Tooltip
							hasArrow
							label="Oversight is the process by which government agencies keep an eye on each other, checking in to make sure that work is being done ethically and efficiently."
						>
							<Text as="u" color="cyan.300">
								oversight
							</Text>
						</Tooltip>{" "}
						mechanisms to ensure quality research is conducted, and bolster
						penalties for human rights violations by researchers.
					</Text>
					<Text as="b">
						Establish long-term financial reimbursements for any and all harm
						attributable to participation in past, current, and future research
						studies.
					</Text>
					<Text as="b">
						Require that all classified research, without exception, be reviewed
						on several specific axes by an independent panel of citizens and
						experts outside the government before being conducted and obtain
						participants' informed consent.
					</Text>
					<Text as="b">
						Establish a program under the Environmental Protection Agency to
						conduct oversight of classified studies, and require any secret
						environmental release of a substance to be reviewed by an
						independent panel beforehand.
					</Text>
					<Text as="b">
						Provide the public with access to knowledge of "lessons learned" by
						the Human Radiation Interagency Working Group by making thorough
						historical records continually public and accessible.
					</Text>
					<Text as="b">
						Declassify government documents about human experiments.
					</Text>
				</VStack>
				<VStack spacing={5} align="start" textAlign="justify">
					<Text>
						Despite the committee's efforts and subsequent pushes from the
						public, these recommendations have been largely ignored.
					</Text>
				</VStack>
			</Box>
			<NextPageButton pageIndex={7} />
		</>
	);
}
