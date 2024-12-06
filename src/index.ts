import data from "../data.json"

//type defining of  data
interface AccountObj{
    account_category:string;
    account_code:string;
    account_currency:string;
    account_identifier:string;
    account_status:string;
    value_type:string;
    account_name:string;
    account_type:string;
    account_type_bank:string;
    system_account:string;
    total_value:number
}

interface DataObj{
    object_category:string;
    connection_id:string;
    user:string;
    object_creation_date:string;
    data:AccountObj[]

}


const parsedData:DataObj=data as DataObj


//using the imported data, calculating the following metrics

// __________________________Revenue_______________________

export function calculateRevenue(parsedData:DataObj){
    const totalRevenue=parsedData.data
.filter(item=>item.account_category==='revenue')
.reduce((sum,item)=>sum+item.total_value,0)

console.log("total revenue is",totalRevenue)

return totalRevenue
}




