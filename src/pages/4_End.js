import { Box, Link, Text, VStack } from "@chakra-ui/react";

import Navbar from "../components/Navbar";
import MainHeading from "../components/MainHeading";

export default function End() {
	return (
		<>
			<Navbar pageIndex={8} />
			<Box mx={{ base: 5, md: "5%" }} fontSize="2xl">
				<MainHeading level={1} color="gray.400" text="The End" />
				<VStack spacing={5} align="center" textAlign="justify">
					<Text mb={5}>
						If you've read the whole site and you still have a lot of time left,
						feel free to read through the article that inspired this exhibition:
					</Text>
					<Link
						color="teal.300"
						href="https://revealnews.org/article/us-veterans-in-secretive-nuclear-tests-still-fighting-for-recognition/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<Text as="u">
							America's atomic vets: 'We were used as guinea pigs &mdash; every
							one of us'
						</Text>
					</Link>
				</VStack>
			</Box>
		</>
	);
}
