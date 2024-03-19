const { createApp } = Vue

createApp({
    data() {
        return {
            notes: [
                {
                    title: "春節行程安排",
                    content: "吃飽睡，睡飽吃",
                    color: "red",
                },
                {
                    title: "工作待辦事項",
                    content: "詢問各家廠商報價",
                    color: "green",
                },
                {
                    title: "運動健身計畫",
                    content: "每天早上六點去健身",
                    color: "blue",
                },
            ]
        }
    },
    mounted() {
        this.notes[0].color = 'rgb(155, 0, 0, 0.5)'
        this.notes[1].color = 'rgb(0, 155, 0, 0.5)'
        this.notes[2].color = 'rgb(0, 0, 155, 0.5)'
    },
    methods: {
        change() {
            if (this.notes[0].content == "吃飽睡，睡飽吃") {
                this.notes[0].content = '多出門、到處走走、也要多運動'
            } else {
                this.notes[0].content = '吃飽睡，睡飽吃'
            }
        }
    }
}).mount('#app')
