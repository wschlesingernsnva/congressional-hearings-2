import Introduction from "./pages/1_Introduction";
import Enewetak from "./pages/2a_Enewetak";
import CastleBravo from "./pages/2b_CastleBravo";
import PlutoniumExperiments from "./pages/2c_PlutoniumExperiments";
import ACHRE from "./pages/3a_ACHRE";
import UCSF from "./pages/3b_UCSF";
import EQ from "./pages/3c_EQ";
import RECA from "./pages/3d_RECA";
import End from "./pages/4_End";

const pageList = [
	{
		name: "Introduction",
		route: "/congressional-hearings-2/",
		route2: "/",
		path: ["Introduction"],
		element: Introduction,
	},
	{
		name: "Enewetak Atoll",
		route: "/congressional-hearings-2/case_studies/enewetak",
		route2: "/case_studies/enewetak",
		path: ["Case Studies", "Enewetak Atoll"],
		element: Enewetak,
	},
	{
		name: "Castle Bravo",
		route: "/congressional-hearings-2/case_studies/castle_bravo",
		route2: "/case_studies/castle_bravo",
		path: ["Case Studies", "Castle Bravo"],
		element: CastleBravo,
	},
	{
		name: "The Plutonium Experiments",
		route: "/congressional-hearings-2/case_studies/plutonium_experiments",
		route2: "/case_studies/plutonium_experiments",
		path: ["Case Studies", "The Plutonium Experiments"],
		element: PlutoniumExperiments,
	},
	{
		name: "The ACHRE",
		route: "/congressional-hearings-2/government_intervention/achre",
		route2: "/government_intervention/achre",
		path: ["Government Intervention", "The ACHRE"],
		element: ACHRE,
	},
	{
		name: "The UCSF Committee",
		route: "/congressional-hearings-2/government_intervention/ucsf",
		route2: "/government_intervention/ucsf",
		path: ["Government Intervention", "The UCSF Committee"],
		element: UCSF,
	},
	{
		name: "EQ & ACHRE Recommendations",
		route: "/congressional-hearings-2/government_intervention/eq",
		route2: "/government_intervention/eq",
		path: ["Government Intervention", "EQ & ACHRE Recommendations"],
		element: EQ,
	},
	{
		name: "RECA",
		route: "/congressional-hearings-2/government_intervention/reca",
		route2: "/government_intervention/reca",
		path: ["Government Intervention", "RECA"],
		element: RECA,
	},
	{
		name: "End",
		route: "/congressional-hearings-2/government_intervention/end",
		route2: "/government_intervention/end",
		path: ["Government Intervention", "End"],
		element: End,
	},
];

export default pageList;
