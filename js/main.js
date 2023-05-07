import { getArrayObj } from "./modules/utill.js";
import { getDescriptionPhoto } from "./modules/data.js";

const getArrayDescriptions = getArrayObj(getDescriptionPhoto);

console.log(getArrayDescriptions);
