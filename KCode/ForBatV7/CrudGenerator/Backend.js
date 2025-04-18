import { StartFunc as StartFuncPrepareReadColumnsData } from "./PrepareTablesSchema/ReadColumnsData.js";
import { StartFunc as ForBackendV5 } from './ForBackendV5/EntryFile.js';

let CommonFrom = "srcV8";
  
let StartFunc = ({ inFilesArray, inEndPointsNeeded }) => {
    let LocalFilesArray = inFilesArray;
    let LocalEndPointsNeeded = inEndPointsNeeded;

    StartFuncPrepareReadColumnsData({ inTableData: LocalFilesArray });

    LocalFuncForBackEndv5({
        inFilesArray: LocalFilesArray,
        inEndPointsNeeded: LocalEndPointsNeeded
    });
};

let LocalFuncForBackEndv5 = ({ inFilesArray, inEndPointsNeeded }) => {
    let LocalEndPointsNeeded = inEndPointsNeeded;
    let LocalFilesArray = inFilesArray;
    let CommonTo = "binV4";

    ForBackendV5({
        inTablesCollection: LocalFilesArray,
        inFrom: CommonFrom,
        inTo: CommonTo,
        inEndPointsNeeded: LocalEndPointsNeeded
    });

    console.log(`Generated the endpoints in backend : ${CommonTo}`);
};

export { StartFunc };
