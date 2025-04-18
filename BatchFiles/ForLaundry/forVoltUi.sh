mkdir public/Volt

cd ../VoltUI
git pull

gulp build:publicDir

cp -r  ./publicDir/* ../LaundryBEBranchV1/public/Volt

cd ../LaundryBEBranchV1