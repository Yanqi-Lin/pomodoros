export const playSoundElement = (id) => {
    const element = document.getElementById(id);
    element.play();
}

export const resetSoundElement = (id) => {
    const element = document.getElementById(id);
    element.pause();
    element.currentTime = 0;
}
