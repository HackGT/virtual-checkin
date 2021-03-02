import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { JoiningMessage } from "./styles/Common";

interface Props {}

@observer
export default class JoiningView extends Component<Props> {

    constructor(props: Props) {
        super(props);
    }

    render() {
        return (
            <JoiningMessage>Joining the Meeting Please wait!</JoiningMessage>
        )
    }
}