import { LowSync } from 'lowdb'
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../../../../../binV4/Config.json' assert { type: 'json' };

let StartFunc = ({ inTable }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${inTable}.json`;

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(LocalReturnData.UserDataFilePath), defaultData);

    return {
        dbObject: db,
        TableSchema: LocalFuncForTableSchema({ inTable })
    };
};

let LocalFuncForTableSchema = ({ inTable }) => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    let LocalSecondNeeded = Configjson.jsonConfig.tableAndColumns.children.find(element => {
        return "children" in element === false && element.name === `${inTable}.json`;
    });

    return LocalSecondNeeded;
};

export { StartFunc };
