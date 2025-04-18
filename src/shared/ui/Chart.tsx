import ReactApexChart from 'react-apexcharts';

interface ChartProps {
  series: ApexAxisChartSeries;
  options: ApexCharts.ApexOptions;
  type?: 'line' | 'bar' | 'area' | 'pie' | 'donut' | 'radar' | 'scatter';
  width?: number | string;
  height?: number | string;
}

const Chart: React.FC<ChartProps> = ({ series, options, type = 'line', width = '100%', height = 350 }) => {
  return (
    <ReactApexChart
      options={options}
      series={series}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Chart;
