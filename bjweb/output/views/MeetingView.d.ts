import { Component } from "react";
import Managers from "../stores/Managers";
interface Props {
    managers: Managers;
}
export default class MeetingView extends Component<Props> {
    private viewModel;
    constructor(props: Props);
    render(): JSX.Element;
}
export {};
