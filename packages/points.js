// @flow

type point = {
  x: number,
  y: number,
  classNumber: number,
  r: ?number
};

export function createPoint(
  x: number,
  y: number,
  classNumber: number,
  r: ?number
): point {
  //todo:provide a more specific descriptive error message ,
  //including descirption of what received
  if (typeof classNumber !== "number" || Number.isNaN(classNumber)) {
    throw new Error("classNumber should be an interger");
  }
  r === undefined ? (r = 1) : r;
  return { x, y, classNumber, r };
}
