// ___________________________Function to calculate Revenue______________________________________

import { DataObj } from "..";

export function calculateRevenue(parsedData: DataObj): number {
    const totalRevenue = parsedData.data
      .filter(item => item.account_category === 'revenue')
      .reduce((sum, item) => sum + item.total_value, 0);
  
    return totalRevenue;
  }
  
  
  // ___________________________Function to calculate Expenses_______________________________________
  
  export function calculateExpenses(parsedData: DataObj): number {
    const totalExpense = parsedData.data
      .filter(item => item.account_category === 'expense')
      .reduce((sum, item) => sum + item.total_value, 0);
  
    return totalExpense;
  }
  
  
  // ___________________________Function to calculate Gross Profit Margin_______________________________________
  export function calculateGrossProfitMargin(parsedData: DataObj): number {
    const totalSales = parsedData.data
      .filter(item => item.account_type === 'sales' && item.value_type === 'debit')
      .reduce((sum, item) => sum + item.total_value, 0);
  
    const grossProfitMargin = totalSales / calculateRevenue(parsedData);
  
    return grossProfitMargin;
  }
  
  // ___________________________Function to calculate Net Profit Margin_______________________________________
  
  export function calculateNetProfitMargin(parsedData: DataObj): number {
    const totalExpenses = calculateExpenses(parsedData);
    const totalRevenue = calculateRevenue(parsedData);
  
    const netProfitMargin = (totalRevenue - totalExpenses) / totalRevenue;
  
    return netProfitMargin;
  }
  
  // ___________________________Function to calculate Working Capital Ratio _______________________________________
  
  export function calculateWorkingCapitalRatio(parsedData: DataObj): number {
      //  current assets
      const currentAssets = parsedData.data.filter(item => {
        return (
          item.account_category === 'asset' &&
          item.value_type === 'debit' &&
          (item.account_type === 'current' ||
            item.account_type === 'bank' ||
            item.account_type === 'current_accounts_receivable')
        );
      }).reduce((sum, item) => sum + item.total_value, 0);
    
      // current liabilities
      const currentLiabilities = parsedData.data.filter(item => {
        return (
          item.account_category === 'liability' &&
          item.value_type === 'credit' &&
          (item.account_type === 'current' ||
            item.account_type === 'current_accounts_payable')
        );
      }).reduce((sum, item) => sum + item.total_value, 0);
    
      // working capital ratio
      const workingCapitalRatio = currentAssets / currentLiabilities;
    
      return workingCapitalRatio;
    }
  
  