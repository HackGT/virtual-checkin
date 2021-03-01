import EmbedSDKManager from "./EmbedSDKManager";
import AppManager from "./AppManager";

export default class Managers {

    embedSDKManager : EmbedSDKManager;
    appManager : AppManager;
    
    constructor() {
        this.embedSDKManager = new EmbedSDKManager();
        this.appManager = new AppManager(this.embedSDKManager);
        window["Debug"] = this;
    }
}