@echo off
cd ..\LaundryFEBranchV1
git pull

call npm run Today-Orders
call npm run Today-QrCodesK
call npm run NewOrders
call npm run CustomersToOrders
call npm run Masters
call npm run BranchToday
call npm run AllDays
call npm run TodayReports
call npm run Dashboard-QrCodeWise-AsArray
call npm run Branch-CommonConfig-Menu
call npm run Dashboard-CommonConfig-AsArray
call npm run Dashboard-QrCodeAtStage-BranchFilter
call npm run Orders
call npm run Payments
call npm run QrCodes
call npm run All-Dcs

xcopy .\publicDir ..\LaundryBEBranchV1\public\Laundry\Branch /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV1