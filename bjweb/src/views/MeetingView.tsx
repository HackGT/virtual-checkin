import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Managers from '../stores/Managers';
import MeetingViewModel from './MeetingViewModel';
import { MeetingControlContainer, MeetingDetailsTable, MeetingDetailsTableBody, MeetingDetailsTableRow,
    MeetingDetailsTableContent, MeetingDetailsTableData, MeetingControlButton, JoinName, LeaveControlButton } from "./styles/MeetingView";

interface Props {
    managers: Managers
}

@observer
export default class MeetingView extends Component<Props> {

    private viewModel : MeetingViewModel;

    constructor(props: Props) {
        super(props);
        this.viewModel = new MeetingViewModel(props.managers)
    }

    private get colonSeparator() : JSX.Element {
        return <MeetingDetailsTableData>:</MeetingDetailsTableData>;
    }

    render() {
        return (
        <MeetingControlContainer>
            <MeetingDetailsTable>
                <MeetingDetailsTableBody>
                    <MeetingDetailsTableRow>
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>Name</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                        { this.colonSeparator }
                        <MeetingDetailsTableData>
                            <JoinName value={ this.viewModel.joinName } onChange={ this.viewModel.setJoinName } />
                        </MeetingDetailsTableData>
                    </MeetingDetailsTableRow>
                    <MeetingDetailsTableRow>
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>No of Participants</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                        { this.colonSeparator }
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>{ this.viewModel.participantsCount }</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                    </MeetingDetailsTableRow>
                    <MeetingDetailsTableRow>
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>Content</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                        { this.colonSeparator }
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>{ this.viewModel.contentStatus }</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                    </MeetingDetailsTableRow>
                    <MeetingDetailsTableRow>
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>Meeting status</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                        { this.colonSeparator }
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>{ this.viewModel.meetingStatus }</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                    </MeetingDetailsTableRow>
                    <MeetingDetailsTableRow>
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>Audio control</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                        { this.colonSeparator }
                        <MeetingDetailsTableData>
                            <MeetingControlButton onClick={ this.viewModel.toggleAudioState }>{ this.viewModel.audioStatus }</MeetingControlButton>
                        </MeetingDetailsTableData>
                    </MeetingDetailsTableRow>
                    <MeetingDetailsTableRow>
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>Video control</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                        { this.colonSeparator }
                        <MeetingDetailsTableData>
                            <MeetingControlButton onClick={ this.viewModel.toggleVideoState }>{ this.viewModel.videoStatus }</MeetingControlButton>
                        </MeetingDetailsTableData>
                    </MeetingDetailsTableRow>
                    <MeetingDetailsTableRow>
                        <MeetingDetailsTableData>
                            <MeetingDetailsTableContent>Screen sharing</MeetingDetailsTableContent>
                        </MeetingDetailsTableData>
                        { this.colonSeparator }
                        <MeetingDetailsTableData>
                            <MeetingControlButton onClick={ this.viewModel.toggleScreenShare }>{ this.viewModel.sharingStatus }</MeetingControlButton>
                        </MeetingDetailsTableData>
                    </MeetingDetailsTableRow>
                </MeetingDetailsTableBody>
            </MeetingDetailsTable>
            <LeaveControlButton onClick={ this.viewModel.leaveMeeting }>{ this.viewModel.callControlInfo}</LeaveControlButton>
        </MeetingControlContainer>
        )
    }
}