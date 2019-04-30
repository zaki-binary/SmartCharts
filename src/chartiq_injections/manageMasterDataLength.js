export const manageMasterDataLength = () => {
    CIQ.ChartEngine.prototype.prepend('updateChartData', function () {
        if (this.chart.lockScroll
            && this.chart.dataSegment[0].DT.valueOf() === this.masterData[0].DT.valueOf()) {
            this.maxMasterDataSize = 0;
        } else {
            this.maxMasterDataSize = 5000;
        }
    });
};
