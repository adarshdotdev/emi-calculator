"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chart = void 0;
var recharts_1 = require("recharts");
var chart_1 = require("@/components/ui/chart");
var chartConfig = {
    principal: {
        label: "Principal",
        color: "hsl(220, 90%, 55%)", // Blue - Represents investment
    },
    interest: {
        label: "Interest",
        color: "hsl(0, 75%, 50%)", // Red - Represents interest (expense)
    },
};
var Chart = function (_a) {
    var data = _a.data;
    return (<chart_1.ChartContainer config={chartConfig} className="mx-auto aspect-square min-h-[250px]">
      <recharts_1.PieChart height={250} width={250}>
        <chart_1.ChartTooltip cursor={false} content={<chart_1.ChartTooltipContent hideLabel/>}/>
        <recharts_1.Pie data={data} dataKey="value" nameKey="name" innerRadius={100} strokeWidth={5}/>
        <chart_1.ChartLegend content={<chart_1.ChartLegendContent nameKey="name"/>} className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"/>
      </recharts_1.PieChart>
    </chart_1.ChartContainer>);
};
exports.Chart = Chart;
