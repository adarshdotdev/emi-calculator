"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Calculator_1 = require("./components/Calculator");
function App() {
    return (<>
       
       <div className='w-full p-10 h-screen'>
        <h1 className='text-4xl md:text-5xl font-extrabold text-center mb-8 text-gray-800'>
          Loan EMI Calculator
        </h1>
        <Calculator_1.Calculator />
        
       </div>
    </>);
}
exports.default = App;
