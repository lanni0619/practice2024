const { createApp } = Vue;

const app = createApp({
  data() {

  },
  methods: {

  },
  watch: {

  },
  mounted() {
    document.addEventListener('DOMContentLoaded', function () {
      var appEl = document.getElementById('app');
      var app = new FullCalendar.Calendar(appEl, {
        customButtons: {
          myCustomButton: {
            text: 'custom!',
            click: function () {
              alert('clicked the custom button!');
            }
          }
        },
        headerToolbar: {
          left: 'prev,next today myCustomButton',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
      });
      app.render();
    })
  },
})

app.mount("#app");