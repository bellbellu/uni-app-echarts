<template>
	<!-- <u-rate count="count" v-model="value"></u-rate> -->
	<view class="container">
	   <view>
		   <view class="canvasView">
			<mpvue-echarts class="ec-canvas" @onInit="lineInit" canvasId="line" ref="lineChart" />
		</view>
	   </view>
   </view>
</template>

<script>
	import * as echarts from '@/components/echarts/echarts.min.js';
	import mpvueEcharts from '@/components/mpvue-echarts/src/echarts.vue';
	export default {
		created () {
			console.log(this.$store.state.user.userInfo)
		},
		data() {
			return {
				count: 4,
				value: 2,
				updateStatus: false,
				line: {
					title: {
					        text: '堆叠区域图'
					    },
					    tooltip: {
					        trigger: 'axis',
					        axisPointer: {
					            type: 'cross',
					            label: {
					                backgroundColor: '#6a7985'
					            }
					        }
					    },
					    legend: {
					        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
					    },
					    toolbox: {
					        feature: {
					            saveAsImage: {}
					        }
					    },
					    grid: {
					        left: '3%',
					        right: '4%',
					        bottom: '3%',
					        containLabel: true
					    },
					    xAxis: [
					        {
					            type: 'category',
					            boundaryGap: false,
					            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
					        }
					    ],
					    yAxis: [
					        {
					            type: 'value'
					        }
					    ],
					    series: [
					        {
					            name: '邮件营销',
					            type: 'line',
					            stack: '总量',
					            areaStyle: {},
					            data: [120, 132, 101, 134, 90, 230, 210]
					        },
					        {
					            name: '联盟广告',
					            type: 'line',
					            stack: '总量',
					            areaStyle: {},
					            data: [220, 182, 191, 234, 290, 330, 310]
					        },
					        {
					            name: '视频广告',
					            type: 'line',
					            stack: '总量',
					            areaStyle: {},
					            data: [150, 232, 201, 154, 190, 330, 410]
					        },
					        {
					            name: '直接访问',
					            type: 'line',
					            stack: '总量',
					            areaStyle: {},
					            data: [320, 332, 301, 334, 390, 330, 320]
					        },
					        {
					            name: '搜索引擎',
					            type: 'line',
					            stack: '总量',
					            label: {
					                normal: {
					                    show: true,
					                    position: 'top'
					                }
					            },
					            areaStyle: {},
					            data: [820, 932, 901, 934, 1290, 1330, 1320]
					        }
					    ]
				}
			}
		},
		methods: {
			lineInit(e) {
                let {
                    width,
                    height
                } = e;
                let canvas = this.$refs.lineChart.canvas
                echarts.setCanvasCreator(() => canvas);
                let lineChart = echarts.init(canvas, null, {
                    width: width,
                    height: height
                })
                canvas.setChart(lineChart)
                lineChart.setOption(this.line)
                this.$refs.lineChart.setChart(lineChart)
            },
		},
		components: {
			mpvueEcharts
		}
	}
</script>

<style>
	/*.co ntainer {
		padding: 20px;
		font-size: 14px;
		line-height: 24px;
	} */
	.ec-canvas {
		display: flex;
		height: 100%;
		flex: 1;
	}

	.canvasView {
		width: 700upx;
		height: 500upx;
	}
</style>
