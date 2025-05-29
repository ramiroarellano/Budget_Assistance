console.log("Hello, My Friends!");
let startupName = "Nummo Foundation"; 
let initialcapital= 10000;
let monthlyrevenue= 4500;
let monthlyexpenses= 3000;

let NetCashFlow= monthlyrevenue - monthlyexpenses;
let CurrentBalance= initialcapital + NetCashFlow;
let profitability=NetCashFlow > 0;

console.log('Startup Name;;', startupName);
console.log('Net monthly cash flow;;', NetCashFlow);
console.log('Current Balance;;', CurrentBalance);
console.log('Is the startup profitable?;;', profitability ? 'TRUE' : 'FLASE');

