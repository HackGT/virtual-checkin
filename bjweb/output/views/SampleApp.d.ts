import { Component } from 'react';
import Managers from '../stores/Managers';
interface Props {
    managers: Managers;
}
export default class SampleApp extends Component<Props> {
    private viewModel;
    constructor(props: Props);
    private get viewToShow();
    render(): JSX.Element;
}
export {};
