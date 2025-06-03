import Logo from "../shared/ui/Logo";
import Carousel from "../shared/ui/Carousel";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import LoadingCircleSpinner from "../shared/ui/Loading";
import { FaGithub, FaTelegramPlane, FaEnvelope, FaBars } from "react-icons/fa";

const LandingPage = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1500); // симулируем загрузку
        return () => clearTimeout(timer);
    }, [])

    if (loading) return <LoadingCircleSpinner />;

    return (
        <div className="w-full h-auto flex flex-col gap-5 items-center bg-gray-100">


            <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md sticky top-0 z-50">
                <div className="flex items-center gap-4">
                    <Logo />
                    <nav className="hidden md:flex gap-6 text-sm text-gray-600 font-medium">
                        <Link to="#features" className="hover:text-black transition">Features</Link>
                        <Link to="#pricing" className="hover:text-black transition">Pricing</Link>
                        <Link to="#faq" className="hover:text-black transition">FAQ</Link>
                    </nav>
                </div>

                <div className="flex items-center gap-4">
                    <Link to="/signin" className="text-sm text-gray-600 hover:text-black transition">Sign In</Link>
                    <Link to="/dashboard">
                        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">Get Started</button>
                    </Link>
                    <button className="md:hidden text-xl text-gray-600">
                        <FaBars />
                    </button>
                </div>
            </header>



            <main className="h-auto">


                <section className="w-full py-20 bg-white">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-10">
                        <div className="md:w-1/2 text-center md:text-left">
                            <h1 className="text-4xl font-bold font-montserrat mb-4 leading-tight">
                                Track your Telegram bots <span className="text-blue-600">in real time</span>
                            </h1>
                            <p className="text-gray-600 text-lg mb-6">
                                Analyze usage, monitor performance, and generate reports with ease using Re.Bots dashboard.
                            </p>
                            <Link to="/dashboard">
                                <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
                                    Explore Dashboard
                                </button>
                            </Link>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src="/your-hero-image.svg" // <-- замени на актуальный путь
                                alt="Bot analytics illustration"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </section>



                <section className="w-full py-16 bg-blue-600 text-white mt-12">
                    <div className="max-w-3xl mx-auto px-4 text-center">
                        <h2 className="text-3xl font-bold mb-4 font-montserrat">Ready to take control of your Telegram bots?</h2>
                        <p className="text-lg mb-6">Join Re.Bots today and get real-time insights, user tracking, and custom reports — all in one place.</p>
                        <Link to="/signup">
                            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-gray-100 transition-all duration-200">
                                Create Free Account
                            </button>
                        </Link>
                    </div>
                </section>


                <div>
                    <Carousel />
                </div>


                <section className="w-full py-12">
                    <div className="max-w-5xl mx-auto px-4">
                        <h2 className="text-3xl font-bold text-center mb-8 font-montserrat">
                            Why Re.Bots?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Insights</h3>
                                <p className="text-gray-600">Understand your bot's performance with real-time analytics.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">User Tracking</h3>
                                <p className="text-gray-600">Track user engagement, growth, and retention easily.</p>
                            </div>
                            <div className="p-6 bg-gray-50 rounded-lg shadow-sm">
                                <h3 className="text-xl font-semibold mb-2">Custom Reports</h3>
                                <p className="text-gray-600">Generate shareable, downloadable reports with one click.</p>
                            </div>
                        </div>
                    </div>
                </section>




                <section className="w-full py-12 bg-gray-200">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-2xl font-bold text-center mb-8 font-montserrat">What Our Users Say</h2>
                        <div className="flex flex-col md:flex-row gap-6">
                            <div className="bg-white p-4 rounded shadow-md">
                                <p className="italic">"Re.Bots changed how I run analytics for my Telegram bots. Super useful!"</p>
                                <span className="block mt-2 text-sm font-semibold text-right">— Alex, Bot Developer</span>
                            </div>
                            <div className="bg-white p-4 rounded shadow-md">
                                <p className="italic">"Finally, a dashboard that gives me actual insights instead of raw data."</p>
                                <span className="block mt-2 text-sm font-semibold text-right">— Maria, Product Owner</span>
                            </div>
                        </div>
                    </div>
                </section>


            </main>


            <footer className="w-full py-6 flex flex-col md:flex-row justify-center items-center gap-4 bg-gray-800 text-white">
                <p className="text-sm">© {new Date().getFullYear()} Re.Bots — Built by Tetrabiter</p>
                <div className="flex gap-4 text-xl">
                    <a href="https://github.com/Tetrabiter" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                        <FaGithub />
                    </a>
                    <a href="https://t.me/@TimElesh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400 transition">
                        <FaTelegramPlane />
                    </a>
                    <a href="mailto:timofei.yelivanov@gmail.com" className="hover:text-gray-400 transition">
                        <FaEnvelope />
                    </a>
                </div>
            </footer>
        </div>
    );
}

export default LandingPage;