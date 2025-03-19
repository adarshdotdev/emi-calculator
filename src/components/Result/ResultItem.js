"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResultItem = void 0;
var utils_ts_1 = require("@/lib/utils.ts");
var ResultItem = function (_a) {
    var label = _a.label, value = _a.value;
    return (<div className="flex items-center justify-between">
    <p>{label}</p>
    <p className="text-xl">&#8377;{(0, utils_ts_1.formatCurrency)(value)}</p>
  </div>);
};
exports.ResultItem = ResultItem;
