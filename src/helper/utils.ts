//=============================all the formatting ========================================
export function formatCurrency(value:number){
    const formattedCurrency=Math.floor(value)
    return `${formattedCurrency.toLocaleString("en-US",{style:"currency",currency:"USD"})}`
  }
  
  
 export function formatPercentage(value:number){
      return `${(value*100).toFixed(1)}%`
  }
  