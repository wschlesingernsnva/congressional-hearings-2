import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";

export default function CleanupCrews() {
	return (
		<>
			<Navbar pageIndex={3} />
			<NextPageButton pageIndex={4} />
		</>
	);
}
