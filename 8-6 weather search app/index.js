const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      citys: [],
      selectCity: null,
      selectNum: null,
      weather: [],

      date: '',

      zone1StartTime: '',
      zone1EndTime: '',

      zone2StartTime: '',
      zone2EndTime: '',

      zone3StartTime: '',
      zone3EndTime: '',
      wx: ['天氣概況'],
      pop: ['降雨機率(%)'],
      minT: ['最低溫度(℃)'],
      maxT: ['最高溫度(℃)'],
      ci: ['身體感受'],
    };
  },
  methods: {
    submit(index) {

      this.reset();
      this.findIndex();

      console.log(this.selectNum);
      fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-2E9239E1-5A87-4EED-9E49-0EC203115339&locationName=')
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          for (let element of response.records.location[this.selectNum].weatherElement) {
            this.weather.push(element.time);
          }

          this.date = this.weather[0][0].startTime.slice(0, 10);

          this.zone1StartTime = this.weather[0][0].startTime.slice(11, 19);
          this.zone1EndTime = this.weather[0][0].endTime.slice(11, 19);
          this.zone2StartTime = this.weather[0][1].startTime.slice(11, 19);
          this.zone2EndTime = this.weather[0][1].endTime.slice(11, 19);
          this.zone3StartTime = this.weather[0][2].startTime.slice(11, 19);
          this.zone3EndTime = this.weather[0][2].endTime.slice(11, 19);

          for (index in this.weather) {
            for (let i = 0; i <= 2; i++) {
              if (index == 0) {
                this.wx.push(this.weather[index][i].parameter.parameterName);
              }
              if (index == 1) {
                this.pop.push(this.weather[index][i].parameter.parameterName);
              }
              if (index == 2) {
                this.minT.push(this.weather[index][i].parameter.parameterName);
              }
              if (index == 3) {
                this.ci.push(this.weather[index][i].parameter.parameterName);
              }
              if (index == 4) {
                this.maxT.push(this.weather[index][i].parameter.parameterName);
              }
            }
          }
        })
        .catch(error => {
          alert('抱歉，請稍後重新嘗試。');
        })

    },
    reset() {
      this.weather = [];
      this.wx = ['天氣概況'];
      this.pop = ['降雨機率(%)'];
      this.minT = ['最低溫度(℃)'];
      this.maxT = ['最高溫度(℃)'];
      this.ci = ['身體感受'];
    },
    findIndex() {
      for (index in this.citys) {
        if (this.citys[index] == this.selectCity) {
          this.selectNum = index;
        }
      }
    }
  },
  mounted() {
    fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-2E9239E1-5A87-4EED-9E49-0EC203115339&locationName=')
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        for (city of response.records.location) {
          this.citys.push(city.locationName);
        }
      })
  }
})

app.mount("#app");