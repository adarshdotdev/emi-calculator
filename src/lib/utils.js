"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCurrency = void 0;
exports.cn = cn;
exports.calculateLoanDetails = calculateLoanDetails;
var clsx_1 = require("clsx");
var tailwind_merge_1 = require("tailwind-merge");
function cn() {
    var inputs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
    }
    return (0, tailwind_merge_1.twMerge)((0, clsx_1.clsx)(inputs));
}
function calculateLoanDetails(_a) {
    var amount = _a.amount, roi = _a.roi, tenure = _a.tenure;
    // Step 1: Calculate Monthly Interest Rate
    var monthlyRate = roi / 12 / 100;
    // Step 2: Calculate Loan Tenure in Months
    var tenureMonths = tenure * 12;
    // Step 3: Calculate EMI using the formula
    var emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
        (Math.pow(1 + monthlyRate, tenureMonths) - 1);
    // Step 4: Calculate Total Payment (EMI * number of months)
    var totalAmount = emi * tenureMonths;
    // Step 5: Calculate Total Interest (Total Amount - Principal)
    var totalInterest = totalAmount - amount;
    // Step 6: Return details
    return {
        monthlyEMI: emi.toFixed(2), // Monthly EMI
        totalPrincipal: amount.toFixed(2), // Total Principal Amount
        totalInterest: totalInterest.toFixed(2), // Total Interest Payable
        totalAmount: totalAmount.toFixed(2), // Total Amount Payable (Principal + Interest)
    };
}
var formatCurrency = function (amount) {
    return new Intl.NumberFormat("en-IN", {
        currencySign: "standard",
        currency: "INR",
    }).format(parseInt(amount, 10));
};
exports.formatCurrency = formatCurrency;
