@echo off
cd ..\FrontEndCustomers
git pull

rmdir /s /q .\publicDir\*

call gulp build:publicDir

xcopy .\publicDir ..\LaundryBEBranchV1\public\Laundry\V1\VoltUI\Masters /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV1