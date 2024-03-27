const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      showModal: false,
      exercises: [],
      title: '',
      eventTime: '',
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    addEvent() {
      let data = {
        title: this.title,
        eventTime: this.eventTime,
      };
      this.exercises.push(data);
      this.showModal = false;
      console.log(this.exercises);
    },
    clsModal() {
      this.showModal = false;
    },
    createCalendar() {
      let openModal = this.openModal;
      var calendarEl = document.getElementById('app');
      var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        customButtons: {
          myCustomButton: {
            text: '新增活動',
            click: function () {
              openModal();
            }
          }
        },
        headerToolbar: {
          left: 'prev,next today myCustomButton',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }
      });
      calendar.on('dateClick', function (info) {
        console.log('clicked on ' + info.dateStr);
      });
      calendar.render();
    },
  },
  watch: {
    // showModal: {
    //   handler(value) {
    //     localStorage.setItem("showModal", JSON.stringify(this.showModal))
    //   },
    //   deep: true,
    // }
  },
  created() {
    this.createCalendar();
  },
  mounted() {
    // datetimepicker
    $.datetimepicker.setLocale('zh');
    $('#datetimepicker1').datetimepicker();

    // if (localStorage.getItem("split_members")) {
    //   this.members = JSON.parse(localStorage.getItem("split_members"));
    // }
    // if (localStorage.getItem("split_bills")) {
    //   this.bills = JSON.parse(localStorage.getItem("split_bills"));
    // }
  },
});

app.mount("#app");