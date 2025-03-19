"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Calculator = void 0;
var card_tsx_1 = require("@/components/ui/card.tsx");
var Chart_tsx_1 = require("@/components/Chart.tsx");
var Result_1 = require("@/components/Result");
var Fieldlnput_1 = require("./Fieldlnput");
var useCalculator_1 = require("@/hooks/useCalculator");
var Calculator = function () {
    var _a = (0, useCalculator_1.useCalculator)(), value = _a.value, result = _a.result, chartData = _a.chartData, onChange = _a.onChange;
    return (<card_tsx_1.Card>
            <card_tsx_1.CardContent className="p-6 lg:p-10 flex flex-wrap">
                <div className="w-full lg:w-3/5">
                    <div className="grid gap-16">
                        <Fieldlnput_1.FieldInput value={value.amount} label="Loan Amount" maxNumber={100000000} onChange={onChange("amount")}/>

                         <Fieldlnput_1.FieldInput value={value.roi} label="Rate of interest (Per Annum)" maxNumber={30} step={0.1} onChange={onChange("roi")}/>

                         <Fieldlnput_1.FieldInput value={value.tenure} label="Loan Tenure" maxNumber={35} onChange={onChange("tenure")}/>
                    </div>
                    <Result_1.Result result={result}/> 
                </div>
                <div className="w-full lg:w-2/5 order-1 lg:order-2">
                    <Chart_tsx_1.Chart data={chartData}/>
                </div>
            </card_tsx_1.CardContent>
        </card_tsx_1.Card>);
};
exports.Calculator = Calculator;
