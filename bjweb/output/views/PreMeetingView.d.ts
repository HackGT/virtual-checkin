import { Component } from "react";
import Managers from "../stores/Managers";
interface Props {
    managers: Managers;
}
export default class PreMeetingView extends Component<Props> {
    private managers;
    private viewmodel;
    constructor(props: Props);
    render(): JSX.Element;
}
export {};
