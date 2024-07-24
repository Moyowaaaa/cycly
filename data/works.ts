import helpingHandImage from "./assets/images/helpinghand.png";
import zebraAppBaseImage from "~/assets/images/zebra.png";
import FrothFusionFullImage from "~/assets/images/FrothFull.png";
import FrothFusionCutImage from "~/assets/images/frothCut.png";
import TintBoldFullImage from "~/assets/images/tintboltFull.png";
import TintBoldCutImage from "~/assets/images/tintboltCut.png";
import ElearningFullImage from "~/assets/images/elearningFull.png";
import ElearningCutImage from "~/assets/images/elearningCut.png";
import type { work } from "~/types/declarations";

export const works: work[] = [
  {
    name: "Helping-Hand Case study",
    wideImage: helpingHandImage,
    desc: ["UI/UX design", "Research", "Mockup"],
    isLarge: true,
  },

  {
    name: "Zebra App",
    baseImage: zebraAppBaseImage,
    desc: ["UI design", "Mobile app"],
    isLarge: false,
  },
  {
    name: "Froth Fusion",
    desc: ["UI design", "Mobile app"],
    bigImage: FrothFusionFullImage,
    smallImage: FrothFusionCutImage,
    isLarge: false,
  },
  {
    name: "TintBolt",
    desc: ["UI design", "Web design"],
    bigImage: TintBoldFullImage,
    smallImage: TintBoldCutImage,
    isLarge: false,
  },
  {
    name: "E-Learning",
    desc: ["UI design", "Web design"],
    bigImage: ElearningFullImage,
    smallImage: ElearningCutImage,
    isLarge: false,
  },
];
