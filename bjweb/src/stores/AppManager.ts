import { computed, action, observable } from "mobx";
import { JoinProps } from "bluejeans-webrtc-embed-sdk";
import EmbedSDKManager from "./EmbedSDKManager";

export enum AppState {
    PRE_MEETING = "PreMeeting",
    IN_MEETING = "InMeeting"
}

export default class AppManager {

    private embedSDKManager : EmbedSDKManager;

    @observable joinProps : JoinProps;
    @observable isJoiningMeeting : boolean

    constructor(embedSDKManager : EmbedSDKManager) {
        this.embedSDKManager = embedSDKManager;
    }

    @computed get appState() : AppState {
        if(this.embedSDKManager.connectionState) {
            return AppState.IN_MEETING;
        } else {
            return AppState.PRE_MEETING;
        }
    }

    @action setJoiningMeeting(joining : boolean) : void {
        this.isJoiningMeeting = joining;
    }

    @action.bound setJoinProps(joinProps : JoinProps) : void {
        this.joinProps = joinProps
    }
}