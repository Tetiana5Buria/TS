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
/* function summ(a) { */
function summ(a) {
    var x = Object.keys(a).map(function (k) {
        var _a;
        var elem = (_a = a[k]) === null || _a === void 0 ? void 0 : _a.cvalue;
        if (typeof elem === undefined)
            return 2021;
        /*  if (typeof elem.cvalue === 'String') return +elem.cvalue || '2021'; */
        if (typeof elem === "string")
            return isNaN(+elem) ? 2021 : +elem; //'String'=> 'string' + isNan
        /* if (elem.cvalue.isBigObject !== undefined) return summ(elem); */
        if (typeof elem === "object" && elem !== null)
            return summ(elem);
        /*  return elem.сvalue; */
        return typeof elem === "number" ? elem : 2021;
    });
    var sum = 0;
    /*  for (let i = 0; i < x.lenght; i++) { */
    for (var i = 0; i < x.length; i++) {
        /*     sum += x[i].cvalue; */
        sum += x[i];
    }
    /*     return summ; */
    return sum;
}
// Тестові приклади
console.log(summ({ a: { cvalue: 1 }, b: { cvalue: "2" }, c: { cvalue: undefined } }));
console.log(summ({ a: { cvalue: { d: { cvalue: 3 }, e: { cvalue: "4" } } } }));
