import { computed } from "mobx";
import Managers from "../stores/Managers";
import AppManager, { AppState } from "../stores/AppManager";

export default class AppViewModel {

    private appManager : AppManager;

    constructor(managers : Managers) {
        this.appManager = managers.appManager;
    }

    @computed get appState() : AppState {
        return this.appManager.appState
    }

    @computed get joiningStarted () : boolean {
        return this.appManager.isJoiningMeeting
    }

    @computed get showMeetingIframe () : boolean {
        return this.joiningStarted || !!this.appManager.joinProps;
    }
}