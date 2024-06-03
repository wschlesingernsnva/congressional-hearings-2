import { Center, Heading } from "@chakra-ui/react";

const headingSizes = ["4xl", "2xl"];

export default function MainHeading(props) {
	return (
		<Center>
			<Heading
				textAlign="center"
				size={headingSizes[props.level - 1]}
				mt="15px"
				mb="50px"
				color={props.color}
			>
				{props.text}
			</Heading>
		</Center>
	);
}
