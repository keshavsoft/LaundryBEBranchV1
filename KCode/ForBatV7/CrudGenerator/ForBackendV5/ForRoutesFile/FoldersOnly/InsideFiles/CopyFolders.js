import fs from "fs-extra";
import path from "path";
const commonFromPath = "KSTableName";

let StartFunc = ({ inTablesCollection, inTo, inFrom }) => {
    let LocalTo = inTo;
    let LocalFrom = inFrom;

    let LocalTablesCollection = inTablesCollection;

    let LocalFirstLevelFolders = LocalTablesCollection.children.filter(element => {
        return "children" in element === false;
    });

    LocalFirstLevelFolders.forEach(LoopSecond => {
        const LoopInsidePath = `${LocalFrom}/${commonFromPath}`;

        let filenames = fs.readdirSync(LoopInsidePath, { withFileTypes: true });

        filenames.forEach(entry => {
            if (entry.isDirectory()) {
                if (entry.name === "CommonPull") {
                    fs.cpSync(`${LocalFrom}/${commonFromPath}/${entry.name}`, `${LocalTo}/${path.parse(LoopSecond.name).name}/${entry.name}`, {
                        recursive: true,
                    });
                };
            };
        });
    });
};

export { StartFunc };
