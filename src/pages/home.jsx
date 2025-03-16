import PageHeader from '../components/shared/pageHeader/PageHeader'
import PageHeaderDate from '../components/shared/pageHeader/PageHeaderDate'
import React from 'react'
import Chart from "react-apexcharts";

const Home = () => {

    const options = {
        chart: {
            height: 350,
            type: "line",
        },
        forecastDataPoints: {
            count: 7,
        },
        stroke: {
            width: 5,
            curve: "smooth",
        },
        xaxis: {
            type: "datetime",
            categories: [
                "1/11/2000",
                "2/11/2000",
                "3/11/2000",
                "4/11/2000",
                "5/11/2000",
                "6/11/2000",
                "7/11/2000",
                "8/11/2000",
                "9/11/2000",
                "10/11/2000",
                "11/11/2000",
                "12/11/2000",
                "1/11/2001",
                "2/11/2001",
                "3/11/2001",
                "4/11/2001",
                "5/11/2001",
                "6/11/2001",
            ],
            tickAmount: 10,
            labels: {
                formatter: function (value, timestamp, opts) {
                    return opts.dateFormatter(new Date(timestamp), "dd MMM");
                },
            },
        },
        title: {
            text: "New Request",
            align: "left",
            style: {
                fontSize: "16px",
                color: "#666",
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                gradientToColors: ["#FDD835"],
                shadeIntensity: 1,
                type: "horizontal",
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100, 100, 100],
            },
        },
    };

    const series = [
        {
            name: "Sales",
            data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
        },
    ];;

    return (
        <>
            <PageHeader >
                <PageHeaderDate />
            </PageHeader>
            <div className='main-content'>
                <div className="row">
                    <div className="col-12 col-lg-4">
                        <div className='card'>
                            <div className="d-flex px-3 py-3 justify-content-start align-items-baseline gap-2">
                                <h1 className='mb-0'>50</h1>
                                <p className='mb-0'>New Help Requests</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className='card'>
                            <div className="d-flex px-3 py-3 justify-content-start align-items-baseline gap-2">
                                <h1 className='mb-0'>50k+</h1>
                                <p className='mb-0'>Women Provide Safty</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className='card'>
                            <div className="d-flex px-3 py-3 justify-content-start align-items-baseline gap-2">
                                <h1 className='mb-0'>500</h1>
                                <p className='mb-0'>Volunteers</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="card">
                            <Chart options={options} series={series} type="line" height={350} />
                        </div>
                    </div>
                    <div className="col-12 col-lg-6">
                        <div className="card">
                            <Chart options={options} series={series} type="line" height={350} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}

export default Home