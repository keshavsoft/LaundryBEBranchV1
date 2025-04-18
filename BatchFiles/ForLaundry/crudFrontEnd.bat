@echo off
cd ..\crudFrontEnd

call npm run Dashboard

xcopy .\publicDir\AllTables ..\LaundryBEBranchV1\public\crudFrontEnd\AllTables /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV1