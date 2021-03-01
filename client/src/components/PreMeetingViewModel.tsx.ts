import { observable, action } from "mobx";
import { JoinProps, MeetingInfo, UIProps, IFrameProps } from "bluejeans-webrtc-embed-sdk"
import Managers from "../stores/Managers";
import EmbedSDKManager from "../stores/EmbedSDKManager";
import AppManager from "../stores/AppManager";

export default class PreMeetingViewModel {

    private embedSDKManager : EmbedSDKManager;
    private appManager : AppManager;
    @observable meetingID : string = "";
    @observable passcode : string = "";
    @observable joinName : string = "";
    @observable disableFullScreenToggle : boolean = false;
    @observable hideMeetingFooter : boolean = false;
    @observable hideChatPanel : boolean = false;
    @observable hideAppsPanel : boolean = false;
    @observable lockMeetingControls : boolean = false;
    @observable hideCopyLink : boolean = false;
    @observable hideRatingScreen : boolean = false;
    @observable disableAppPitches : boolean = false;
    @observable backgroundColor : string = "";
    @observable meetingContainerWidth : string = "";
    @observable meetingContainerHeight : string = "";
    @observable meetingContainerRef : string = ".iframeHolder";

    constructor(managers : Managers) {
        this.embedSDKManager = managers.embedSDKManager;
        this.appManager = managers.appManager;
    }

    @action.bound setMeetingId(event) : void {
        this.meetingID = event.target.value;
    }

    @action.bound setPasscode(event) : void {
        this.passcode = event.target.value;
    }

    @action.bound setJoinName(event) : void {
        this.joinName = event.target.value;
    }

    @action.bound setFullScreenToggle(event) : void {
        this.disableFullScreenToggle = event.target.checked;
    }

    @action.bound setFooterVisibility(event) : void {
        this.hideMeetingFooter = event.target.checked;
    }

    @action.bound setChatPanelVisibility(event) : void {
        this.hideChatPanel = event.target.checked;
    }

    @action.bound setAppsPanelVisibility(event) : void {
        this.hideAppsPanel = event.target.checked;
    }

    @action.bound setMeetingControlLockState(event) : void {
        this.lockMeetingControls = event.target.checked;
    }

    @action.bound setCopyLinkVisibility(event) : void {
        this.hideCopyLink = event.target.checked;
    }

    @action.bound setRatingScreenVisibility(event) : void {
        this.hideRatingScreen = event.target.checked;
    }

    @action.bound setDisableAppPitch(event) : void {
        this.disableAppPitches = event.target.checked;
    }

    @action.bound setBackgroundColor(event) : void {
        this.backgroundColor = event.target.value;
    }

    @action.bound setMeetingContainerWidth(event) : void {
        this.meetingContainerWidth = event.target.value
    }

    @action.bound setMeetingContainerHeight(event) : void {
        this.meetingContainerHeight = event.target.value
    }

    @action.bound setMeetingContainerRef(event) : void {
        this.meetingContainerRef = event.target.value
    }

    @action.bound joinMeeting() : void {
        this.appManager.setJoiningMeeting(true);
        this.appManager.setJoinProps(this.joinprops);
        this.embedSDKManager.joinMeeting(this.joinprops)
    }

    private get joinprops() : JoinProps {
        return {
            meetingInfo : this.meetingInfo,
            iFrameProps : this.iFrameProps,
            uiProps : this.uiProps
        } 
    }

    private get meetingInfo() : MeetingInfo {
        return {
            meetingId : this.meetingID,
            passcode : this.passcode,
            name : this.joinName
        }
    }

    private get uiProps() : UIProps {
        return {
            disableFullScreenToggle : this.disableFullScreenToggle,
            hideFooter : this.hideMeetingFooter,
            hideChatPanel : this.hideChatPanel,
            hideAppsPanel : this.hideAppsPanel,
            lockMeetingControls : this.lockMeetingControls,
            hideCopyLink : this.hideCopyLink,
            hideRatingScreen : this.hideRatingScreen,
            hideAppPitches : this.disableAppPitches,
            customBackground : this.backgroundColor
        }
    }

    private get iFrameProps() : IFrameProps {
        return {
            width : this.meetingContainerWidth,
            height : this.meetingContainerHeight,
            selectorId : this.meetingContainerRef
        }
    }
}