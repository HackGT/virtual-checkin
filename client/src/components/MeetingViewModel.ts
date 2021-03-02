import { action, computed } from "mobx";
import Managers from "../stores/Managers";
import AppManager from "../stores/AppManager";
import EmbedSDKManager from "../stores/EmbedSDKManager";

export default class MeetingViewModel {

    private appManager : AppManager;
    private embedSDKManager : EmbedSDKManager;

    constructor(managers : Managers) {
        this.appManager = managers.appManager;
        this.embedSDKManager = managers.embedSDKManager;
    }

    @computed get joinName() : string {
        return (this.embedSDKManager.selfParticipant && this.embedSDKManager.selfParticipant.name) ? this.embedSDKManager.selfParticipant.name : "EmbedGuest";
    }

    @computed get participantsCount() : number {
        return this.embedSDKManager.participants ? this.embedSDKManager.participants.length : 1;
    }

    @computed get meetingStatus() : string {
        let meetingStatus : string = ""
        switch(this.embedSDKManager.connectionState) {
            case "Connecting":
                meetingStatus = "Connecting to Meeting";
                break;
            case "Connected":
                meetingStatus = "Connected to Meeting";
                break;
            case "Reconnecting":
                meetingStatus = "Reconnecting to Meeting";
                break;
            case "Disconnected":
                meetingStatus = "Disconnected from Meeting";
                break;
        }
        return meetingStatus;
    }

    @computed get contentStatus() : string {
        return this.embedSDKManager.sharingScreen ? "Content sharing" : this.embedSDKManager.receivingScreenShare ? "Receiving" : "Not Receiving"
    }

    @computed get audioStatus() : string {
        return this.embedSDKManager.audioMuted ? "UnMute Audio" : "Mute Audio"
    }

    @computed get videoStatus() : string {
        return this.embedSDKManager.videoMuted ? "UnMute Video" : "Mute Video"
    }

    @computed get sharingStatus() : string {
        return this.embedSDKManager.sharingScreen ? "Stop sharing" : "Start sharing"
    }

    @computed get callControlInfo() : string {
        return this.isDisconnected ? "ReJoin Meeting" : "Leave Meeting"
    }

    @computed private get isDisconnected() : boolean {
        return (this.embedSDKManager.connectionState === "Disconnected");
    }

    @action.bound setJoinName(event) : void {
        let joinName = event.target.value;
        if(joinName) {
            this.embedSDKManager.setName(joinName);
        }
    }

    @action.bound toggleVideoState() : void {
        this.embedSDKManager.setVideoMuted()
    }

    @action.bound toggleAudioState() : void {
        this.embedSDKManager.setAudioMuted()
    }

    @action.bound toggleScreenShare() : void {
        if(this.embedSDKManager.sharingScreen) {
            this.embedSDKManager.stopScreenShare();
        } else {
            this.embedSDKManager.startScreenShare();
        }
    }

    @action.bound leaveMeeting() : void {
        if(this.isDisconnected) {
            let joinProps = this.appManager.joinProps;
            let iframeSelectorId = joinProps.iFrameProps.selectorId;
            document.querySelector(iframeSelectorId).removeChild(document.querySelector(iframeSelectorId).childNodes[0])
            this.embedSDKManager.joinMeeting(this.appManager.joinProps)
        } else {
            this.embedSDKManager.leave()
        }
    }
}