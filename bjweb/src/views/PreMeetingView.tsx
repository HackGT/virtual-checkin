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
          Sample for BlueJeans meeting in Embed mode
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
          <OptionsHeader>UI customisation(Optional)</OptionsHeader>
          <UIOptionsContainer>
            <UIOptions>
              <tr>
                <OptionsData>
                  <CheckBox
                    type="checkbox"
                    checked={this.viewmodel.disableFullScreenToggle}
                    onChange={this.viewmodel.setFullScreenToggle}
                  />
                  <label>Disable Full Screen Toggle</label>
                </OptionsData>
                <OptionsData>
                  <CheckBox
                    type="checkbox"
                    checked={this.viewmodel.hideMeetingFooter}
                    onChange={this.viewmodel.setFooterVisibility}
                  />
                  <label>Hide Meeting Footer</label>
                </OptionsData>
                <OptionsData>
                  <CheckBox
                    type="checkbox"
                    checked={this.viewmodel.hideChatPanel}
                    onChange={this.viewmodel.setChatPanelVisibility}
                  />
                  <label>Hide Chat Panel</label>
                </OptionsData>
              </tr>
              <tr>
                <OptionsData>
                  <CheckBox
                    type="checkbox"
                    checked={this.viewmodel.hideAppsPanel}
                    onChange={this.viewmodel.setAppsPanelVisibility}
                  />
                  <label>Hide Apps Panel</label>
                </OptionsData>
                <OptionsData>
                  <CheckBox
                    type="checkbox"
                    checked={this.viewmodel.lockMeetingControls}
                    onChange={this.viewmodel.setMeetingControlLockState}
                  />
                  <label>Lock meeting controls</label>
                </OptionsData>
                <OptionsData>
                  <CheckBox
                    type="checkbox"
                    checked={this.viewmodel.hideCopyLink}
                    onChange={this.viewmodel.setCopyLinkVisibility}
                  />
                  <label>Hide Copy link</label>
                </OptionsData>
              </tr>
              <tr>
                <OptionsData>
                  <CheckBox
                    type="checkbox"
                    checked={this.viewmodel.hideRatingScreen}
                    onChange={this.viewmodel.setRatingScreenVisibility}
                  />
                  <label>Disable Meeting Rating screens</label>
                </OptionsData>
                <OptionsData>
                  <CheckBox
                    type="checkbox"
                    checked={this.viewmodel.disableAppPitches}
                    onChange={this.viewmodel.setDisableAppPitch}
                  />
                  <label>Disable app pitches</label>
                </OptionsData>
              </tr>
            </UIOptions>
          </UIOptionsContainer>
          <BGOptionContainer>
            <BGColorTextLabel>Background Color :</BGColorTextLabel>
            <BGColorTextBox
              placeholder="#FFFFFF or linear-gradient(#6600CC, #6600FF)"
              value={this.viewmodel.backgroundColor}
              onChange={this.viewmodel.setBackgroundColor}
            />
            <BGColorHint>
              Supported format : #FFFFFF (or) linear-gradient(#6600CC, #6600FF)
            </BGColorHint>
          </BGOptionContainer>
          <IFramePropsContainer>
            <IFrameLabel>
              Meeting container specifications(Optional)
            </IFrameLabel>
            <IFrameProps>
              <PropsSpecs
                placeholder="Width"
                value={this.viewmodel.meetingContainerWidth}
                onChange={this.viewmodel.setMeetingContainerWidth}
              />
              <PropsHint>Default 100%, Example : 100% (or) 300px</PropsHint>
            </IFrameProps>
            <IFrameProps>
              <PropsSpecs
                placeholder="Height"
                value={this.viewmodel.meetingContainerHeight}
                onChange={this.viewmodel.setMeetingContainerHeight}
              />
              <PropsHint>Default 100%, Example : 100% (or) 300px</PropsHint>
            </IFrameProps>
            <IFrameProps>
              <PropsSpecs
                placeholder="Container"
                value={this.viewmodel.meetingContainerRef}
                onChange={this.viewmodel.setMeetingContainerRef}
              />
              <PropsHint>
                Default: Attach to the body, Example : #iframeContainer (or)
                .iframeContainer
              </PropsHint>
            </IFrameProps>
          </IFramePropsContainer>
        </MeetingInfoContainer>
        <JoinButton onClick={this.viewmodel.joinMeeting}>
          Join Meeting
        </JoinButton>
      </ViewContainer>
    );
  }
}
