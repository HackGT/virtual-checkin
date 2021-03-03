import React, { Component } from "react";
import { observer } from "mobx-react";
// import { computed } from "mobx";
import Managers from "../stores/Managers";
import { AppState } from "../stores/AppManager";
import PreMeetingView from "./PreMeetingView";
import MeetingView from "./MeetingView";
import JoiningView from "./JoiningView";
import AppViewModel from "./AppViewModel";
import { IFrameHolder } from "./styles/Common";

interface Props {
  managers: Managers;
}

// const SampleApp2 = (props: Props) => {
//   const viewModel = new AppViewModel(props.managers);
//   // function viewToShow() {
//   //   switch (viewModel.appState) {
//   //     case AppState.PRE_MEETING:
//   //       return viewModel.joiningStarted ? (
//   //         <JoiningView />
//   //       ) : (
//   //         <PreMeetingView managers={props.managers} />
//   //       );
//   //     case AppState.IN_MEETING:
//   //     //return <MeetingView managers={ this.props.managers }/>
//   //   }
//   // }
//   return (
//     <div>
//       <IFrameHolder
//         className="iframeHolder"
//         show={viewModel.showMeetingIframe}
//       />
//       {<JoiningView />}
//     </div>
//   );



// }
@observer
class SampleApp extends Component<Props> {
  viewModel: AppViewModel;

  constructor(props: Props) {
    super(props);
    this.viewModel = new AppViewModel(props.managers);
  }

  get viewToShow() {
    switch (this.viewModel.appState) {
      case AppState.PRE_MEETING:
        return this.viewModel.joiningStarted ? (
          <JoiningView />
        ) : (
          <PreMeetingView managers={this.props.managers} />
        );
      case AppState.IN_MEETING:
      return <MeetingView managers={ this.props.managers }/>
    }
  }

  render() {
    return (
      <div>
        <IFrameHolder
          className="iframeHolder"
          show={this.viewModel.showMeetingIframe}
        />
        {this.viewToShow}
      </div>
    );
  }
}
export default SampleApp;

