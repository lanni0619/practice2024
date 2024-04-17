const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      citys: [],
      selectCity: null,
      selectNum: null,
      weather: [],

      zone1Data: [],
      zone2Data: [],
      zone3Data: [],

      zone1Img: null,
      zone2Img: null,
      zone3Img: null,
    };
  },
  methods: {
    submit(index) {

      this.reset();
      this.findIndex();

      fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-2E9239E1-5A87-4EED-9E49-0EC203115339&locationName=')
        .then((response) => {
          return response.json();
        })
        .then((response) => {
          for (let element of response.records.location[this.selectNum].weatherElement) {
            this.weather.push(element.time);
          }
          for (index in this.weather) {
            for (let i = 0; i <= 2; i++) {
              if (i == 0) {
                this.zone1Data.push(this.weather[index][i].parameter.parameterName);
              }
              if (i == 1) {
                this.zone2Data.push(this.weather[index][i].parameter.parameterName);
              }
              if (i == 2) {
                this.zone3Data.push(this.weather[index][i].parameter.parameterName);
              }
            }
          }
          console.log(this.zone1Data[0].search("晴"));
          if (this.zone1Data[0].search("晴") != -1 && this.zone1Data[0].search("雨") == -1) {
            this.zone1Img = 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg';
          } else if (this.zone1Data[0].search("晴") == -1 && this.zone1Data[0].search("雨") != -1) {
            this.zone1Img = 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/11.svg'
          } else {
            this.zone1Img = 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/06.svg';
          }

          if (this.zone2Data[0].search("晴") != -1 && this.zone2Data[0].search("雨") == -1) {
            this.zone2Img = 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg';
          } else if (this.zone2Data[0].search("晴") == -1 && this.zone2Data[0].search("雨") != -1) {
            this.zone2Img = 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/11.svg'
          } else {
            this.zone2Img = 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/06.svg';
          }

          if (this.zone3Data[0].search("晴") != -1 && this.zone3Data[0].search("雨") == -1) {
            this.zone3Img = 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/02.svg';
          } else if (this.zone3Data[0].search("晴") == -1 && this.zone3Data[0].search("雨") != -1) {
            this.zone3Img = 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/11.svg'
          } else {
            this.zone3Img = 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/night/06.svg';
          }
        })
        .catch(error => {
          alert('抱歉，請稍後重新嘗試。');
        })
    },
    reset() {
      this.weather = [];
      this.zone1Data = [];
      this.zone2Data = [];
      this.zone3Data = [];
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