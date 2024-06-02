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
			<Flex p="15px" pr="23.5px" align="center">
				<Button ref={btnRef} onClick={onOpen}>
					View all pages
				</Button>
				<Spacer />
				<NavbarBreadcrumb path={props.path} />
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
						<Link as={ReactRouterLink} href="./pages/Introduction.js">
							Introduction
						</Link>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
		// <Breadcrumb>
		// 	<BreadcrumbItem>
		// 		<BreadcrumbLink as={ReactRouterLink} href="./pages/home">
		// 			Home
		// 		</BreadcrumbLink>
		// 	</BreadcrumbItem>
		// </Breadcrumb>
	);
}
