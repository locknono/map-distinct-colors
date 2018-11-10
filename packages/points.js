export function createPoint(x, y, classNumber) {
  //todo:provide a more specific descriptive error message ,
  //including what received
  if (typeof classNumber !== "number" || Number.isNaN(classNumber)) {
    throw new Error("classNumber should be an interger");
  }
}
