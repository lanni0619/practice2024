new Vue({
  el: '#app',
  data() {
    return {
      calendarPlugins: [FullCalendar.dayGridPlugin],
      initialView: 'dayGridMonth',
      events: [
        { title: 'Event 1', date: '2024-03-25' },
        { title: 'Event 2', date: '2024-03-26' }
      ]
    };
  }
});