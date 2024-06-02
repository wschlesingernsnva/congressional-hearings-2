import { useRef } from "react";

import { Link as ReactRouterLink } from "react-router-dom";

import {
	Drawer,
	DrawerBody,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	useDisclosure,
	Button,
	VStack,
	Link,
	Flex,
	Spacer,
} from "@chakra-ui/react";

import NavbarBreadcrumb from "./NavbarBreadcrumb";

export default function Navbar(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();

	return (
		<>
			<Flex p="15px" align="center">
				<Button ref={btnRef} onClick={onOpen} variant="outline">
					View all pages
				</Button>
				<Spacer />
				<NavbarBreadcrumb mr="8.5px" path={props.path} />
			</Flex>

			<Drawer
				isOpen={isOpen}
				placement="left"
				onClose={onClose}
				finalFocusRef={btnRef}
			>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>ATOMIC GUINEA PIGS</DrawerHeader>

					<DrawerBody>
						<VStack align="start">
							<Link as={ReactRouterLink} to="/">
								Introduction
							</Link>
							<Link as={ReactRouterLink} to="/case_studies">
								Case Studies
							</Link>
							<Link as={ReactRouterLink} to="/case_studies/navy_sailors">
								Navy Sailors
							</Link>
							<Link as={ReactRouterLink} to="/case_studies/cleanup_crews">
								Cleanup Crews
							</Link>
							<Link as={ReactRouterLink} to="/case_studies/castle_bravo">
								Castle Bravo
							</Link>
							<Link as={ReactRouterLink} to="/case_studies/civilian_exposure">
								Civilian Exposure
							</Link>
							<Link
								as={ReactRouterLink}
								to="/case_studies/plutonium_experiments"
							>
								The Plutonium Experiments
							</Link>
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
