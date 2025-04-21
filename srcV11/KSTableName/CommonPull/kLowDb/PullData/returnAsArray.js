import { StartFunc as StartFuncFromReturnDbObject } from '../CommonFuncs/ReturnDbObject.js';

let StartFunc = () => {
    const dbFromDbObjectWithSchema = StartFuncFromReturnDbObject();

    const db = dbFromDbObjectWithSchema.dbObject;

    db.read();

    if ("error" in db.data) {
        return db.data;
    };

    if (Array.isArray(db.data) === false) {
        return false;
    };

    return db.data;
};

export { StartFunc };