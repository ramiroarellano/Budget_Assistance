console.log("Hello, My Friends!");
let startUpName = "Nummo Foundation"; 
let initialCapital= 10000;
let monthlyRevenue= 4500;
let monthlyExpenses= 3000;

let netCashFlow= monthlyRevenue - monthlyExpenses;
let currentBalance= initialCapital + netCashFlow;
let profitability=netCashFlow > 0;

console.log('Startup Name:', startUpName);
console.log('Net monthly cash flow:', netCashFlow);
console.log('Current Balance:', currentBalance);
console.log('Is the startup profitable?:', profitability ? 'TRUE' : 'FLASE');
