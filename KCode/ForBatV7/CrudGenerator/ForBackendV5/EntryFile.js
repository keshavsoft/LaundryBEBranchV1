import { StartFunc as StartFuncForRoutesFile } from './ForRoutesFile/EntryFile.js';
import { StartFunc as StartFuncForConfigJson } from './ForConfigJson/EntryFile.js';
import { StartFunc as StartFuncForTableName } from './ForTableName/EntryFile.js';

import fs from "fs-extra";

let StartFunc = async ({ inTablesCollection, inFrom, inTo, inEndPointsNeeded }) => {
    let LocalEndPointsNeeded = inEndPointsNeeded;
    let LocalTo = inTo;
    let LocalTablesCollection = inTablesCollection;

    if ("children" in LocalTablesCollection === false) {
        return;
    };

    LocalFuncCreateFolders({ inTo });

    StartFuncForRoutesFile({
        inTablesCollection, inFrom, inTo,
        inEndPointsNeeded: LocalEndPointsNeeded
    });

    await StartFuncForConfigJson({ inTablesCollection, inFrom, inTo });

    StartFuncForTableName({
        inTablesCollection, inFrom, inTo
    });
};

let LocalFuncCreateFolders = ({ inTo }) => {
    let LocalTo = inTo;

    if (fs.existsSync(LocalTo) === false) {
        fs.mkdirSync(LocalTo);
    };
};

export { StartFunc };