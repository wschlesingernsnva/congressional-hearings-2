import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";

export default function CastleBravo() {
	return (
		<>
			<Navbar pageIndex={4} />
			<NextPageButton pageIndex={5} />
		</>
	);
}
