const { createApp } = Vue;
const app = createApp({
  data() {
    return {
      calendar: null,
      showModal: false,
      exercises: [],
      title: '',
      timeMessage: '',
      id: 0,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    addEvent() {
      let data = {
        id: this.id,
        title: this.title,
        start: this.timeMessage,
      };
      this.exercises.push(data);

      this.calendar.addEvent({
        id: this.exercises[this.id].id,
        title: String(this.exercises[this.id].title),
        start: '2024/03/25'
      })

      this.showModal = false;
      this.id = this.id + 1;
      // this.calendar.addEvent({
      //   id: 1,
      //   title: 'dynamic event',
      //   start: '2024-03-27',
      // })
    },
    clsModal() {
      this.showModal = false;
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
  mounted() {
    const vm = this; // 儲存Vue instance的引用
    var calendarEl = this.$refs.calendar; // = document.getElementById('#calendar')
    jQuery.datetimepicker.setLocale('en');
    const inputElement = this.$refs.datetimepicker;

    // datetimepicker套件可能是直接操作DOM不會經過Vue的系統，即便在DOM加上v-model也不行，因此要手動監聽
    jQuery(inputElement).datetimepicker({
      timepicker: false,
      onChangeDateTime: function (dp, $input) {
        // vm.updateTimeMessage($input.val());
        vm.timeMessage = $input.val();
      }
    });

    this.calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      customButtons: {
        myCustomButton: {
          text: '新增活動',
          click: function () {
            vm.openModal();
          }
        }
      },
      headerToolbar: {
        left: 'prev,next today myCustomButton',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: [
        // {
        //   id: 'a',
        //   title: 'my event',
        //   start: '2024-03-27'
        // },
        // {
        //   id: 'b',
        //   title: 'my event2',
        //   start: '2024-03-28'
        // },
      ]
    });
    this.calendar.render();
  },
});

app.mount("#app");