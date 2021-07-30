import {
    START_STOP,
    COUNTDOWN,
    RESET,
    BREAK_DECREMENT,
    BREAK_INCREMENT,
    SESSION_DECREMENT,
    SESSION_INCREMENT,
} from './constant';

export const startStopAction = () => {

    return {
        type: START_STOP,
    }
}

export const countDownAction = () => {
    return {
        type: COUNTDOWN,
    }
}

export const resetAction = () => {
    return {
        type: RESET,
    }
}

export const breakDcrementAction = (data) => {
    return {
        type: BREAK_DECREMENT,
        payload: data,
    }
}

export const breakIncrementAction = (data) => {
    return {
        type: BREAK_INCREMENT,
        payload: data,
    }
}

export const sessionDecrementAction = (data) => {
    return {
        type: SESSION_DECREMENT,
        payload: data,
    }
}

export const sessionIncrementAction = (data) => {
    return {
        type: SESSION_INCREMENT,
        payload: data,
    }
}