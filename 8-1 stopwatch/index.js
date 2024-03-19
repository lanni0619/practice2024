const { createApp } = Vue

createApp({
    data() {
        return {
            timer: null,
            ms: '00',
            ss: '00',
            mm: '00',
            startOnclick: false,
        }
    },
    methods: {
        startTimer() {
            this.startOnclick = !this.startOnclick;
            this.countdown();
        },
        countdown() {
            if (this.startOnclick) {

                this.ms++;

                if (this.ms < 10) {
                    this.ms = '0' + Number(this.ms);
                }

                if (this.ms == 100) {
                    this.ss++;
                    this.ms = 0;
                }

                if (this.ss < 10) {
                    this.ss = '0' + Number(this.ss);
                }

                if (this.ss == 60) {
                    this.mm++;
                    this.ss = 0;
                }

                if (this.mm < 10) {
                    this.mm = '0' + Number(this.mm);
                }

                if (this.mm == 99) {
                    startOnclick = false;
                }

                setTimeout(this.countdown, 10);
            }
        },
        resetTimer() {
            this.timer = null;
            this.ms = '00';
            this.ss = '00';
            this.mm = '00';
            this.startOnclick = false;
        },
    },

}).mount('#app')


// if (this.time == 0) {
//     clearInterval(this.timer);
// }