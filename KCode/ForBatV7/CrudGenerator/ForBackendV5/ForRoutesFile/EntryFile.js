import { StartFunc as StartFuncFoldersOnly } from './FoldersOnly.js';

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
    let LocalTablesCollection = inTablesCollection;

    let LocalFrom = inFrom;
    let LocalTo = inTo;

    StartFuncFoldersOnly({
        inTablesCollection: LocalTablesCollection,
        inFrom: LocalFrom,
        inTo: LocalTo
    });
};

export { StartFunc };