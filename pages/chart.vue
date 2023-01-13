<template>
  <v-card color="basil">
    <v-card-title class="text-center justify-center py-6">
      <h1 class="font-weight-bold text-h2 basil--text">
        分析結果
      </h1>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="item in items"
        :key="item"
      >
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
        <v-card
          color="basil"
          flat
        >
        <Radar
          id="my-chart-id"
          :chartOptions="chartOptions"
          :chartData="chartData"
        />
        </v-card>
      </v-tab-item>
    </v-tabs-items>

  </v-card>


  </template>
  
  <script>
  import { Bar,Radar } from 'vue-chartjs'
  import 'chart.js/auto'
  // import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  // ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Radar },
    data() {
      return {
        tab: null,
        items: [
          '総合評価', '文字数', 'キーワード', '見出し','リンク','記事の新しさ'
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',

        chartData: {
            //データ項目のラベル
            labels: ["文字数","見出し数","画像数","リンク数","キーワード数","更新性"],
            //データセット
            datasets: [
                {
                    label: "評価",
                    //背景色
                    backgroundColor: "rgb(240,188,115, 0.5)",
                    //枠線の色
                    borderColor: "rgb(240,188,115)",
                    //結合点の背景色
                    pointBackgroundColor: "rgb(240,188,115)",
                    //結合点の枠線の色
                    pointBorderColor: "#fff",
                    //結合点の背景色（ホバ時）
                    pointHoverBackgroundColor: "#fff",
                    //結合点の枠線の色（ホバー時）
                    pointHoverBorderColor: "rgb(240,188,115)",
                    //結合点より外でマウスホバーを認識する範囲（ピクセル単位）
                    hitRadius: 5,
                    //グラフのデータ
                    data: [ 85.88571428571429, 62, 84.75, 83, 91.4, 100 ]
                }
            ]
        },
        chartOptions: {
          // レスポンシブ指定
          responsive: true,
          scale: {
            ticks: {
              // 最小値の値を0指定
              beginAtZero:true,
              min: 0,
              // 最大値を指定
              max: 100,
            }
          }
        }
      }
    }
  }





  </script>