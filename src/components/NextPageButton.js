import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Button, Center, Text } from "@chakra-ui/react";

import { Link as ReactRouterLink } from "react-router-dom";
import pageList from "../pageList";

export default function NextPageButton(props) {
	return (
		<Center>
			<Button
				my={12}
				size="lg"
				as={ReactRouterLink}
				to={pageList[props.pageIndex].route}
				colorScheme="orange"
				rightIcon={<ArrowForwardIcon />}
			>
				<Text as="b">Next</Text>
			</Button>
		</Center>
	);
}
