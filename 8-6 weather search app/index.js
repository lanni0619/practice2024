const { createApp } = Vue;

const app = createApp({
  data() {
    return {

    };
  },
  methods: {

  },
  mounted() {
    fetch('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWA-2E9239E1-5A87-4EED-9E49-0EC203115339&format=JSON&locationName=%E6%96%B0%E5%8C%97%E5%B8%82')
      .then(res => res.json())
      .then(json => {
        console.log(json);
      })
  }
})

app.mount("#app");