const { createApp } = Vue

createApp({
    data() {
        return {
            noteTitle: null,
            noteContent: null,
            noteColor: null,
            notes: [
                {
                    title: "理財規劃",
                    content: "鴻海200",
                    color: "#BF616A",
                },
                {
                    title: "工作規劃",
                    content: "software industry",
                    color: "#A3BE8C",
                },
                {
                    title: "運動計畫",
                    content: "Walk 5000 steps ed",
                    color: "#88C0D0",
                },
            ]
        }
    },
    mounted() {
        this.notes[0].content = "鴻海300"
    },
    methods: {
        addNote() {
            let is_noteTitle = (this.noteTitle != null)
            let is_noteContent = (this.noteContent != null)
            let is_noteColor = (this.noteColor != null)
            if (is_noteTitle && is_noteContent && is_noteColor) {
                let newNote = {
                    title: this.noteTitle,
                    content: this.noteContent,
                    color: this.noteColor,
                };
                this.notes.push(newNote);
            }
            this.noteTitle = null;
            this.noteContent = null;
            this.noteColor = null;
        },
        delNote(index) {
            this.notes.splice(index, 1);
        },
    },
}).mount('#app')
