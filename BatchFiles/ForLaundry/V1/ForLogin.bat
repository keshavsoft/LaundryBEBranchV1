@echo off
cd ..\FrontEndForUsers
git pull

call npm run Users

xcopy .\publicDir\LoginUsers ..\LaundryBEBranchV1\public\LoginUsers /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV1