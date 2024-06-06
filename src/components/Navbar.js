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
	Text,
} from "@chakra-ui/react";

import NavbarBreadcrumb from "./NavbarBreadcrumb";
import { ChevronRightIcon } from "@chakra-ui/icons";

import pageList from "../pageList.js";

function DrawerLink(props) {
	const indent = 0; // (props.page.path.length - 1) * 15;
	if (props.page.name === props.currentPage.name) {
		return (
			<Text textIndent={indent} color="gray.500">
				<ChevronRightIcon /> {props.page.name}
			</Text>
		);
	} else {
		return (
			<Text textIndent={indent}>
				<ChevronRightIcon color="gray.500" />{" "}
				<Link as={ReactRouterLink} to={props.page.route}>
					{props.page.name}
				</Link>
			</Text>
		);
	}
}

function AllDrawerLinks(props) {
	return (
		<>
			{pageList.map((thisPage, thisPageIndex) => (
				<DrawerLink
					page={thisPage}
					currentPage={props.currentPage}
					key={thisPageIndex}
				/>
			))}
		</>
	);
}

export default function Navbar(props) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = useRef();
	const currentPage = pageList[props.pageIndex];

	return (
		<>
			<Flex p="15px" align="center">
				<Button ref={btnRef} onClick={onOpen} variant="outline">
					View all pages
				</Button>
				<Spacer />
				<NavbarBreadcrumb mr="8.5px" path={currentPage.path} />
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
							<AllDrawerLinks currentPage={currentPage} />
						</VStack>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	);
}
