const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      chartJs: null,
      labels: null,
      data: null,
    };
  },
  methods: {

  },
  mounted() {
    this.labels = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'Jul'];
    this.data = {
      labels: this.labels,
      datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1
      }]
    };
    this.chartJs = new Chart(this.$refs.ctx, {
      type: 'line',
      data: this.data,
      options: {

      }
    });
  }
})

app.mount("#app");