let myChart1 = document.getElementById('bar').getContext('2d');
let myChart2 = document.getElementById('pie').getContext('2d');
let myChart3 = document.getElementById('line').getContext('2d');
// Global Options
Chart.defaults.font.family = 'Lato';
Chart.defaults.font.size = 18;
Chart.defaults.font.weight = 'bolder';
Chart.defaults.font.color = '#2E3440';


let chart1 = new Chart(myChart1, {
    type: 'bar', //bar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: '股利',
            data: [4.3, 5, 4.5, 2, 4, 4.2, 4, 5.2, 5.3, 0],
            backgroundColor: ['lightgray'],
            borderWidth: 0,
            hoverBorderWidth: 2,
            hoverBorderColor: '#A3BE8C',
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '鴻海近10年配息',
                color: '#BF616A',
                font: { size: 36 },
            },
            legend: {
                display: false,
                position: 'right',
                // fontColor: 'black',
            },
            tooltip: {
                enabled: true,
            },
        },
        layout: {
            padding: {
                // left: 30,
                // right: 30,
                // bottom: 0,
                // top: 0,
            },
        },
    }
});

let chart2 = new Chart(myChart2, {
    type: 'line', //bar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
        datasets: [{
            label: '股價',
            data: [99.7, 90.1, 122.5, 97.4, 97.2, 93.4, 134.5, 116, 116.5, 123.5],
            borderWidth: 1,
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '鴻海歷年股價(最高)',
                color: '#D08770',
                font: { size: 36 },
            },
            legend: {
                display: false,
                position: 'right',
                // fontColor: 'black',
            },
            tooltip: {
                enabled: true,
            },
        },
        layout: {
            padding: {
                // left: 30,
                // right: 30,
                // bottom: 0,
                // top: 0,
            },
        },
    }
});

let chart3 = new Chart(myChart3, {
    type: 'pie', //bar, pie, line, doughnut, radar, polarArea
    data: {
        labels: ['MattOlson', 'KyleSchwarber', 'PeteAlonso', 'ShoheiOhtani', 'RonaldAcuña'],
        datasets: [{
            label: 'HR',
            data: [54, 47, 46, 44, 41],
            backgroundColor: ['#BF616A', '#D08770', '#EBCB8B', '#A3BE8C', '#B48EAD'],
            borderWidth: 0,
            hoverBorderWidth: 2,
            hoverBorderColor: '#A3BE8C',
        }],
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: '2023 HR Rank (TOP 5)',
                color: '#BF616A',
                font: { size: 36 },
            },
            legend: {
                display: true,
                position: 'right',
                // fontColor: 'black',
            },
            tooltip: {
                enabled: true,
            },
        },
        layout: {
            padding: {
                // left: 30,
                // right: 30,
                // bottom: 0,
                // top: 0,
            },
            autoPadding: true,
        },
    }
});