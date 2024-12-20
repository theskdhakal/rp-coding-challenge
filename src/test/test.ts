import { calculateExpenses, calculateNetProfitMargin, calculateRevenue } from "../helper/functions";


const mockData={

    object_category: "someCategory",
    connection_id: "someConnectionId",
    user: "someUser",
    object_creation_date: "2024-12-06",
    data: [
      {
        account_category: "revenue",
        account_code: "123",
        account_currency: "USD",
        account_identifier: "id123",
        account_status: "active",
        value_type: "total",
        account_name: "Revenue Account 1",
        account_type: "income",
        account_type_bank: "someBank",
        system_account: "system1",
        total_value: 1000
      },
      {
        account_category: "expense",
        account_code: "456",
        account_currency: "USD",
        account_identifier: "id456",
        account_status: "active",
        value_type: "total",
        account_name: "Expense Account 1",
        account_type: "cost",
        account_type_bank: "someBank",
        system_account: "system2",
        total_value: 500
      },
      {
        account_category: "revenue",
        account_code: "789",
        account_currency: "USD",
        account_identifier: "id789",
        account_status: "active",
        value_type: "total",
        account_name: "Revenue Account 2",
        account_type: "income",
        account_type_bank: "someBank",
        system_account: "system3",
        total_value: 2000
      }
    ]
  
  }

// mock the data import
jest.mock("../../data.json", () => mockData);

// +++++++++++++++++++++++++++++++ calcuting revenue function test ++++++++++++++++++++++++++++++++++

describe("Revenue Calculation", () => {
    
  it("should calculate the sum of all revenue correctly", () => {
    const totalRevenue = calculateRevenue(mockData);


    expect(totalRevenue).toBe(3000); // Expected revenue: 100 + 200 = 300
  });
});


// +++++++++++++++++++++++++++++++ calcuting expenses function test ++++++++++++++++++++++++++++++++++

describe("Expense Calculation", () => {
    
  it("should calculate the sum of all expenses correctly", () => {
    const totalExpense = calculateExpenses(mockData);


    expect(totalExpense).toBe(500); // Expected revenue: 100 + 200 = 300
  });
});

// +++++++++++++++++++++++++++++++ calcuting net profit margin function test ++++++++++++++++++++++++++++++++++

describe("net profit margin Calculation", () => {
    
  it("should calculate net profit margin correctly", () => {
    const netProfitMargin = calculateNetProfitMargin(mockData);

  
    expect(netProfitMargin).toBeCloseTo(0.833,3); // Expected revenue: 100 + 200 = 300
  });
});

