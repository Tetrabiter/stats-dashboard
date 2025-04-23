import Chart from "../shared/ui/Chart";
import { AiFillHome } from "react-icons/ai";
import { IoStatsChartOutline } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { AiOutlineMoon } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";

const BotsPage = () => {

    const chartOptions = {
        chart: {
            id: 'basic-line'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May']
        },
        title: {
            text: 'Продажи по месяцам',
            align: 'left' as const
        }
    };

    const chartSeries = [
        {
            name: 'Продажи',
            data: [30, 40, 35, 50, 49]
        },
        {
            name: 'Пользователи',
            data: [60, 80, 65, 110, 95]
        },
        {
            name: 'Заказы',
            data: [70, 70, 95, 100, 195]
        }
    ];



    return (
        <div className="w-full min-h-screen">
            <div className="flex">
                <aside className="w-1/6">
                    <div className="w-full flex items-center gap-2 text-xl">
                        <AiFillHome/>
                        <p>Home</p>
                    </div>
                    <div className="w-full flex items-center gap-2 text-xl">
                        <IoStatsChartOutline/>
                        <p>Stats</p>
                    </div>
                    <div className="w-full flex items-center gap-2 text-xl">
                        <BiSupport />
                        <p>Support</p>
                    </div>
                    <div className="w-full flex items-center gap-2 text-xl">
                        <AiOutlineMoon />
                        <p>Dark mode</p>
                    </div>
                    <div className="w-full flex items-center gap-2 text-xl">
                        <AiOutlineUser />
                        <p>Profile</p>
                    </div>
                </aside>

                <div className="">
                    <div>
                        <p className="text-3xl font-bold">Hello!</p>
                    </div>
                    <div className="text-2xl font-semibold">
                        <p>Total earnings: <b className="text-green-700">300$</b></p>
                        <p>Users:<b className="text-blue-500"> 100</b></p>
                    </div>
                    <div>
                        <Chart
                            options={chartOptions}
                            series={chartSeries}
                            type="area"
                            height={400}
                            width={800}
                        />
                        <Chart
                            options={chartOptions}
                            series={chartSeries}
                            type="line"
                            height={400}
                            width={800}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BotsPage;