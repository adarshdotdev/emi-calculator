"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FieldInput = void 0;
var input_tsx_1 = require("@/components/ui/input.tsx");
var slider_tsx_1 = require("@/components/ui/slider.tsx");
var FieldInput = function (_a) {
    var label = _a.label, maxNumber = _a.maxNumber, value = _a.value, _b = _a.step, step = _b === void 0 ? 1 : _b, onChange = _a.onChange;
    var handleInputChange = function (event) {
        var value = event.target.value;
        onChange(value ? parseInt(value, 10) : 0);
    };
    var handleSliderChange = function (value) {
        onChange(value[0]);
    };
    return (<div>
      <div className="flex flex-wrap items-center justify-between mb-5">
        <p>{label}</p>
        <input_tsx_1.Input type="number" className="w-80" value={value} onChange={handleInputChange}/>
      </div>
      <slider_tsx_1.Slider value={[value]} max={maxNumber} step={step} min={0} onValueChange={handleSliderChange}/>
    </div>);
};
exports.FieldInput = FieldInput;
