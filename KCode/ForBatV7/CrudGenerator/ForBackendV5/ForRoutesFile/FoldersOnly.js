import { StartFunc as StartFuncCopyFolders } from './FoldersOnly/InsideFiles/CopyFolders.js';

let StartFunc = ({ inTablesCollection, inFrom, inTo }) => {
   StartFuncCopyFolders({ inTablesCollection, inFrom, inTo });
};

export { StartFunc };
