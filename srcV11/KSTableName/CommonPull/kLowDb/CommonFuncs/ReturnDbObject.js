import { LowSync } from 'lowdb';
import path from 'path';
import { JSONFileSync } from 'lowdb/node'
import Configjson from '../../../../Config.json' assert { type: 'json' };
import tableNameJson from '../../../tableName.json' assert { type: 'json' };
import { StartFunc as StartFuncFromCommonExpose } from "../../../../../CommonExpose/returnRootDir.js";

let StartFunc = () => {
    let LocalReturnData = { KTF: false, JSONFolderPath: "", CreatedLog: {} };

    LocalReturnData.KTF = false;

    LocalReturnData.UserDataFilePath = `${Configjson.jsonConfig.DataPath}/${Configjson.jsonConfig.DataPk}/${tableNameJson.tableName}`;
    const LocalRootPath = StartFuncFromCommonExpose();

    const defaultData = { error: "From KLowDb" }

    const db = new LowSync(new JSONFileSync(path.join(LocalRootPath, LocalReturnData.UserDataFilePath)), defaultData);

    return {
        dbObject: db
    };
};

export { StartFunc };
