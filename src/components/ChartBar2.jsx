import { useEffect } from 'react';
import Chart from 'chart.js/auto';
import { Card }        from   "@material-tailwind/react";
import { CardHeader }  from   "@material-tailwind/react";
import { CardBody }    from   "@material-tailwind/react";
import { CardFooter }  from   "@material-tailwind/react";



    
export function ChartBar2() {
    
    useEffect(() => { 
        var config = {
            type: 'bar',
            data: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                ],
                datasets: [
                    {
                        label: new Date().getFullYear(),
                        backgroundColor: '#03a9f4',
                        borderColor: '#03a9f4',
                        data: [65, 78, 66, 44, 56, 67, 75],
                        fill: false,
                    },
                    {
                        label: new Date().getFullYear() - 1,
                        fill: false,
                        backgroundColor: '#ff9800',
                        borderColor: '#ff9800',
                        data: [40, 68, 86, 74, 56, 60, 87],
                    },
                ],
            },
            options: {
                maintainAspectRatio: false,
                responsive: true,
                title: {
                    display: false,
                    text: 'Sales Charts',
                    fontColor: 'white',
                },
                legend: {
                    labels: {
                        fontColor: 'black',
                    },
                    align: 'end',
                    position: 'bottom',
                },
                tooltips: {
                    mode: 'index',
                    intersect: false,
                },
                hover: {
                    mode: 'nearest',
                    intersect: true,
                },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
            },
        };
        var ctx = document.getElementById('chart-Bar');
        const chart = new Chart(ctx, config);
    }, []);


    return (
        <Card className="w-auto mt-6">
          <CardHeader  className=" bg-orange-600 relative h-8">
            <h3 className="text-white ">Titulo do Grafico</h3>
          </CardHeader>
          <CardBody className="text-center">
            <div className='container'>
            <canvas id="chart-Bar" width="300" height="300"></canvas>
                
            </div>
          </CardBody>
          <CardFooter divider className="flex items-center justify-between py-3">
            <h1>graf</h1>
          </CardFooter>
        </Card>
    )

        
}