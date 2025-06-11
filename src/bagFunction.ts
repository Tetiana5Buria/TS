/* function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === undefined) return 2021;
        if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021';
        if (elem.cvalue.isBigObject !== undefined) return summ(elem);
        return elem.сvalue;
    });
    let sum = 0;
    for (let i = 0; i < x.lenght; i++) {
        sum += x[i].cvalue;
    }
    return summ;
} */

interface BigObject {
  [key: string]:
    | { cvalue: number | string | BigObject | undefined }
    | undefined;
}
/* function summ(a) { */
function summ(a: BigObject): number {
  const x = Object.keys(a).map((k) => {
    const elem = a[k]?.cvalue;
    if (typeof elem === undefined) return 2021;
    /*  if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021'; */
    if (typeof elem === "string") return isNaN(+elem) ? 2021 : +elem; //'String'=> 'string' + isNan
    /* if (elem.cvalue.isBigObject !== undefined) return summ(elem); */
    if (typeof elem === "object" && elem !== null)
      return summ(elem as BigObject);
    /*  return elem.сvalue; */
    return typeof elem === "number" ? elem : 2021;
  });
  let sum: number = 0;
  /*  for (let i = 0; i < x.lenght; i++) { */
  for (let i = 0; i < x.length; i++) {
    /*     sum += x[i].cvalue; */
    sum += x[i];
  }
  /*     return summ; */
  return sum;
}

console.log(
  summ({ s: { cvalue: 1 }, h: { cvalue: "2" }, p: { cvalue: undefined } }) //1+2+2021 = 2024
);
console.log(
  summ({
    r: {
      cvalue: {
        o: { cvalue: 3 },
        m: { cvalue: "4" },
        a: { cvalue: undefined },
        n: { cvalue: "fgddd2222" },
      },
    },
  })
); //0+3+4+2021+2021=4049
