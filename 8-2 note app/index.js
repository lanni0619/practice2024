const { createApp } = Vue;

createApp({
    data() {
        return {
            notes: [],
        };
    },
    methods: {
        newNote() {
            if (this.$refs.textarea.value != '') {
                this.notes.push(this.$refs.textarea.value);
                console.log(this.notes);
                this.$refs.textarea.value = '';
            } else {
                alert('Please type your notes!');
            }
        },
        delNote(index) {
            this.notes.splice(index, 1);
        },
        modifyNote(index) {
            this.$refs.textarea.value = this.notes[index];
        }
    }
}).mount("#app");