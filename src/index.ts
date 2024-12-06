import data from "../data.json"
import { calculateExpenses, calculateGrossProfitMargin, calculateNetProfitMargin, calculateRevenue, calculateWorkingCapitalRatio } from "./helper/functions";
import { formatCurrency, formatPercentage } from "./helper/utils";

// Type definitions for data structures
export interface AccountObj {
  account_category: string;
  account_code: string;
  account_currency: string;
  account_identifier: string;
  account_status: string;
  value_type: string;
  account_name: string;
  account_type: string;
  account_type_bank: string;
  system_account: string;
  total_value: number;
}

export interface DataObj {
  object_category: string;
  connection_id: string;
  user: string;
  object_creation_date: string;
  data: AccountObj[];
}

export const parsedData: DataObj = data as DataObj;


// ++++++++++++++++++++++++++++++++++ calling all the functions and storing results++++++++++++++++++++++++++++++++++++++++++++++
const totalRevenue = calculateRevenue(parsedData);
const totalExpenses = calculateExpenses(parsedData);
const grossProfitMargin = calculateGrossProfitMargin(parsedData);
const netProfitMargin = calculateNetProfitMargin(parsedData);
const workingCapitalRatio = calculateWorkingCapitalRatio(parsedData);



// ++++++++++++++++++++++++++++++++++++printing formatted results++++++++++++++++++++++++++++++++++++++++++++++++

console.log(`Total Revenue: ${formatCurrency(totalRevenue)}`);
console.log(`Total Expenses: ${formatCurrency(totalExpenses)}`);
console.log(`Gross Profit Margin: ${formatPercentage(grossProfitMargin)}`);
console.log(`Net Profit Margin: ${formatPercentage(netProfitMargin)}`);
console.log(`Working Capital Ratio: ${formatPercentage(workingCapitalRatio)}`);


