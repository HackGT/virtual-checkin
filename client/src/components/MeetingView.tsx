import React, { Component } from "react";
import { observer } from "mobx-react";
import Managers from "../stores/Managers";
import MeetingViewModel from "./MeetingViewModel";
import {
  MeetingControlContainer,
  // MeetingDetailsTable,
  // MeetingDetailsTableBody,
  // MeetingDetailsTableRow,
  // MeetingDetailsTableContent,
  MeetingDetailsTableData,
  // MeetingControlButton,
  // JoinName,
  // LeaveControlButton,
} from "./styles/MeetingView";

interface Props {
  managers: Managers;
}

@observer
class MeetingView extends Component<Props> {
  viewModel: MeetingViewModel;

  constructor(props: Props) {
    super(props);
    this.viewModel = new MeetingViewModel(props.managers);
  }

  get colonSeparator(): JSX.Element {
    return <MeetingDetailsTableData></MeetingDetailsTableData>;
  }

  render() {
    return <MeetingControlContainer></MeetingControlContainer>;
  }
}

export default MeetingView;