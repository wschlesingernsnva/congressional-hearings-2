import { Heading } from "@chakra-ui/react";

const headingSizes = ["4xl", "2xl", "lg"];
const bottomMargins = [
	{ base: "45px", md: "50px" },
	{ base: "35px", md: "40px" },
	"14px",
];

export default function MainHeading(props) {
	let align;
	let topMargin;
	if (props.level <= 2) {
		align = "center";
		topMargin = "15px";
	} else {
		align = props.align;
		topMargin = "0px";
	}

	return (
		<Heading
			align={align}
			textAlign={align}
			size={headingSizes[props.level - 1]}
			mt={topMargin}
			mb={bottomMargins[props.level - 1]}
			color={props.color}
		>
			{props.text}
		</Heading>
	);
}
