import { Breadcrumb, BreadcrumbItem, Text } from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

export default function NavbarBreadcrumb(props) {
	return (
		<Breadcrumb {...props} separator={<ChevronRightIcon color="gray.500" />}>
			{props.path.map((thisSectionName, thisSectionNameIndex) => (
				<BreadcrumbItem key={thisSectionNameIndex}>
					<Text>{thisSectionName}</Text>
				</BreadcrumbItem>
			))}
		</Breadcrumb>
	);
}
