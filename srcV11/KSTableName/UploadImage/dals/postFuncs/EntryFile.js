import { StartFunc as StartFuncWriteTofile } from '../../kLowDb/WriteTofile/WithChecking/StartFunc.js';
import { StartFunc as SendMail } from '../../kLowDb/SendMail/EntryFile.js';

import ConfigJson from '../../../../Config.json' assert {type: 'json'};
import tableNameJson from '../../../tableName.json' assert {type: 'json'};

import fs from "fs";
import path from 'path';

let PostImageAndMailFunc = async ({ inDomainName, inDataToInsert, inpk, inImageName }) => {
    let LocalFromSave = StartFuncWriteTofile({ inDataToInsert });

    if (LocalFromSave.KTF === false) {
        return LocalFromSave;
    };

    let LocalTableFolder = path.parse(tableNameJson.tableName).name;
    let LocalExtension = path.parse(inImageName).ext;

    fs.renameSync(`${ConfigJson.JsonPath}/${LocalTableFolder}/${inImageName}`, `${ConfigJson.JsonPath}/${LocalTableFolder}/${LocalFromSave.pk}${LocalExtension}`);

    const LocalFromSendMail = await SendMail({
        inDomainName,
        inDataToInsert, inpk: LocalFromSave.pk
    });

    return await LocalFromSendMail;
};

export {
    PostImageAndMailFunc
};
