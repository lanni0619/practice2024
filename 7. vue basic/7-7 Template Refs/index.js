const { createApp } = Vue;

createApp({
  data() {
    return {
      noteTitle: null,
      noteContent: null,
      noteColor: null,
      notes: [
        {
          title: "Title",
          content: "Default",
          color: "#BF616A",
        },
      ],
    };
  },
  methods: {
    addNote() {
      let is_noteTitle = this.noteTitle != null;
      let is_noteContent = this.noteContent != null;
      let is_noteColor = this.noteColor != null;
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
  watch: {
    notes: {
      handler: function (newValue, oldValue) {
        localStorage.setItem("data", JSON.stringify(newValue));
      },
      deep: true,
    },
  },
  mounted() {
    const localData = JSON.parse(localStorage.getItem("data"));
    if (localData) {
      this.notes = localData;
    }
    // use autosize package on ref textareaDOM
    autosize(this.$refs.textareaDOM);
  },
}).mount("#app");
