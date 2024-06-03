import { Center, Heading } from "@chakra-ui/react";

const headingSizes = ["4xl", "2xl"];
const bottomMargins = [
	{ base: "45px", md: "50px" },
	{ base: "35px", md: "40px" },
];

export default function MainHeading(props) {
	return (
		<Center>
			<Heading
				textAlign="center"
				size={headingSizes[props.level - 1]}
				mt="15px"
				mb={bottomMargins[props.level - 1]}
				color={props.color}
			>
				{props.text}
			</Heading>
		</Center>
	);
}
