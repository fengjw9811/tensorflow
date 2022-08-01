// 产生二分类数据

export function getData(numSamples) {
  const points = [];

  function genGauss(cx, cy, label) {
    for (let i = 0; i < numSamples / 2; i++) {
      const x = normalRandom(cx);
      const y = normalRandom(cy);
      points.push({x, y, label});
    }
  }

  genGauss(2, 2, 1);
  genGauss(-2, -2, 0);
  return points;
}

function normalRandom(mean = 0, variance = 1) {
  let v1; let v2; let s;
  do {
    v1 = 2 * Math.random() - 1;
    v2 = 2 * Math.random() - 1;
    s = v1 * v1 + v2 * v2;
  } while (s > 1);

  const result = Math.sqrt(-2 * Math.log(s) / s) * v1;
  return mean + Math.sqrt(variance) * result;
}
