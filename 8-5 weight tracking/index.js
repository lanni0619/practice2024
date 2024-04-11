const { createApp } = Vue;

const app = createApp({
  chartJs: null,
  data() {
    return {
      labels: [],

      record: [],

      weights: [],
      dates: [],
    };
  },
  methods: {

    submitRecord() {
      let data =
      {
        date: this.$refs.inputDate.value,
        weight: this.$refs.inputWeight.value,
      }
      this.record.push(data);

      this.record.sort(function (a, b) {
        return new Date(a.date) - new Date(b.date);
      });

      this.dates = [];
      this.weights = [];
      for (data of this.record) {
        this.dates.push(data.date);
        this.weights.push(data.weight);
      }

      this.chartJs.data.labels = JSON.parse(JSON.stringify(this.dates))
      this.chartJs.data.datasets[0].data = JSON.parse(JSON.stringify(this.weights))
      this.chartJs.update();
      this.$refs.inputWeight.value = null;
      this.$refs.inputDate.value = null;
    },

    del(index) {
      console.log(index);
      this.weights.splice(index, 1);
      this.dates.splice(index, 1);
      this.record.splice(index, 1);
      this.chartJs.data.labels = JSON.parse(JSON.stringify(this.dates))
      this.chartJs.data.datasets[0].data = JSON.parse(JSON.stringify(this.weights))
      this.chartJs.update();
    }
  },
  watch: {
    record: {
      handler(value) {
        localStorage.setItem("chartRecord", JSON.stringify(this.record))
      },
      deep: true,
    },
    weights: {
      handler(value) {
        localStorage.setItem("chartWeights", JSON.stringify(this.weights))
      },
      deep: true,
    },
    dates: {
      handler(value) {
        localStorage.setItem("chartDates", JSON.stringify(this.dates))
      },
      deep: true,
    }
  },
  mounted() {
    //沒有支援v-model，但用ref也可以拿到值
    $(this.$refs.inputDate).datetimepicker({
      timepicker: false,
      format: 'Y-m-d',
      // 'Y-m-d H:i'
      minDate: 0,
    });

    if (localStorage.getItem("chartWeights")) {
      this.weights = JSON.parse(localStorage.getItem("chartWeights"));
    }
    if (localStorage.getItem("chartRecord")) {
      this.record = JSON.parse(localStorage.getItem("chartRecord"));
    }
    if (localStorage.getItem("chartDates")) {
      this.dates = JSON.parse(localStorage.getItem("chartDates"));
    }

    this.chartJs = new Chart(this.$refs.ctx, {
      type: 'line',
      data: {
        labels: JSON.parse(JSON.stringify(this.dates)),
        datasets: [{
          label: 'weight',
          data: JSON.parse(JSON.stringify(this.weights)),
          fill: false,
          borderColor: '#5E81AC',
          tension: 0.1,
          borderWidth: 5
        }]
      },
      options: {}
    });
  }
})

app.mount("#app");