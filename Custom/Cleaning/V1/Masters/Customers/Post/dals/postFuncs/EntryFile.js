import { StartFunc as StartFuncFromSelectedColumns } from '../../kLowDb/WithChecking/StartFunc.js';

let postDefaultFunc = ({ inRequestBody }) => {
    let LocalFromLowDb = StartFuncFromSelectedColumns({ inDataToInsert: inRequestBody });

    if (LocalFromLowDb.KTF === false) {
        return false;
    };

    return LocalFromLowDb;
};

export {
    postDefaultFunc
};