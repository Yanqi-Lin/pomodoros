import React from 'react';
import { Card, Row, Col, Button } from 'antd';
import {
    DownOutlined,
    UpOutlined,
    RedoOutlined,
    PlayCircleOutlined,
    PauseOutlined,
} from '@ant-design/icons';
import CountDown from "./CountDown";
import './Timer.css';
import { connect } from 'react-redux';
import {
    startStopAction,
    countDownAction,
    resetAction,
    breakDcrementAction,
    breakIncrementAction,
    sessionDecrementAction,
    sessionIncrementAction,
} from '../redux/actions';

function Timer(props) {

    React.useEffect(() => {
        const timeOut = () => {
            setTimeout(() => props.countDownAction(), 1000);
        }
        if (props.isRunning) {
            timeOut()
            clearTimeout(timeOut)
        }
    })

    return (
        <Card className='mainCard'>
            <Row gutter={[16, 20]}>
                <Col span={12}>
                    <Row justify={'center'}>
                        <div id='break-label'>
                            Break Length
                        </div>
                    </Row>
                    <Row justify={'space-around'} >
                        <Button
                            id='break-increment'
                            onClick={() => props.breakIncrementAction()}
                            shape="round"
                            size="small"
                            icon={<UpOutlined />}
                        />

                        <div id='break-length' className='count-num'>
                            {props.break}
                        </div>
                        <Button
                            id='break-decrement'
                            onClick={() => props.breakDcrementAction()}
                            shape="round"
                            size="small"
                            icon={<DownOutlined />}
                        />
                    </Row>
                </Col>
                <Col span={12}>
                    <Row justify={'center'}>
                        <div id='session-label'>
                            Session Length
                        </div>
                    </Row>
                    <Row justify={"space-around"} >
                        <Button
                            id='session-increment'
                            onClick={() => props.sessionIncrementAction()}
                            shape="round"
                            size="small"
                            icon={<UpOutlined />}
                        />
                        <div id='session-length' className='count-num'>
                            {props.session}
                        </div>
                        <Button
                            id='session-decrement'
                            onClick={() => props.sessionDecrementAction()}
                            shape="round"
                            size="small"
                            icon={<DownOutlined />}
                        />
                    </Row>
                </Col>
            </Row>
            <Row justify={"center"} gutter={[16, 24]}>
                <div id='timer-label'>
                    {props.isSession ? 'Start working !' : 'Have a Break !'}
                </div>
            </Row>
            <Row justify={"center"} gutter={[16, 24]}>
                <CountDown
                    current={props.current}
                    isSession={props.isSession}
                    session={props.session}
                    break={props.break}
                />
            </Row>
            <audio id='beep'>
                <source src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav' type="audio/wav" />
                <source src='%PUBLIC_URL%/build_testable-projects-fcc_audio_BeepSound.wav' type="audio/wav" />
            </audio>
            <Row justify={"space-around"} gutter={[16, 24]}>
                <Button
                    id='start_stop'
                    onClick={() => props.startStopAction()}
                    shape="round"
                    icon={props.isRunning ? <PauseOutlined /> : <PlayCircleOutlined />}
                />
                <Button
                    id='reset'
                    onClick={() => props.resetAction()}
                    shape="round"
                    icon={<RedoOutlined />}
                />
            </Row>
        </Card>
    )

}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = {
    startStopAction,
    countDownAction,
    resetAction,
    breakDcrementAction,
    breakIncrementAction,
    sessionDecrementAction,
    sessionIncrementAction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer)