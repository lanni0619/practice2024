const { createApp } = Vue;

createApp({
  data() {
    return {
      members: [],
      bills: [],
      showMemModal: false,
      memName: "",
    };
  },
  methods: {
    openAddMemModal() {
      this.showMemModal = true;
    },

    addMem() {
      this.members.push(this.memName);
      this.memName = "";
      this.showMemModal = false;
      console.log(this.member);
    },

    clsMem() {
      this.showMemModal = false;
    },
  },
}).mount("#app");
