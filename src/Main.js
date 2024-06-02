import { Routes, Route } from "react-router-dom";

import Introduction from "./pages/Introduction";
import CaseStudiesIntro from "./pages/CaseStudiesIntro";

function Main() {
	return (
		<Routes>
			<Route path="/" element={<Introduction />}></Route>
			<Route path="/case_studies" element={<CaseStudiesIntro />}></Route>
		</Routes>
	);
}

export default Main;
