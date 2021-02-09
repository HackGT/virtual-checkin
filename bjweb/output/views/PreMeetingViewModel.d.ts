import Managers from "../stores/Managers";
export default class PreMeetingViewModel {
    private embedSDKManager;
    private appManager;
    meetingID: string;
    passcode: string;
    joinName: string;
    disableFullScreenToggle: boolean;
    hideMeetingFooter: boolean;
    hideChatPanel: boolean;
    hideAppsPanel: boolean;
    lockMeetingControls: boolean;
    hideCopyLink: boolean;
    hideRatingScreen: boolean;
    disableAppPitches: boolean;
    backgroundColor: string;
    meetingContainerWidth: string;
    meetingContainerHeight: string;
    meetingContainerRef: string;
    constructor(managers: Managers);
    setMeetingId(event: any): void;
    setPasscode(event: any): void;
    setJoinName(event: any): void;
    setFullScreenToggle(event: any): void;
    setFooterVisibility(event: any): void;
    setChatPanelVisibility(event: any): void;
    setAppsPanelVisibility(event: any): void;
    setMeetingControlLockState(event: any): void;
    setCopyLinkVisibility(event: any): void;
    setRatingScreenVisibility(event: any): void;
    setDisableAppPitch(event: any): void;
    setBackgroundColor(event: any): void;
    setMeetingContainerWidth(event: any): void;
    setMeetingContainerHeight(event: any): void;
    setMeetingContainerRef(event: any): void;
    joinMeeting(): void;
    private get joinprops();
    private get meetingInfo();
    private get uiProps();
    private get iFrameProps();
}
