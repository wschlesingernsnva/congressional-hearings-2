import Navbar from "../components/Navbar";
import NextPageButton from "../components/NextPageButton";

export default function NavySailors() {
	return (
		<>
			<Navbar pageIndex={2} />
			<NextPageButton pageIndex={3} />
		</>
	);
}
