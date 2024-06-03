import CaseStudiesIntro from "./CaseStudiesIntro";
import CastleBravo from "./CastleBravo";
import CivilianExposure from "./CivilianExposure";
import CleanupCrews from "./CleanupCrews";
import Introduction from "./Introduction";
import NavySailors from "./NavySailors";
import PlutoniumExperiments from "./PlutoniumExperiments";

const pageList = [
	{
		name: "Introduction",
		route: "/",
		path: ["Introduction"],
		element: <Introduction />,
	},
	{
		name: "Case Studies",
		route: "/case_studies",
		path: ["Case Studies"],
		element: <CaseStudiesIntro />,
	},
	{
		name: "Navy Sailors",
		route: "/case_studies/navy_sailors",
		path: ["Case Studies", "Navy Sailors"],
		element: <NavySailors />,
	},
	{
		name: "Cleanup Crews",
		route: "/case_studies/cleanup_crews",
		path: ["Case Studies", "Cleanup Crews"],
		element: <CleanupCrews />,
	},
	{
		name: "Castle Bravo",
		route: "/case_studies/castle_bravo",
		path: ["Case Studies", "Castle Bravo"],
		element: <CastleBravo />,
	},
	{
		name: "Civilian Exposure",
		route: "/case_studies/civilian_exposure",
		path: ["Case Studies", "Civilian Exposure"],
		element: <CivilianExposure />,
	},
	{
		name: "The Plutonium Experiments",
		route: "/case_studies/plutonium_experiments",
		path: ["Case Studies", "The Plutonium Experiments"],
		element: <PlutoniumExperiments />,
	},
];

export default pageList;
