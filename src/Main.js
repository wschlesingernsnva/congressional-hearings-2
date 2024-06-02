import { Routes, Route } from "react-router-dom";

import Introduction from "./pages/Introduction";
import CaseStudiesIntro from "./pages/CaseStudiesIntro";
import NavySailors from "./pages/NavySailors";
import CleanupCrews from "./pages/CleanupCrews";
import CastleBravo from "./pages/CastleBravo";
import CivilianExposure from "./pages/CivilianExposure";
import PlutoniumExperiments from "./pages/PlutoniumExperiments";

function Main() {
	return (
		<Routes>
			<Route path="/" element={<Introduction />} />
			<Route path="/case_studies" element={<CaseStudiesIntro />} />
			<Route path="/case_studies/navy_sailors" element={<NavySailors />} />
			<Route path="/case_studies/cleanup_crews" element={<CleanupCrews />} />
			<Route path="/case_studies/castle_bravo" element={<CastleBravo />} />
			<Route
				path="/case_studies/civilian_exposure"
				element={<CivilianExposure />}
			/>
			<Route
				path="/case_studies/plutonium_experiments"
				element={<PlutoniumExperiments />}
			/>
		</Routes>
	);
}

export default Main;
