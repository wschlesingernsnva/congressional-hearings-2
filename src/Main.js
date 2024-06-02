import { Routes, Route } from "react-router-dom";

import Introduction from "./pages/Introduction";

function Main() {
	return (
		<Routes>
			<Route path="/" element={<Introduction />}></Route>
		</Routes>
	);
}

export default Main;
