@echo off
cd ..\LaundryUI
git pull

call npm run Customers
call npm run Detailed-Masters

xcopy .\publicDir ..\LaundryBEBranchV1\public\Laundry\Admin /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV1