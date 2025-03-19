"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useCalculator = void 0;
var utils_ts_1 = require("@/lib/utils.ts");
var react_1 = require("react");
var useCalculator = function () {
    var _a = (0, react_1.useState)({
        amount: 1000000,
        roi: 8.5,
        tenure: 20,
    }), value = _a[0], setValue = _a[1];
    var handleChange = function (field) { return function (value) {
        setValue(function (prevState) {
            var _a;
            return (__assign(__assign({}, prevState), (_a = {}, _a[field] = value, _a)));
        });
    }; };
    var createChartData = function (result) {
        return [
            {
                name: "principal",
                value: parseInt(result.totalPrincipal, 10),
                fill: "var(--color-principal)",
            },
            {
                name: "interest",
                value: parseInt(result.totalInterest, 10),
                fill: "var(--color-interest)",
            },
        ];
    };
    var resultData = (0, utils_ts_1.calculateLoanDetails)(value);
    return {
        value: value,
        result: resultData,
        chartData: createChartData(resultData),
        onChange: handleChange,
    };
};
exports.useCalculator = useCalculator;
