import { getArrayObj } from "./modules/utill.js";
import { getDescriptionPhoto } from "./modules/data.js";

const getArrayDescriptions = getArrayObj(getDescriptionPhoto);

console.log(getArrayDescriptions);
getArrayDescriptions.forEach((index) => {
  index.comments.forEach((indexComment) => {
    console.log(indexComment.id)
  })
})
