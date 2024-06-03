import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";

export default function CivilianExposure() {
	return (
		<>
			<Navbar pageIndex={5} />
			<NextPageButton pageIndex={6} />
		</>
	);
}
