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
        <div className="w-full min-h-screen bg-gray-100 text-gray-800">
            <div className="flex">
                <aside className="w-1/6 min-h-screen bg-white p-4 shadow-md">
                    <div className="space-y-4">
                        <div className="flex items-center gap-2 text-lg hover:text-blue-600 cursor-pointer">
                            <AiFillHome />
                            <span>Home</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg hover:text-blue-600 cursor-pointer">
                            <IoStatsChartOutline />
                            <span>Stats</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg hover:text-blue-600 cursor-pointer">
                            <BiSupport />
                            <span>Support</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg hover:text-blue-600 cursor-pointer">
                            <AiOutlineMoon />
                            <span>Dark mode</span>
                        </div>
                        <div className="flex items-center gap-2 text-lg hover:text-blue-600 cursor-pointer">
                            <AiOutlineUser />
                            <span>Profile</span>
                        </div>
                    </div>
                </aside>

                <main className="flex-1 p-8">
                    <header className="mb-6">
                        <h1 className="text-4xl font-bold mb-2">Hello!</h1>
                        <div className="text-xl space-y-1">
                            <p>
                                Total earnings: <b className="text-green-600">$300</b>
                            </p>
                            <p>
                                Users: <b className="text-blue-500">100</b>
                            </p>
                        </div>
                    </header>

                    <div className="flex flex-col gap-5">
                        <section className="bg-white p-4 rounded-xl shadow-md">
                            <Chart options={chartOptions} series={chartSeries} type="area" />
                        </section>
                        <section className="bg-white p-4 rounded-xl shadow-md">
                            <Chart options={chartOptions} series={chartSeries} type="area" />
                        </section>
                    </div>
                </main>
            </div>
        </div>

    );
}

export default BotsPage;