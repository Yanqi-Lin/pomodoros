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

export const breakDcrementAction = () => {
    return {
        type: BREAK_DECREMENT,

    }
}

export const breakIncrementAction = () => {
    return {
        type: BREAK_INCREMENT,

    }
}

export const sessionDecrementAction = () => {
    return {
        type: SESSION_DECREMENT,

    }
}

export const sessionIncrementAction = () => {
    return {
        type: SESSION_INCREMENT,
    }
}