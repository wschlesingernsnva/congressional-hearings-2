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
		route: "/",
		path: ["Introduction"],
		element: Introduction,
	},
	{
		name: "Enewetak Atoll",
		route: "/case_studies/enewetak",
		path: ["Case Studies", "Enewetak Atoll"],
		element: Enewetak,
	},
	{
		name: "Castle Bravo",
		route: "/case_studies/castle_bravo",
		path: ["Case Studies", "Castle Bravo"],
		element: CastleBravo,
	},
	{
		name: "The Plutonium Experiments",
		route: "/case_studies/plutonium_experiments",
		path: ["Case Studies", "The Plutonium Experiments"],
		element: PlutoniumExperiments,
	},
	{
		name: "The ACHRE",
		route: "/government_intervention/achre",
		path: ["Government Intervention", "The ACHRE"],
		element: ACHRE,
	},
	{
		name: "The UCSF Committee",
		route: "/government_intervention/ucsf",
		path: ["Government Intervention", "The UCSF Committee"],
		element: UCSF,
	},
	{
		name: "EQ & ACHRE Recommendations",
		route: "/government_intervention/eq",
		path: ["Government Intervention", "EQ & ACHRE Recommendations"],
		element: EQ,
	},
	{
		name: "RECA",
		route: "/government_intervention/reca",
		path: ["Government Intervention", "RECA"],
		element: RECA,
	},
	{
		name: "End",
		route: "/government_intervention/end",
		path: ["Government Intervention", "End"],
		element: End,
	},
];

export default pageList;
