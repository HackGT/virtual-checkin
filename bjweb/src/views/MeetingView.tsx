import React, { Component } from "react";
import { observer } from "mobx-react";
import Managers from "../stores/Managers";
import MeetingViewModel from "./MeetingViewModel";
import {
  MeetingControlContainer,
} from "./styles/MeetingView";

interface Props {
  managers: Managers;
}

@observer
export default class MeetingView extends Component<Props> {
  private viewModel: MeetingViewModel;

  constructor(props: Props) {
    super(props);
    this.viewModel = new MeetingViewModel(props.managers);
  }

  render() {
    return <MeetingControlContainer></MeetingControlContainer>;
  }
}
