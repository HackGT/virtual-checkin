import { JoinProps } from "bluejeans-webrtc-embed-sdk";
import EmbedSDKManager from "./EmbedSDKManager";
export declare enum AppState {
    PRE_MEETING = "PreMeeting",
    IN_MEETING = "InMeeting"
}
export default class AppManager {
    private embedSDKManager;
    joinProps: JoinProps;
    isJoiningMeeting: boolean;
    constructor(embedSDKManager: EmbedSDKManager);
    get appState(): AppState;
    setJoiningMeeting(joining: boolean): void;
    setJoinProps(joinProps: JoinProps): void;
}
