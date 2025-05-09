import { StartFunc as StartFuncReturnDbObjectWithSchema } from '../../../../../../../../../binV4/MastersCustomers/CommonPull/kLowDb/CommonFuncs/ReturnDbObjectWithSchema.js';

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    const dbFromDbObjectWithSchema = StartFuncReturnDbObjectWithSchema();

    const db = dbFromDbObjectWithSchema.dbObject;

    db.read();

    if ("error" in db.data) {
        LocalReturnData.KReason = db.data;
        return LocalReturnData;
    };

    if (Array.isArray(db.data) === false) {
        LocalReturnData.KReason = "Not array inside Json file...";

        return LocalReturnData;
    };

    LocalReturnData.KTF = true;
    LocalReturnData.inDb = db
    LocalReturnData.inTableSchema = dbFromDbObjectWithSchema.TableSchema

    return LocalReturnData;
};

export { StartFunc };