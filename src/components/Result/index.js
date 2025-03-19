"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var ResultItem_tsx_1 = require("@/components/Result/ResultItem.tsx");
var Result = function (_a) {
    var result = _a.result;
    return (<div className="grid gap-5 mt-20">
    <ResultItem_tsx_1.ResultItem label="Monthly EMI" value={result.monthlyEMI}/>
    <ResultItem_tsx_1.ResultItem label="Principal Amount" value={result.totalPrincipal}/>
    <ResultItem_tsx_1.ResultItem label="Total Interest" value={result.totalInterest}/>
    <ResultItem_tsx_1.ResultItem label="Total Amount" value={result.totalAmount}/>
  </div>);
};
exports.Result = Result;
