import Navbar from "../components/Navbar.js";
import NextPageButton from "../components/NextPageButton.js";

export default function CaseStudiesIntro() {
	return (
		<>
			<Navbar pageIndex={1} />
			<NextPageButton pageIndex={2} />
		</>
	);
}
