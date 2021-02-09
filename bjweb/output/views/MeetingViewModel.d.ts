import Managers from "../stores/Managers";
export default class MeetingViewModel {
    private appManager;
    private embedSDKManager;
    constructor(managers: Managers);
    get joinName(): string;
    get participantsCount(): number;
    get meetingStatus(): string;
    get contentStatus(): string;
    get audioStatus(): string;
    get videoStatus(): string;
    get sharingStatus(): string;
    get callControlInfo(): string;
    private get isDisconnected();
    setJoinName(event: any): void;
    toggleVideoState(): void;
    toggleAudioState(): void;
    toggleScreenShare(): void;
    leaveMeeting(): void;
}
