import { Routes, Route } from "react-router-dom";

import pageList from "./pages/pageList";

export default function Main() {
	return (
		<Routes>
			{pageList.map((thisPage, thisPageIndex) => (
				<Route
					key={thisPageIndex}
					path={thisPage.route}
					element={<thisPage.element />}
				/>
			))}
		</Routes>
	);
}
