import { Box, Text, VStack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";
import MainHeading from "../components/MainHeading";

export default function UCSF() {
	return (
		<>
			<Navbar pageIndex={5} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="xl">
				<MainHeading
					level={1}
					color="yellow.400"
					text="Government Intervention"
				/>
				<MainHeading level={2} color="orange.400" text="The UCSF Committee" />
				{/* CHANGE
				COLOR
				*/}
				<VStack spacing={5} align="start" textAlign="justify">
					<Text>
						Just before Clinton appointed the ACHRE, Chancellor Martin, at the
						University of California in San Francisco (UCSF), which had
						participated in the plutonium experiments through its hospital,
						decided to take matters into his own hands, organizing a committee
						at the university to investigate what had happened there. The
						committee obtained hundreds of documents throughout its research,
						such as medical histories, laboratory and government notes, memos,
						and official government documents, many of which had previously been
						classified. The committee ultimately determined that throughout the
						plutonium trials, the patients were absolutely not complicit or even
						aware of their roles as test subjects, and the doses of plutonium
						given to the patients were, in fact, lethal and unethical. In their
						final report, published in February 1995, they drew parallels
						between the experiments and those conducted in Nazi Germany—a
						connection that, having first been noted by Welsome in her series in
						the <Text as="i">Tribune</Text>, would continue to be emphasized by
						advocates for justice and compensation for those whom scientists
						used as guinea pigs in their trials.
					</Text>
					<Text>
						The committee failed to uncover key details about the experiments,
						however. It hypothesized that two of the three patients at the
						university who had been injected with plutonium may not have been
						connected at all to the secret project being run at Los Alamos
						despite clear effort that they were. Furthermore, officials from the
						university continued to deny that the patients who had been at the
						university's hospital decades ago had been injected with{" "}
						<Text as="i">lethal</Text> doses of plutonium (though they were, in
						fact, injected with several times the lethal amount).
					</Text>
					<Text>
						Still, as the ACHRE proceeded with its own investigations, it would
						come to rely on information the UCSF committee{" "}
						<Text as="i">did</Text> discover as well as the documents it managed
						to declassify, using the UCSF committee's work as a stepping stone
						for its own.
					</Text>
					<Text>
						From April 1994 through March 1995, the ACHRE held twenty meetings
						in total, accepting testimony from the experimentees and their
						relatives and discussing the implications of their findings. Paired
						with other research that was collected and discussed, these hearings
						formed the backbone of the committee's strategy for uncovering
						truth.
					</Text>
				</VStack>
			</Box>
			<NextPageButton pageIndex={6} />
		</>
	);
}
