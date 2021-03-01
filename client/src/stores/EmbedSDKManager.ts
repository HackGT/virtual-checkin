import { computed, action } from "mobx";
import BJNEmbedSDK, { BJNEmbedSDKInterface, BJNEConnectionState, BJNEParticipant, BJNEChatMessage, JoinProps } from "bluejeans-webrtc-embed-sdk";

export default class EmbedSDKManager implements BJNEmbedSDKInterface {

    constructor() {
        BJNEmbedSDK.observe("audioMuted", () => {
            console.info("audioMuted changed : ", BJNEmbedSDK.audioMuted)
        })

        BJNEmbedSDK.observe("connectionState", () => {
            console.info("connectionState changed : ", BJNEmbedSDK.connectionState)
        })
    }

    @computed get isSDKInitComplete() : boolean {
        return BJNEmbedSDK.isSDKInitComplete;
    }

    @computed get connectionState(): BJNEConnectionState {
        return BJNEmbedSDK.connectionState;
    }

    @computed get audioMuted(): boolean {
        return BJNEmbedSDK.audioMuted;
    }

    @computed get videoMuted(): boolean {
        return BJNEmbedSDK.videoMuted;
    }

    @computed get receivingScreenShare(): boolean {
        return BJNEmbedSDK.receivingScreenShare;
    }

    @computed get sharingScreen(): boolean {
        return BJNEmbedSDK.sharingScreen;
    }

    @computed get participants(): BJNEParticipant[] {
        return BJNEmbedSDK.participants;
    }

    @computed get selfParticipant(): BJNEParticipant {
        return BJNEmbedSDK.selfParticipant;
    }

    @computed get chatMessages(): BJNEChatMessage[] {
        return BJNEmbedSDK.chatMessages;
    }

    @action joinMeeting(joinProps : JoinProps) {
        BJNEmbedSDK.joinMeeting(joinProps);
    }

    @action leave(): void {
        BJNEmbedSDK.leave();
    }

    @action leaveAndEndForAll(): void {
        // TODO
    }

    @action setAudioMuted(): void {
        BJNEmbedSDK.setAudioMuted();
    }

    @action setVideoMuted(): void {
        BJNEmbedSDK.setVideoMuted();
    }

    @action startScreenShare(): void {
        BJNEmbedSDK.startScreenShare();
    }

    @action stopScreenShare(): void {
        BJNEmbedSDK.stopScreenShare();
    }

    @action setName(name: string): void {
        BJNEmbedSDK.setName(name);
    }
}