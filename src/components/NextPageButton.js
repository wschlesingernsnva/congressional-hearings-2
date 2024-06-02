import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Center, Text } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";

export default function NextPageButton(props) {
	return (
		<Center>
			<Button
				my="30px"
				size="lg"
				as={ReactRouterLink}
				to={props.to}
				colorScheme="orange"
				rightIcon={<ArrowForwardIcon />}
			>
				<Text as="b">Next</Text>
			</Button>
		</Center>
	);
}
