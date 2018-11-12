import type point, { createPoint } from "./points";

type baryCenter = [number, number];

type cluster = {
  classNumber: number,
  area: number,
  baryCenter: baryCenter
};

export function createCluster(points: Array<point>): Array<cluster> {
  let clusterMap = new Map();
  for (let i = 0; i < points.length; i++) {
    let classNumber = points[i].classNumber;
    if (clusterMap.get(classNumber) === undefined) {
      clusterMap.set(classNumber, 1);
    } else {
      let area = clusterMap.get(classNumber);
      clusterMap.set(classNumber, area + 1);
    }
  }
  let clusters = [];
  for (let cluster in clusterMap.entries) {
    clusters.push({ classNumber: cluster[0], area: cluster[1] });
  }
  return clusters;
}
