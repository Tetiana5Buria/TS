type objectA = {
  [key: string]: undefined | { cvalue: undefined | string | number | objectA };
};

function calculateSum(A: objectA): number {
  let countedSumCValue = 0;

  for (const keys in A) {
    const value = A[keys];

    if (
      value === undefined ||
      value.cvalue === undefined ||
      value.cvalue === ""
    ) {
      countedSumCValue += 2021;
    } else {
      const cvalue = value.cvalue;

      if (typeof cvalue === "number") {
        countedSumCValue += cvalue; // if number
      } else if (typeof cvalue === "string") {
        const parsed = Number(cvalue);
        if (isNaN(parsed)) {
          countedSumCValue += 2021; // if not valid
        } else {
          countedSumCValue += parsed; // add number
        }
      } else if (typeof cvalue === "object") {
        countedSumCValue += calculateSum(cvalue); //rec
      }
    }
  }

  return countedSumCValue;
}

const example = {
  hello: { cvalue: 1 },
  world: { cvalue: { yay: { cvalue: "2" } } },
};

console.log(calculateSum(example)); //  3

const test = {
  apple: { cvalue: 5 }, //5
  banana: { cvalue: "" }, //2021
  pear: { cvalue: "125ax" }, //2021
  onion: { cvalue: undefined }, //2021
  cucumber: { cvalue: "5896" }, //5896
  tomato: { cvalue: { red: { cvalue: "11" } } }, // 0+11 = 11;
};
console.log(calculateSum(test)); //11975
