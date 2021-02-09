import Managers from "../stores/Managers";
import { AppState } from "../stores/AppManager";
export default class AppViewModel {
    private appManager;
    constructor(managers: Managers);
    get appState(): AppState;
    get joiningStarted(): boolean;
    get showMeetingIframe(): boolean;
}
