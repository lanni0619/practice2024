const { createApp } = Vue;

createApp({
    data() {
        return {
            notes: [],
            focusIndex: 0,
            delBtnIsBlock: false
        };
    },
    methods: {
        newNote() {
            if (this.$refs.textarea.value == '') {
                alert('Please type your note...');

            } else if (!this.focusNote) {
                // set status
                this.notes.push(this.$refs.textarea.value);
            } else if (this.focusNote) {
                // reset UI
                this.notes[this.focusIndex] = this.$refs.textarea.value;
                this.$refs.textarea.value = '';
                this.$refs.newBtn.textContent = '+New';
                this.$refs.textarea.style.backgroundColor = 'white';
                // reset status
                this.focusIndex = 0;
                this.focusNote = false;
                this.delBtnIsBlock = false;
            }
        },
        delNote(index) {
            this.notes.splice(index, 1);
            this.$refs.textarea.value = '';
        },
        modifyNote(index) {
            //set status
            this.delBtnIsBlock = true;
            this.focusNote = true;
            //set UI
            this.$refs.textarea.value = this.notes[index];
            this.$refs.textarea.style.backgroundColor = '#A3BE8C';
            this.$refs.newBtn.textContent = '*Modify';
        }
    },
    watch: {
        notes: {
            handler(value) {
                localStorage.setItem('notesData', JSON.stringify(this.notes));
            },
            deep: true,
        }
    },
    mounted() {
        if (localStorage.getItem('notesData')) {
            this.notes = JSON.parse(localStorage.getItem('notesData'));
        }
    },
}).mount("#app");