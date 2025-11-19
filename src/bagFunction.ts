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
  [key: string]: { cvalue?: number | string | BigObject } | undefined;
}
/* function summ(a) { */
function summ(a: BigObject): number {
  const x = Object.keys(a).map((k): number => {
    const elem = a[k];
    if (elem === undefined || elem?.cvalue === undefined) return 2021;
    /*  if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021'; */
    if (typeof elem.cvalue === "string") {
      //'String'=> 'string' + isNan
      const num = Number(elem.cvalue);
      return isNaN(num) ? 2021 : num;
    }
    /* if (elem.cvalue.isBigObject !== undefined) return summ(elem); */
    if (typeof elem.cvalue === "object" && elem.cvalue !== null) {
      return summ(elem.cvalue);
    }

    /*  return elem.сvalue; */
    return elem.cvalue;
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
  "Нова:" + summ({ s: { cvalue: 1 }, h: { cvalue: "2" }, p: { cvalue: "48" } }) //1+2+48 = 51
);
console.log(
  summ({
    r: {
      cvalue: {
        o: { cvalue: 3 },
        m: { cvalue: "45" },
        a: { cvalue: undefined },
        n: { cvalue: "fgddd2222" },
      },
    },
  })
); //0+3+4+2021+2021=4049

console.log(summ({})); //0

console.log(
  summ({
    s: { cvalue: "25789" },
    num: { cvalue: 45 },
    nan: { cvalue: "" },
  })
);
console.log("=== Нульові значення ===");
console.log(
  summ({
    zero: { cvalue: 0 },
    zeroStr: { cvalue: "0" },
    emptyStr: { cvalue: "" },
  })
); // 0 + 0 + 0 = 0

console.log(
  summ({
    int: { cvalue: "100" },
    float: { cvalue: "12.5" },
    badFloat: { cvalue: "12.5abc" },
  })
);
// 100 + 12.5 + 2021 = 2133.5
/* object */
const bigObj: BigObject = {};
for (let i = 0; i < 100; i++) {
  bigObj[`key${i}`] = { cvalue: i % 2 === 0 ? i : "invalid" };
}
console.log("Big object sum:", summ(bigObj));
//  101050 + 2450 = 103500
