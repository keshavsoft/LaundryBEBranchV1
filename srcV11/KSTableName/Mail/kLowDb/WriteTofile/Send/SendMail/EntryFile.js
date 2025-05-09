import { StartFunc as sendMailCC } from "../../../../../../../../mail/sendMailCC.js";

let StartFunc = async ({ inDomainName, inDataToInsert, inpk }) => {
    if ("Email" in inDataToInsert) {
        return await sendMailCC({
            CCEmail: inDataToInsert.Email, inDomainName,
            inDataInserted: inDataToInsert, inpk
        })
    }
};

export { StartFunc };