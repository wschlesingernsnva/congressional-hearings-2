import CaseStudiesIntro from "./pages/2_CaseStudiesIntro";
import CastleBravo from "./pages/2c_CastleBravo";
import CivilianExposure from "./pages/2d_CivilianExposure";
import CleanupCrews from "./pages/2b_CleanupCrews";
import GovernmentIntro from "./pages/3_GovernmentIntro";
import Introduction from "./pages/1_Introduction";
import NavySailors from "./pages/2a_NavySailors";
import PlutoniumExperiments from "./pages/2e_PlutoniumExperiments";

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
		element: NavySailors,
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
