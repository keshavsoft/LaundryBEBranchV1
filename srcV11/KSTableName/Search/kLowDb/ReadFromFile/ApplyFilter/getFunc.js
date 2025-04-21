import { StartFunc as StartFuncPullData } from "../../../../CommonPull/kLowDb/PullData/returnAsArray.js";
import _ from "lodash";

let StartFunc = ({ inFilterObject }) => {
  let LocalFilterObject = inFilterObject;

  let LocalReturnData = { KTF: false };

  const LocalData = StartFuncPullData();

  LocalReturnData.KTF = true;
  LocalReturnData.JsonData = _.filter(LocalData, LocalFilterObject);

  return LocalReturnData;
};

export { StartFunc };
