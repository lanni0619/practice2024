const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    addEvent() {
      this.showModal = false;
    },
    clsModal() {
      this.showModal = false;
    },
  },
  mounxted() {
    document.addEventListener("DOMContentLoaded", function () {
      var appEl = document.getElementById("appCalendar");
      var appCalendar = new FullCalendar.Calendar(appEl, {
        customButtons: {
          myCustomButton: {
            text: "新增活動",
            click: function () {
              this.showModal = true;
            },
          },
        },
        headerToolbar: {
          left: "prev,next today",
          center: "title",
          right: "myCustomButton",
        },
      });
      appCalendar.render();
    });
  },
});

app.mount("#app");
