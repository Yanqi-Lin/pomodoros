import { Progress } from 'antd';
import './CountDown.css';
import { connect } from 'react-redux';

function CountDown(props) {

    const mins = Math.floor(props.current / 60);
    const secs = props.current - mins * 60;
    //显示剩余时间
    function showNum(num) {
        return num < 10 ? '0' + num : num;
    }
    const display = showNum(mins) + ':' + showNum(secs);

    const activeValue = props.isSession ? props.session : props.break;
    const percent = (1 - props.current / 60 / activeValue) * 100;

    return (
        <div id="time-left" >
            <Progress
                type="circle"
                percent={percent}
                format={() => display}
            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        current: state.current,
        isSession: state.isSession,
        session: state.session,
        break: state.break,
    }
}

export default connect(mapStateToProps)(CountDown);