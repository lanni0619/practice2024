const { createApp } = Vue;

createApp({
  data() {
    return {
      notes: [
        {
          content: null,
          Index: 0,
          focusNote: true,
        },
      ],
      modifyOn: false,
      delBtnIsBlock: false,
    };
  },
  methods: {
    newNote() {
      if (this.modifyOn) {
        this.resetFocus();
        this.modifyOn = false;
        this.$refs.newBtn.textContent = "+New";
        this.delBtnIsBlock = false;
        this.notes[this.notes.length - 1].focusNote = true;
      } else {
        let data = {
          content: null,
          Index: this.notes.length,
          focusNote: true,
        };
        this.notes[this.notes.length - 1].focusNote = false;
        this.notes.push(data);
      }
    },
    modifyNote(note, index) {
      //set status
      this.resetFocus();
      this.notes[index].focusNote = true;
      this.modifyOn = true;
      this.modifyIndex = index;
      //set UI
      this.delBtnIsBlock = true;
      this.$refs.newBtn.textContent = "*Modify";
    },
    resetFocus() {
      for (index in this.notes) {
        this.notes[index].focusNote = false;
      }
    },
    delNote(index) {
      this.notes.splice(index, 1);
      this.resetFocus();
      if (this.notes.length == 0) {
        let data = {
          content: null,
          Index: this.notes.length,
          focusNote: true,
        };
        this.notes.push(data);
      }
      // this.notes[this.notes.length - 1].focusNote = true;
    },
  },
  // watch: {
  //   notes: {
  //     handler(value) {
  //       localStorage.setItem("notesData", JSON.stringify(this.notes));
  //     },
  //     deep: true,
  //   },
  // },
  // mounted() {
  //   if (localStorage.getItem("notesData")) {
  //     this.notes = JSON.parse(localStorage.getItem("notesData"));
  //   }
  // },
}).mount("#app");
