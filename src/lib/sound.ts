let clickAudio: HTMLAudioElement | null = null;

export function playClick() {
    if (!clickAudio) {
        clickAudio = new Audio("/sounds/click.mp3");
    }
    clickAudio.currentTime = 0.15;
    clickAudio.play().catch(() => {});
}
