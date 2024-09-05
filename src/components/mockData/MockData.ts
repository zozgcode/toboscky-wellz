import { Account } from "@/utils/types";

export const mockAccounts: Account[] = [
  {
    account_id: "ACC001",
    holder: {
      firstName: "James",
      lastName: "Radford",
      jointNames: "",
      username: "sample1",
      password: "sample1",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 2500000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "",
      transaction_code: "",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "March 23rd 2024, 3:32:32 am",
        description: "Sinlair's Store - Trx",
        status: "Success",
        amount_usd: 452.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Justin Loci",
        status: "Success",
        amount_usd: 1152.21,
        account_no: "****7676",
      },
      {
        transaction_id: "TXN003",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Transfer",
        status: "Success",
        amount_usd: -100.0,
        account_no: "****4409",
      },
      {
        transaction_id: "TXN004",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Payment",
        status: "Success",
        amount_usd: -50.0,
        account_no: "****5093",
      },
      {
        transaction_id: "TXN005",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Online Purchase",
        status: "Success",
        amount_usd: -75.0,
        account_no: "****2334",
      },
      {
        transaction_id: "TXN006",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "ATM Withdrawal",
        status: "Success",
        amount_usd: -150.0,
        account_no: "****3213",
      },
      {
        transaction_id: "TXN007",
        dateTime: "March 20th 2024, 2:02:22 am",
        description: "Transfer",
        status: "Pending",
        amount_usd: 200.0,
        account_no: "****4434",
      },
    ],
  },
  {
    account_id: "ACC002",
    holder: {
      firstName: "Lynn & Graham",
      lastName: "",
      jointNames: "Lynn Nolan Bishop & Graham Linda",
      username: "bishoplinda",
      password: "honesty21",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 3700000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg: "WTC - WIRE TRANSFER CODE",
      transaction_code: "29372326437846234234234523463",
      wireDate: true,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "June 30 2023, 3:32:32 am",
        description: "WIRE TRANSFER",
        status: "Success",
        amount_usd: 580000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "April 15 2023, 1:04:02 pm",
        description: "Partnership Funding",
        status: "Success",
        amount_usd: 250000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN003",
        dateTime: "February 8 2023, 10:11:22 am",
        description: "Refund",
        status: "Success",
        amount_usd: 650000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN004",
        dateTime: "December 2 2022, 7:08:32 am",
        description: "Insurance Claim",
        status: "Success",
        amount_usd: 175000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN005",
        dateTime: "March 23 2022, 7:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 965000.0,
        account_no: "****5009",
      },
    ],
  },
  {
    account_id: "ACC003",
    holder: {
      firstName: "Shannon Anthony",
      lastName: "James",
      jointNames: "",
      username: "shannon_anth15",
      password: "jam0!21",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 5100000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg:
        "Please enter the code sent to you, to continue this transaction.",
      transaction_code: "29372326437846234234234523463",
      wireDate: false,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "June 30 2016, 3:32:32 am",
        description: "WIRE TRANSFER",
        status: "Success",
        amount_usd: 580000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN002",
        dateTime: "April 15 2016, 1:04:02 pm",
        description: "Partnership Funding",
        status: "Success",
        amount_usd: 250000.0,
        account_no: "****2930",
      },
      {
        transaction_id: "TXN003",
        dateTime: "February 8 2016, 10:11:22 am",
        description: "Refund",
        status: "Success",
        amount_usd: 650000.0,
        account_no: "****3839",
      },
      {
        transaction_id: "TXN004",
        dateTime: "December 2 2015, 7:08:32 am",
        description: "Insurance Claim",
        status: "Success",
        amount_usd: 175000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN005",
        dateTime: "March 23 2015, 7:15:02 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 965000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "344734",
        dateTime: "November 15, 2008, 7:20:15 am",
        description: "Project Completion Bonus",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "343r4",
        dateTime: "March 12, 2008, 10:45:00 am",
        description: "Client Payment",
        status: "Success",
        amount_usd: 45000.0,
        account_no: "****5013",
      },
      {
        transaction_id: "TXN0232",
        dateTime: "April 16, 2007, 2:45:15 pm",
        description: "Client Payment",
        status: "Success",
        amount_usd: 40000.0,
        account_no: "****5007",
      },
      {
        transaction_id: "TXN02324",
        dateTime: "March 24, 2007, 1:10:30 pm",
        description: "Freelance Contract",
        status: "Success",
        amount_usd: 17000.0,
        account_no: "****5008",
      },
      {
        transaction_id: "TXN00323",
        dateTime: "December 14, 2006, 10:15:45 am",
        description: "Client Payment",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****5001",
      },
      {
        transaction_id: "TXN0022",
        dateTime: "June 23, 2006, 1:30:00 pm",
        description: "Project Milestone Payment",
        status: "Success",
        amount_usd: 25000.0,
        account_no: "****5002",
      },
      {
        transaction_id: "TXN003234",
        dateTime: "April 8, 2006, 9:10:15 am",
        description: "Refund",
        status: "Success",
        amount_usd: 10000.0,
        account_no: "****5003",
      },
      {
        transaction_id: "TXN00423",
        dateTime: "January 19, 2006, 3:45:30 pm",
        description: "Service Revenue",
        status: "Success",
        amount_usd: 35000.0,
        account_no: "****5004",
      },
    ],
  },
  {
    account_id: "ACC004",
    holder: {
      firstName: "J. David Thompson Estate",
      lastName: "",
      jointNames: "",
      username: "DaviesJT007",
      password: "AliceThompson199$",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 1000000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg:
        "Please enter the code sent to you, to continue this transaction.",
      transaction_code: "29372326437846234234234523463",
      wireDate: false,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "March 25, 2024, 9:15:00 am",
        description: "Rental Income from ABC Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****3746",
      },
      {
        transaction_id: "TXN002",
        dateTime: "February 14, 2024, 11:45:00 am",
        description: "Lease Payment from DEF Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****2478",
      },
      {
        transaction_id: "TXN003",
        dateTime: "January 5, 2024, 3:30:00 pm",
        description: "Sale Proceeds from GHI Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****3425",
      },
      {
        transaction_id: "TXN004",
        dateTime: "April 20, 2023, 2:15:00 pm",
        description: "Rental Income from JKL Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****2583",
      },
      {
        transaction_id: "TXN005",
        dateTime: "February 18, 2023, 9:50:00 am",
        description: "Lease Payment from MNO Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****9237",
      },
      {
        transaction_id: "TXN006",
        dateTime: "January 11, 2023, 1:40:00 pm",
        description: "Sale Proceeds from PQR Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****5006",
      },
      {
        transaction_id: "TXN007",
        dateTime: "May 14, 2022, 11:30:00 am",
        description: "Rental Income from STU Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****4673",
      },
      {
        transaction_id: "TXN008",
        dateTime: "March 20, 2022, 4:25:00 pm",
        description: "Lease Payment from VWX Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****2453",
      },
      {
        transaction_id: "TXN009",
        dateTime: "January 9, 2022, 9:15:00 am",
        description: "Sale Proceeds from YZA Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN010",
        dateTime: "June 22, 2021, 10:00:00 am",
        description: "Rental Income from BCD Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****3564",
      },
      {
        transaction_id: "TXN011",
        dateTime: "April 17, 2021, 3:20:00 pm",
        description: "Lease Payment from EFG Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5011",
      },
      {
        transaction_id: "TXN012",
        dateTime: "February 5, 2021, 1:55:00 pm",
        description: "Sale Proceeds from HIJ Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN013",
        dateTime: "August 20, 2020, 11:45:00 am",
        description: "Rental Income from KLM Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****2356",
      },
      {
        transaction_id: "TXN014",
        dateTime: "June 15, 2020, 10:10:00 am",
        description: "Lease Payment from NOP Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5014",
      },
      {
        transaction_id: "TXN015",
        dateTime: "April 5, 2020, 3:40:00 pm",
        description: "Sale Proceeds from QRS Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****7653",
      },
      {
        transaction_id: "TXN016",
        dateTime: "October 14, 2019, 11:25:00 am",
        description: "Rental Income from TUV Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****5016",
      },
      {
        transaction_id: "TXN017",
        dateTime: "August 22, 2019, 2:00:00 pm",
        description: "Lease Payment from WXY Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5017",
      },
      {
        transaction_id: "TXN018",
        dateTime: "June 8, 2019, 4:35:00 pm",
        description: "Sale Proceeds from ZAB Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****5018",
      },
      {
        transaction_id: "TXN019",
        dateTime: "December 12, 2018, 10:50:00 am",
        description: "Rental Income from CDE Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****5019",
      },
      {
        transaction_id: "TXN020",
        dateTime: "September 20, 2018, 3:15:00 pm",
        description: "Lease Payment from FGH Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5020",
      },
      {
        transaction_id: "TXN021",
        dateTime: "July 9, 2018, 1:30:00 pm",
        description: "Sale Proceeds from IJK Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****5021",
      },
      {
        transaction_id: "TXN022",
        dateTime: "March 18, 2017, 9:40:00 am",
        description: "Rental Income from LMN Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****5022",
      },
      {
        transaction_id: "TXN023",
        dateTime: "January 25, 2017, 11:55:00 am",
        description: "Lease Payment from OPQ Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5023",
      },
      {
        transaction_id: "TXN024",
        dateTime: "November 5, 2017, 3:20:00 pm",
        description: "Sale Proceeds from RST Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****5024",
      },
      {
        transaction_id: "TXN025",
        dateTime: "August 30, 2016, 10:05:00 am",
        description: "Rental Income from UVW Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****5025",
      },
      {
        transaction_id: "TXN026",
        dateTime: "June 18, 2016, 1:40:00 pm",
        description: "Lease Payment from XYZ Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5026",
      },
      {
        transaction_id: "TXN027",
        dateTime: "April 10, 2016, 3:35:00 pm",
        description: "Sale Proceeds from ABC Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****3276",
      },
      {
        transaction_id: "TXN028",
        dateTime: "December 21, 2015, 10:20:00 am",
        description: "Rental Income from DEF Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****5028",
      },
      {
        transaction_id: "TXN029",
        dateTime: "October 15, 2015, 12:10:00 pm",
        description: "Lease Payment from GHI Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5029",
      },
      {
        transaction_id: "TXN030",
        dateTime: "August 5, 2015, 2:30:00 pm",
        description: "Sale Proceeds from JKL Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****2523",
      },
      {
        transaction_id: "TXN031",
        dateTime: "March 22, 2014, 10:45:00 am",
        description: "Rental Income from MNO Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****5031",
      },
      {
        transaction_id: "TXN032",
        dateTime: "January 10, 2014, 1:55:00 pm",
        description: "Lease Payment from PQR Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****5032",
      },
      {
        transaction_id: "TXN033",
        dateTime: "November 8, 2014, 3:20:00 pm",
        description: "Sale Proceeds from STU Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****3252",
      },
      {
        transaction_id: "TXN034",
        dateTime: "July 14, 2013, 10:30:00 am",
        description: "Rental Income from VWX Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****1342",
      },
      {
        transaction_id: "TXN035",
        dateTime: "May 18, 2013, 1:40:00 pm",
        description: "Lease Payment from YZA Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****1334",
      },
      {
        transaction_id: "TXN036",
        dateTime: "March 12, 2013, 3:10:00 pm",
        description: "Sale Proceeds from BCD Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****7373",
      },
      {
        transaction_id: "TXN037",
        dateTime: "September 20, 2012, 9:20:00 am",
        description: "Rental Income from EFG Holdings",
        status: "Success",
        amount_usd: 15000.0,
        account_no: "****5037",
      },
      {
        transaction_id: "TXN038",
        dateTime: "July 15, 2012, 2:25:00 pm",
        description: "Lease Payment from HIJ Holdings",
        status: "Success",
        amount_usd: 18000.0,
        account_no: "****2882",
      },
      {
        transaction_id: "TXN039",
        dateTime: "May 10, 2012, 4:40:00 pm",
        description: "Sale Proceeds from KLM Holdings",
        status: "Success",
        amount_usd: 22000.0,
        account_no: "****5039",
      },
    ],
  },
  {
    account_id: "ACC005",
    holder: {
      firstName: "Angela McDanie",
      lastName: "",
      jointNames: "",
      username: "McDanielAA",
      password: "GoodGod26!37!-!1!1!",
    },
    bank_details: {
      account_type: "Checking",
      balance_usd: 375600.0,
      savings_balance_usd: 75000.0,
      investment_balance_usd: 2800000.0,
    },
    transaction_mgs_code: {
      transaction_text_msg:
        "Please enter the code sent to you, to continue this transaction.",
      transaction_code: "29372326437846234234234523463",
      wireDate: false,
    },
    transaction_history: [
      {
        transaction_id: "TXN001",
        dateTime: "August 25, 2024, 9:15:00 am",
        description: "Rental Income from ABC Holdings",
        status: "Success",
        amount_usd: 15250.0,
        account_no: "****3746",
      },
      {
        transaction_id: "TXN002",
        dateTime: "July 14, 2024, 11:45:00 am",
        description: "Lease Payment from DEF Holdings",
        status: "Success",
        amount_usd: 18300.0,
        account_no: "****2478",
      },
      {
        transaction_id: "TXN003",
        dateTime: "June 5, 2024, 3:30:00 pm",
        description: "Sale Proceeds from GHI Holdings",
        status: "Success",
        amount_usd: 22500.0,
        account_no: "****3425",
      },
      {
        transaction_id: "TXN004",
        dateTime: "May 20, 2023, 2:15:00 pm",
        description: "Rental Income from JKL Holdings",
        status: "Success",
        amount_usd: 15700.0,
        account_no: "****2583",
      },
      {
        transaction_id: "TXN005",
        dateTime: "April 18, 2023, 9:50:00 am",
        description: "Lease Payment from MNO Holdings",
        status: "Success",
        amount_usd: 18800.0,
        account_no: "****9237",
      },
      {
        transaction_id: "TXN006",
        dateTime: "March 11, 2023, 1:40:00 pm",
        description: "Sale Proceeds from PQR Holdings",
        status: "Success",
        amount_usd: 23000.0,
        account_no: "****5006",
      },
      {
        transaction_id: "TXN007",
        dateTime: "November 14, 2022, 11:30:00 am",
        description: "Rental Income from STU Holdings",
        status: "Success",
        amount_usd: 16200.0,
        account_no: "****4673",
      },
      {
        transaction_id: "TXN008",
        dateTime: "October 20, 2022, 4:25:00 pm",
        description: "Lease Payment from VWX Holdings",
        status: "Success",
        amount_usd: 19300.0,
        account_no: "****2453",
      },
      {
        transaction_id: "TXN009",
        dateTime: "September 9, 2022, 9:15:00 am",
        description: "Sale Proceeds from YZA Holdings",
        status: "Success",
        amount_usd: 23500.0,
        account_no: "****5009",
      },
      {
        transaction_id: "TXN010",
        dateTime: "August 22, 2022, 10:00:00 am",
        description: "Rental Income from BCD Holdings",
        status: "Success",
        amount_usd: 16700.0,
        account_no: "****3564",
      },
      {
        transaction_id: "TXN011",
        dateTime: "June 17, 2021, 3:20:00 pm",
        description: "Lease Payment from EFG Holdings",
        status: "Success",
        amount_usd: 19850.0,
        account_no: "****5011",
      },
      {
        transaction_id: "TXN012",
        dateTime: "May 20, 2021, 1:55:00 pm",
        description: "Sale Proceeds from HIJ Holdings",
        status: "Success",
        amount_usd: 24000.0,
        account_no: "****5012",
      },
      {
        transaction_id: "TXN013",
        dateTime: "May 5, 2022, 11:45:00 am",
        description: "Rental Income from KLM Holdings",
        status: "Success",
        amount_usd: 17250.0,
        account_no: "****2356",
      },
      {
        transaction_id: "TXN014",
        dateTime: "August 15, 2021, 10:10:00 am",
        description: "Lease Payment from NOP Holdings",
        status: "Success",
        amount_usd: 20300.0,
        account_no: "****5014",
      },
      {
        transaction_id: "TXN015",
        dateTime: "July 5, 2021, 3:40:00 pm",
        description: "Sale Proceeds from QRS Holdings",
        status: "Success",
        amount_usd: 24500.0,
        account_no: "****7653",
      },
      {
        transaction_id: "TXN016",
        dateTime: "May 14, 2021, 11:25:00 am",
        description: "Rental Income from TUV Holdings",
        status: "Success",
        amount_usd: 17800.0,
        account_no: "****5016",
      },
      {
        transaction_id: "TXN017",
        dateTime: "April 22, 2021, 2:00:00 pm",
        description: "Lease Payment from WXY Holdings",
        status: "Success",
        amount_usd: 20800.0,
        account_no: "****5017",
      },
      {
        transaction_id: "TXN018",
        dateTime: "March 8, 2021, 4:35:00 pm",
        description: "Sale Proceeds from ZAB Holdings",
        status: "Success",
        amount_usd: 25000.0,
        account_no: "****5018",
      },
      {
        transaction_id: "TXN019",
        dateTime: "January 12, 2021, 10:50:00 am",
        description: "Rental Income from CDE Holdings",
        status: "Success",
        amount_usd: 18300.0,
        account_no: "****5019",
      },
      {
        transaction_id: "TXN020",
        dateTime: "September 20, 2020, 3:15:00 pm",
        description: "Lease Payment from FGH Holdings",
        status: "Success",
        amount_usd: 21300.0,
        account_no: "****5020",
      },
      {
        transaction_id: "TXN021",
        dateTime: "July 9, 2020, 1:30:00 pm",
        description: "Sale Proceeds from IJK Holdings",
        status: "Success",
        amount_usd: 25500.0,
        account_no: "****5021",
      },
      {
        transaction_id: "TXN022",
        dateTime: "June 18, 2020, 9:40:00 am",
        description: "Rental Income from LMN Holdings",
        status: "Success",
        amount_usd: 18800.0,
        account_no: "****5022",
      },
      {
        transaction_id: "TXN023",
        dateTime: "May 25, 2020, 11:55:00 am",
        description: "Lease Payment from OPQ Holdings",
        status: "Success",
        amount_usd: 21800.0,
        account_no: "****5023",
      },
      {
        transaction_id: "TXN024",
        dateTime: "April 5, 2020, 3:20:00 pm",
        description: "Sale Proceeds from RST Holdings",
        status: "Success",
        amount_usd: 26000.0,
        account_no: "****5024",
      },
      {
        transaction_id: "TXN025",
        dateTime: "March 30, 2020, 10:05:00 am",
        description: "Rental Income from UVW Holdings",
        status: "Success",
        amount_usd: 19300.0,
        account_no: "****5025",
      },
    ],
  },
];
