@echo off
cd ..\VoltUI
git pull

rmdir /s /q .\publicDir\*

call gulp build:publicDir

xcopy .\publicDir ..\LaundryBEBranchV1\public\Volt /h /i /c /k /e /r /y

cd ..\LaundryBEBranchV1