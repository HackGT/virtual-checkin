import { BJNEmbedSDKInterface, BJNEConnectionState, BJNEParticipant, BJNEChatMessage, JoinProps } from "bluejeans-webrtc-embed-sdk";
export default class EmbedSDKManager implements BJNEmbedSDKInterface {
    constructor();
    get isSDKInitComplete(): boolean;
    get connectionState(): BJNEConnectionState;
    get audioMuted(): boolean;
    get videoMuted(): boolean;
    get receivingScreenShare(): boolean;
    get sharingScreen(): boolean;
    get participants(): BJNEParticipant[];
    get selfParticipant(): BJNEParticipant;
    get chatMessages(): BJNEChatMessage[];
    joinMeeting(joinProps: JoinProps): void;
    leave(): void;
    leaveAndEndForAll(): void;
    setAudioMuted(): void;
    setVideoMuted(): void;
    startScreenShare(): void;
    stopScreenShare(): void;
    setName(name: string): void;
}
