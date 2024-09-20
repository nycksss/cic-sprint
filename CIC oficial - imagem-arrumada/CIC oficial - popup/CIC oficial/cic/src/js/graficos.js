const chartConfig = {
    type: 'line',
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                display: true,
            },
            y: {
                display: true,
            },
        },
        elements: {
            line: {
                tension: 0,
            },
            point: {
                radius: 0,
            },
        },
    },
};


new Chart(document.getElementById('receitaOperacionalChart'), {
    ...chartConfig,
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            data: [0, 70, 75, 80, 85, 85, 85, 80, 75, 80, 100, 90],
            borderColor: '#31B574',
            backgroundColor: ['rgba(234, 234, 234, .7)'],
            fill: true
        }],
    },
});

new Chart(document.getElementById('margemContribuicaoChart'), {
    ...chartConfig,
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            data: [0, 67, 75, 40, 72, 60, 60, 70, 75, 64, 86, 100],
            borderColor: '#31B574',
            backgroundColor: ['rgba(234, 234, 234, .7)'],
            fill: true
        }],
    },
});

new Chart(document.getElementById('mcGeralChart'), {
    ...chartConfig,
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Maio', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
        datasets: [{
            data: [0, 100, 80, 85, 70, 85, 80, 85, 83, 70, 85, 92],
            borderColor: '#31B574',
            backgroundColor: ['rgba(234, 234, 234, .7)'],
            fill: true
        }],
    },
});