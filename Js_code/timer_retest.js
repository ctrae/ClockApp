export default class Timer{
    constructor(root){
        root.innerHTML = Timer.getHTML();

        this.el = {
            hours: root.querySelector(".timer__part--hrs"),
            minutes: root.querySelector(".timer__part--mins"),
            seconds: root.querySelector(".timer__part--secs"),
            control: root.querySelector(".timer_btn-main"),
            reset: root.querySelector(".timer_btn-reset"),
            set: root.querySelector(".timer_btn-set"),
        };

        this.interval = null;
        this.remainingSeconds = 0;


        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            this.remainingSeconds = 0;
            clearInterval(this.interval);
            this.interval = null;
            this.updateInterfaceControls();
            this.el.hours.textContent = "00"
            this.el.minutes.textContent = "00"
            this.el.seconds.textContent = "00"
            
        });

        this.el.set.addEventListener("click", () => {
            const inputMinutes = prompt("Enter number of minutes:");

            if (inputMinutes) {
                this.stop();
                this.remainingSeconds = inputMinutes * 60;
                this.updateInterfaceTime();
            }
        });
    }

        updateInterfaceTime() {
            const hours = Math.floor(this.remainingSeconds / 3600);
            const minutes = Math.floor((this.remainingSeconds / 60) % 60);
            const seconds = this.remainingSeconds % 60;

            this.el.hours.textContent = hours.toString().padStart(2, "0");
            this.el.minutes.textContent = minutes.toString().padStart(2, "0");
            this.el.seconds.textContent = seconds.toString().padStart(2, "0");
        }


        updateInterfaceControls() {
            if (this.interval === null){
                this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
                this.el.control.classList.add("timer_btn-start");
                this.el.control.classList.remove("timer_btn-stop");
            } else {
                this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
                this.el.control.classList.add("timer_btn-stop");
                this.el.control.classList.remove("timer_btn-start");
            }
        }

        start() {
            if (this.remainingSeconds === 0) return;
            
            this.interval = setInterval(() => {
                this.remainingSeconds--;
                this.updateInterfaceTime();

                if (this.remainingSeconds === 0){
                    this.stop();
                }
            }, 1000);

            this.updateInterfaceControls();
        }

        stop(){
            clearInterval(this.interval);

            this.interval = null;

            this.updateInterfaceControls();
        }

    static getHTML() {
        return `
            <span class="timer__part timer__part--hrs">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--mins">00</span>
            <span class="timer__part">:</span>
            <span class="timer__part timer__part--secs">00</span>
            <button type="button" class="timer_btn timer_btn-main timer_btn-start">
                <span class="material-icons">play_arrow</span>
            </button>
            <button type="button" class="timer_btn timer_btn-reset">
                <span class="material-icons">refresh</span>
            </button>
            <button type="button" class="timer_btn timer_btn-set">
            <span class="material-icons">timer</span>
            </button>
        `;
    }
}