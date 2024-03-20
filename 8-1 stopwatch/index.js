const { createApp } = Vue

createApp({
    data() {
        return {
            ms: '00',
            ss: '00',
            mm: '00',
            hh: '00',
            startOnclick: false,
            pauseTimer: false,
            recordTimes: [],
        }
    },
    methods: {
        startTimer() {
            this.startBtnPushCount++;
            this.startOnclick = !this.startOnclick;

            if (this.startOnclick == true) {
                this.$refs.startBtn.textContent = 'Pause';
                //disable reset btn
                this.$refs.resetBtn.disabled = true;
                this.$refs.resetBtn.classList.add('disabled');
                //Enable split btn
                this.$refs.splitBtn.disabled = false;
                this.$refs.splitBtn.classList.remove('disabled');
                this.countdown();
                //push pause btn
            } else {
                this.$refs.startBtn.textContent = 'Continue';
                //Enable reset btn
                this.$refs.resetBtn.disabled = false;
                this.$refs.resetBtn.classList.remove('disabled');
                //Enable split btn
                this.$refs.splitBtn.disabled = true;
                this.$refs.splitBtn.classList.add('disabled');
                let recordTime = {
                    timing: '--:--:--',
                    btnType: 'pause',
                }
                this.$refs.hr.style.display = 'block';
                this.recordTimes.push(recordTime);
            }
        },
        countdown() {
            if (this.startOnclick) {
                this.ms++;
                if (this.ms < 10) {
                    this.ms = '0' + Number(this.ms);
                }
                if (this.ms == 99) {
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
                if (this.mm == 60) {
                    this.hh++;
                    this.ss = 0;
                }
                if (this.hh < 10) {
                    this.hh = '0' + Number(this.hh);
                }
                if (this.hh == 24) {
                    this.startOnclick = false;
                }
                setTimeout(this.countdown, 10);
            }
        },

        splitTimer() {
            let recordTime = {
                timing: this.hh + ':' + this.mm + ':' + this.ss,
                ms: this.ms,
                btnType: 'split',
            }
            this.$refs.hr.style.display = 'block';
            this.recordTimes.push(recordTime);
        },
        resetTimer() {
            this.timer = null;
            this.ms = '00';
            this.ss = '00';
            this.mm = '00';
            this.startOnclick = false;
            this.inital = true;
            this.$refs.startBtn.textContent = 'Start';
            // disable reset btn;
            this.$refs.resetBtn.disabled = true;
            this.$refs.resetBtn.classList.add('disabled');
            this.$refs.hr.style.display = 'none';
            this.recordTimes = [];
        },
    },

}).mount('#app')