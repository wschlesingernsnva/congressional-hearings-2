import Introduction from "./pages/1_Introduction";
import CaseStudiesIntro from "./pages/2_CaseStudiesIntro";
import Enewetak from "./pages/2a_Enewetak";
import CleanupCrews from "./pages/2b_CleanupCrews";
import CastleBravo from "./pages/2c_CastleBravo";
import CivilianExposure from "./pages/2d_CivilianExposure";
import PlutoniumExperiments from "./pages/2e_PlutoniumExperiments";
import GovernmentIntro from "./pages/3_GovernmentIntro";

const pageList = [
	{
		name: "Introduction",
		route: "/",
		path: ["Introduction"],
		element: Introduction,
	},
	{
		name: "Case Studies",
		route: "/case_studies",
		path: ["Case Studies"],
		element: CaseStudiesIntro,
	},
	{
		name: "Navy Sailors",
		route: "/case_studies/navy_sailors",
		path: ["Case Studies", "Navy Sailors"],
		element: Enewetak,
	},
	{
		name: "Cleanup Crews",
		route: "/case_studies/cleanup_crews",
		path: ["Case Studies", "Cleanup Crews"],
		element: CleanupCrews,
	},
	{
		name: "Castle Bravo",
		route: "/case_studies/castle_bravo",
		path: ["Case Studies", "Castle Bravo"],
		element: CastleBravo,
	},
	{
		name: "Civilian Exposure",
		route: "/case_studies/civilian_exposure",
		path: ["Case Studies", "Civilian Exposure"],
		element: CivilianExposure,
	},
	{
		name: "The Plutonium Experiments",
		route: "/case_studies/plutonium_experiments",
		path: ["Case Studies", "The Plutonium Experiments"],
		element: PlutoniumExperiments,
	},
	{
		name: "Government Intervention",
		route: "/government_intervention",
		path: ["Government Intervention"],
		element: GovernmentIntro,
	},
];

export default pageList;
