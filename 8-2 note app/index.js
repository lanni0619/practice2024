const { createApp } = Vue;

createApp({
  data() {
    return {
      notes: [
        {
          content: null,
          Index: 0,
          focusNote: true,
          showNote: false,
        },
      ],
      countIndex: 0,
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
        this.notes[this.notes.length - 1].focusNote = false;
        this.createNewNote();
      }
    },
    modifyNote(note, index) {
      if (index != this.notes.length - 1) {
        //set status
        this.resetFocus();
        this.notes[index].focusNote = true;
        this.modifyOn = true;
        this.modifyIndex = index;
        //set UI
        this.delBtnIsBlock = true;
        this.$refs.newBtn.textContent = "*Modify";
      }
    },
    resetFocus() {
      for (index in this.notes) {
        this.notes[index].focusNote = false;
      }
    },
    delNote(index) {
      if (this.notes.length <= 1) {
        this.notes.splice(index, 1);
        this.createNewNote();
      } else if (this.notes.length > 1) {
        if (index == this.notes.length - 1) {
          this.notes.splice(index, 1);
          this.createNewNote();
        } else {
          this.notes.splice(index, 1);
        }
      }
    },
    createNewNote() {
      this.notes[this.notes.length - 1].showNote = true;
      this.countIndex = this.countIndex + 1;
      let data = {
        content: null,
        Index: this.countIndex,
        focusNote: true,
        showNote: false,
      };
      this.notes.push(data);
      console.log(this.notes);
    },
  },
  watch: {
    notes: {
      handler(value) {
        localStorage.setItem("noteBookData", JSON.stringify(this.notes))
        localStorage.setItem("countIndex", JSON.stringify(this.countIndex));
      },
      deep: true,
    },
  },
  mounted() {
    if (localStorage.getItem("noteBookData")) {
      this.notes = JSON.parse(localStorage.getItem("noteBookData"));
      this.countIndex = JSON.parse(localStorage.getItem("countIndex"));
    }
  },
}).mount("#app");
