import React from 'react';
import './App.css';
import Managers from './stores/Managers';
import EmbedSDKManager from "./stores/EmbedSDKManager";
import AppManager from "./stores/AppManager";
// components
// import ProjectContainer from './components/ProjectContainer';
// import PreMeetingView from './components/PreMeetingView'
import SampleApp from './components/SampleApp'
// import MeetingView from './components/MeetingView'
import BJNEmbedSDK, { BJNEmbedSDKInterface, BJNEConnectionState, BJNEParticipant, BJNEChatMessage, JoinProps } from "bluejeans-webrtc-embed-sdk";

import { Box } from '@chakra-ui/react';



// interface IManagers {    
//     embedSDKManager : EmbedSDKManager;
//     appManager : AppManager;

// }

const App: React.FC = () => {

	let embedSDKManager = new EmbedSDKManager();
	let appManager = new AppManager(embedSDKManager);
    appManager.setJoiningMeeting(true);
    // get joinprops() : JoinProps {
    let meetingInfo = {
    	meetingId : "894804876",
            passcode : "",
            name : "Mohan"
    }
    let meetingContainerWidth : string = "400";
    let meetingContainerHeight : string = "400";
    let meetingContainerRef : string = ".iframeHolder";
    let iFrameProps = {
            width : meetingContainerWidth,
            height : meetingContainerHeight,
            selectorId : meetingContainerRef
    }
    let disableFullScreenToggle : boolean = false;
    let hideMeetingFooter : boolean = false;
    let hideChatPanel : boolean = false;
	let hideAppsPanel : boolean = false;
 	let lockMeetingControls : boolean = false;
  	let hideCopyLink : boolean = false;
    let hideRatingScreen : boolean = false;
    let disableAppPitches : boolean = false;
    let backgroundColor : string = "";

    let uiProps = {
            disableFullScreenToggle : disableFullScreenToggle,
            hideFooter : hideMeetingFooter,
            hideChatPanel : hideChatPanel,
            hideAppsPanel : hideAppsPanel,
            lockMeetingControls : lockMeetingControls,
            hideCopyLink : hideCopyLink,
            hideRatingScreen : hideRatingScreen,
            hideAppPitches : disableAppPitches,
            customBackground : backgroundColor
    }

    let joinprops = {
            meetingInfo : meetingInfo,
            iFrameProps : iFrameProps,
            uiProps : uiProps
    } 


	appManager.setJoinProps(joinprops);
	// embedSDKManager.joinMeeting(joinprops)



	// let vals = {    
 //    embedSDKManager : embedSDKManager,
 //    appManager : appManager

	// }


	let managers = new Managers();



	// managers.embedSDKManager.joinMeeting(joinprops)
	BJNEmbedSDK.joinMeeting(joinprops);



  return (
    <Box minH="100%">
      {<SampleApp managers={ managers }></SampleApp>}
      {/*<MeetingView managers={managers}></MeetingView>*/}
    
    </Box>
  );
};

export default App;
