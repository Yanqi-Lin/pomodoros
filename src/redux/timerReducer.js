import {
    START_STOP,
    COUNTDOWN,
    JUMP,
    RESET,
    BREAK_DECREMENT,
    BREAK_INCREMENT,
    SESSION_DECREMENT,
    SESSION_INCREMENT,
    BEEP,
} from './constant';
import {
    playSoundElement,
    resetSoundElement
} from '../utils/soundElementFunc';

const INITIAL_STATE = {
    break: 5,
    session: 25,
    current: 25 * 60,
    isRunning: false,
    isSession: true,
}

export default function timerReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case COUNTDOWN:
            if (state.isRunning) {
                if (state.current < 1 && state.isSession) {
                    playSoundElement(BEEP);
                    return {
                        ...state,
                        current: state.break * 60,
                        isSession: false,
                    }
                }
                if (state.current < 1 && !state.isSession) {
                    playSoundElement(BEEP);
                    return {
                        ...state,
                        current: state.session * 60,
                        isSession: true,
                    }
                }
                return {
                    ...state,
                    current: state.current - 1
                }
            }
            return state;
        case START_STOP:
            return {
                ...state,
                isRunning: !state.isRunning
            };
        case JUMP:
            resetSoundElement(BEEP);
            if (state.isRunning) {
                if (state.session) {
                    return {
                    ...state,
                    isRunning: false,
                    current: state.break * 60,
                    isSession: false
                    }
                } 
                if (state.session) {
                    return {
                    ...state,
                    isRunning: false,
                    current: state.session * 60,
                    isSession: true
                    }
                }
            }
            return state;
        case RESET:
            resetSoundElement(BEEP);
            return INITIAL_STATE;
        case BREAK_DECREMENT:
            if (!state.isRunning && state.break > 1) {
                return {
                    ...state,
                    break: state.break - 1
                }
            }
            return state;
        case BREAK_INCREMENT:
            if (!state.isRunning && state.break < 60) {
                return {
                    ...state,
                    break: state.break + 1
                }
            }
            return state;
        case SESSION_DECREMENT:
            if (!state.isRunning && state.session > 1) {
                return {
                    ...state,
                    session: state.session - 1,
                    current: (state.session - 1) * 60
                }
            }
            return state;
        case SESSION_INCREMENT:
            if (!state.isRunning && state.session < 60) {
                return {
                    ...state,
                    session: state.session + 1,
                    current: (state.session + 1) * 60
                }
            }
            return state;
        default:
            return state;
    }
}