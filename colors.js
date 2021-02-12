const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
    startButtonRef: document.querySelector('[data-action="start"]'),
    stopButtonRef: document.querySelector('[data-action="stop"]'),
    bodyRef: document.querySelector('body'),
}

const generator = {

    isActive: false,
    intervalId: null,

    start() {
        if (this.isActive) {
            return;
        }
        this.isActive = true;
        this.intervalId = setInterval(() => {
        refs.bodyRef.style.background = colors[randomIntegerFromInterval(0, colors.length - 1)];
        }, 1000)
    },

    stop() {
        this.isActive = false;
        clearInterval(this.intervalId);
    }
}

refs.startButtonRef.addEventListener('click', generator.start.bind(generator));
refs.stopButtonRef.addEventListener('click', generator.stop.bind(generator));


const randomIntegerFromInterval = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min + 1) + min));
    return Math.floor(Math.random() * (max - min + 1) + min);
};
