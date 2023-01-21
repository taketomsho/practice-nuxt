<template>
        <BoxPlotChart
          id="BoxPlot"
          :chartOptions="chartOptions"
          :chartData="chartData"
        />
  </template>
  
  <script>
  import { Bar,Radar } from 'vue-chartjs'
  import 'chart.js/auto'
  // import { BoxPlotChart } from '@sgratzl/chartjs-chart-boxplot'
  import { BoxPlotController, BoxAndWiskers} from '@sgratzl/chartjs-chart-boxplot'
  import { generateChart } from 'vue-chartjs'

  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, BoxPlotController, BoxAndWiskers)

  const BoxPlotChart = generateChart('BoxPlot', BoxPlotController);
  
  export default {
    name: 'BoxPlot',
    components: { BoxPlotChart },

    
    data() {
      return {
        tab: null,
        items: [
          '総合評価', '文字数', 'キーワード', '見出し','リンク','記事の新しさ'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

        chartData: {
          labels: ['toto'],
          datasets: [
            {
              type: 'horizontalBoxplot',
              data: [ 71875, 10760, 41030, 15004, 5164, 35847, 52174, 26684, 25813, 22841 ],
            },
          ],
        },
        chartOptions: {
          responsive: true,
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Box Plot Chart',
          },
        }
      }
    }
  }





  </script>