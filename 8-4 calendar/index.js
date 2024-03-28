const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      //instance
      calendar: null,
      // ref
      calendarApp: null,
      eventTimeDOM: null,
      //control modal
      showModal: false,
      //important data
      exercises: [],
      id: 0,
      //temporary storage
      title: null,
      whatDate: null,
      whatTime: null,
    };
  },
  methods: {
    addEvent() {
      const cld = this.calendar;
      let timeMessage = this.$refs.eventTimeDOM.value;
      if (this.title != '' && timeMessage != '') {
        let data =
        {
          id: this.id,
          title: timeMessage.slice(11, 16) + ' ' + this.title,
          start: timeMessage.slice(0, 10),
        };
        cld.addEvent(data);
        this.exercises.push(data);
        this.clsModal();
        this.id = this.id + 1;
      } else {
        this.clsModal();
        alert('輸入欄位不能空白');
      }
    },
    delExercises(info) {
      let check = confirm('確定要刪除此筆活動嗎？');
      if (check) {
        for (index in this.exercises) {
          if (this.exercises[index].title = info.event.title) {
            this.exercises.splice(index, 1);
          }
        }
        info.event.remove();
      }
    },
    openModal() {
      this.showModal = true;
    },

    clsModal() {
      this.showModal = false;
    },
  },

  watch: {
    exercises: {
      handler(value) {
        localStorage.setItem("calendarEvents", JSON.stringify(this.exercises))
      },
      deep: true,
    },
    id: {
      handler(value) {
        localStorage.setItem("calendarId", JSON.stringify(this.id))
      },
      deep: true,
    }
  },

  mounted() {
    if (localStorage.getItem("calendarEvents")) {
      this.exercises = JSON.parse(localStorage.getItem("calendarEvents"));
    }

    if (localStorage.getItem("calendarId")) {
      this.id = JSON.parse(localStorage.getItem("calendarId"));
    }

    //沒有支援v-model，但用ref也可以拿到值
    $(this.$refs.eventTimeDOM).datetimepicker({
      timepicker: true,
      format: 'Y-m-d H:i',
      minDate: 0,
    });

    this.calendar = new FullCalendar.Calendar(this.$refs.calendarApp, {
      initialView: 'dayGridMonth',
      customButtons: {
        myCustomButton: {
          text: '新增活動',
          click: this.openModal,
        }
      },
      headerToolbar: {
        left: '',
        center: 'title',
        right: 'myCustomButton today prev,next'
      },
      events: this.exercises,
      eventClick: this.delExercises,
    });

    this.calendar.render();
  },
});

app.mount("#app");