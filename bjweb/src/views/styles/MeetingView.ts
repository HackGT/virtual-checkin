import styled from 'styled-components';
import { TextBox } from './Common';

export const MeetingControlContainer = styled.div`
    width: 400px;
    margin-top: 80px;
    margin-left: 30px;
`

export const MeetingDetailsTable = styled.table`
    
`

export const MeetingDetailsTableBody = styled.tbody`
    
`

export const MeetingDetailsTableRow = styled.tr`
`

export const MeetingDetailsTableData = styled.td`
`

export const MeetingDetailsTableContent = styled.div`
    margin: 8px auto;
    width: 180px;
`

export const MeetingControlButton = styled.button`
    width: 180px;
    display: block;
    padding: 4px;
    margin: 8px auto;
    border-radius: 4px;
    background: black;
    color: white;
    font-size: 14px;
    font-weight: bolder;
    cursor: pointer;
`

export const LeaveControlButton = styled(MeetingControlButton)`
    width: 232px;
    margin: 36px auto;
    padding: 8px;
    font-size: 18px;
`

export const JoinName = styled(TextBox)`
    width: 160px;
`