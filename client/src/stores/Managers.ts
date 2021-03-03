import EmbedSDKManager from "./EmbedSDKManager";
import AppManager from "./AppManager";

interface IManagers {    
    embedSDKManager : EmbedSDKManager;
    appManager : AppManager;

}
export default class Managers {

    embedSDKManager : EmbedSDKManager;
    appManager : AppManager;
    
    constructor(obj?:IManagers) {
        this.embedSDKManager = obj && obj.embedSDKManager || new EmbedSDKManager();
        this.appManager = obj && obj.appManager || new AppManager(this.embedSDKManager);
        window["Debug"] = this;
    }
}