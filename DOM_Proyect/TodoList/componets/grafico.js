import * as echarts from "echarts";

export default function crearGrafico(){
    
    const contenedor = document.querySelector(".grafico-container");

    const width = contenedor.clientWidth;
    const height = contenedor.clientHeight;

var option;

option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [50, 250],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
      ]
    }
  ]
};

const miGrafico = echarts.init(contenedor, "dark");
miGrafico.resize({width, height});

miGrafico.setOption(option);
return miGrafico;


    // const datos = {
    //     meses : [
    //         "Enero",
    //         "Febrero",
    //         "Marzo",
    //         "Abril",
    //         "Mayo",
    //         "Junio",
    //         "Julio",
    //         "Agosto",
    //         "Septiembre",
    //         "Octubre",
    //         "Noviembre",
    //         "Diciembre",
    //     ],
    //     valores : [90,89,38,23,34,6,7,23,400,23,34,54]
    // };

    // const opciones = {
    //     title: {
    //         text: "Grafico de Prueba",
    //     },
    //     xAxis: {
    //         data: datos.meses,
    //     },
    //     yAxis: {

    //     },
    //     series: [
    //         {
    //             data:datos.valores,
    //             type: 'pie',
    //             radius: [50, 250],
    //             center: ['50%', '50%'],
    //             roseType: 'area',
    //             itemStyle: {
    //               borderRadius: 8
    //             }
    //         },
    //     ]
    // };


}