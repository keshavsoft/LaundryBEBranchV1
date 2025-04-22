import { StartFunc as StartFuncCommonFuncs } from '../CommonFuncs/Transactions.js';
import { StartFunc as StartFuncQrCodes } from '../../../../../../../../binV4/QrCodes/CommonPull/kLowDb/PullData/returnAsArray.js';

let StartFunc = ({ inBranch }) => {
    let LocalFindValue = new Date().toLocaleDateString('en-GB').replace(/\//g, '/');
    const modifiedBranch = inBranch.replace("BranOrders", "");

    let LocalBranchName = inBranch;
    let LocalReturnData = { KTF: false }
    const Qrdb = StartFuncQrCodes();
    const Orderdb = StartFuncCommonFuncs({ inBranchName: LocalBranchName });
    Orderdb.read();

    let LocalFilterBranchData = Orderdb.data.filter(e => {
        return new Date(e.OrderData.Currentdateandtime).toLocaleDateString('en-GB') == LocalFindValue;
    });

    if (LocalFilterBranchData.length === 0) {
        LocalReturnData.KReason = "No Data"
        return LocalReturnData;
    };
    let LocalInsertAggValues = jFLocalInsertQrCodeData({ 
        inBranchName: modifiedBranch, 
        inOrderData: LocalFilterBranchData, 
        inQrCodeData: Qrdb 
    });
    LocalReturnData.KTF = true;
    LocalReturnData.JsonData = LocalFilterBranchData.slice().reverse();

    return LocalReturnData;
};

let jFLocalInsertQrCodeData = ({ inBranchName, inOrderData, inQrCodeData }) => {
    let LocalBranchName = inBranchName;
    let jVarLocalReturnArray = [];

    inOrderData.forEach(element => {
        element.IsQrCodesRaised = false;
        element.TotalItems = 0;
        
        if (Array.isArray(inQrCodeData)) {
            let FilterCheck = inQrCodeData.filter(ele => 
                ele.OrderNumber == element.pk && ele.BookingData.OrderData.BranchName == LocalBranchName
            );
            if (FilterCheck.length > 0) {
                element.TotalItems = FilterCheck.length;
                element.IsQrCodesRaised = true;
            }
        }
        jVarLocalReturnArray.push(element);
    });

    return jVarLocalReturnArray;
};

export { StartFunc };
