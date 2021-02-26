import React, { Component } from "react";
import { observer } from "mobx-react";
import Managers from "../stores/Managers";
import {
  ViewContainer,
  GreetingsHeader,
  GreetingsSubHeader,
  MeetingInfoContainer,
  MeetingID,
  Passcode,
  JoinName,
  JoinButton,
  UIOptionsContainer,
  UIOptions,
  OptionsHeader,
  OptionsData,
  CheckBox,
  BGOptionContainer,
  BGColorTextLabel,
  BGColorTextBox,
  BGColorHint,
  IFramePropsContainer,
  IFrameLabel,
  IFrameProps,
  PropsSpecs,
  PropsHint,
} from "./styles/PreMeeting";
import PreMeetingViewModel from "./PreMeetingViewModel";

interface Props {
  managers: Managers;
}

@observer
export default class PreMeetingView extends Component<Props> {
  private managers: Managers;
  private viewmodel: PreMeetingViewModel;

  constructor(props: Props) {
    super(props);
    this.viewmodel = new PreMeetingViewModel(props.managers);
  }

  render() {
    return (
      <ViewContainer>
        <GreetingsHeader>Welcome!</GreetingsHeader>
        <GreetingsSubHeader>
          Sample WebRTC App for BlueJeans Meeting For HackGT :)
        </GreetingsSubHeader>
        <MeetingInfoContainer>
          <MeetingID
            placeholder={"Meeting ID"}
            value={this.viewmodel.meetingID}
            onChange={this.viewmodel.setMeetingId}
          />
          <br />
          <Passcode
            placeholder={"Passcode(optional)"}
            value={this.viewmodel.passcode}
            onChange={this.viewmodel.setPasscode}
          />
          <br />
          <JoinName
            placeholder={"Name"}
            value={this.viewmodel.joinName}
            onChange={this.viewmodel.setJoinName}
          />
          <br />
        </MeetingInfoContainer>
        <JoinButton onClick={this.viewmodel.joinMeeting}>
          Join Meeting
        </JoinButton>
      </ViewContainer>
    );
  }
}
