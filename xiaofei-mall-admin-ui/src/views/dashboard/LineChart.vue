<template>
    <div :class="className" :style="{ height: height, width: width }" />

</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
import resize from './mixins/resize'

export default {
    mixins: [resize],
    props: {
        className: {
            type: String,
            default: 'chart'
        },
        width: {
            type: String,
            default: '100%'
        },
        height: {
            type: String,
            default: '350px'
        },
        autoResize: {
            type: Boolean,
            default: true
        },
        chartData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            chart: null,
            // 最近七天日期
            recentDates: [],
            // 最近七天销售数据【随机生成最近七天数据】
            recentDatas: []
        }
    },
    watch: {
        chartData: {
            deep: true,
            handler(val) {
                this.setOptions(val)
            }
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.initChart()
        })
        this.generateRecentDates();
    },
    beforeDestroy() {
        if (!this.chart) {
            return
        }
        this.chart.dispose()
        this.chart = null
    },
    methods: {
        generateRecentDates() {
            const today = new Date();
            const recentDates = [];
            const recentDatas = [];

            for (let i = 6; i >= 0; i--) {
                const currentDate = new Date(today);
                currentDate.setDate(today.getDate() - i);
                const formattedDate = this.formatDate(currentDate);
                recentDates.push(formattedDate);
                recentDatas.push(Math.floor(Math.random() * 5000));
            }
            this.recentDates = recentDates;
            this.recentDatas = recentDatas;
        },
        formatDate(date) {
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        },
        initChart() {
            this.chart = echarts.init(this.$el, 'macarons')
            this.setOptions(this.chartData)
        },
        setOptions({ expectedData, actualData } = {}) {
            this.chart.setOption({
                xAxis: {
                    data: this.recentDates,
                    boundaryGap: false,
                    axisTick: {
                        show: false
                    }
                },
                grid: {
                    left: 40,
                    right: 40,
                    bottom: 20,
                    top: 30,
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'cross'
                    },
                    padding: [5, 10]
                },
                yAxis: {
                    axisTick: {
                        show: false
                    }
                },
                legend: {
                    data: ['最近7天订单总量', 'actual']
                },
                series: [{
                    name: '当天订单量', itemStyle: {
                        normal: {
                            color: '#FF005A',
                            lineStyle: {
                                color: '#FF005A',
                                width: 2
                            }
                        }
                    },
                    smooth: true,
                    type: 'line',
                    data: this.recentDatas,
                    animationDuration: 2800,
                    animationEasing: 'cubicInOut'
                }]
            })
        }
    }
}
</script>
