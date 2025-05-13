import Logo from "../shared/ui/Logo";
import Carousel from "../shared/ui/Carousel";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( 
        <div className="w-full h-screen flex flex-col items-center bg-gray-100">
            <header className="w-full flex items-center justify-between">
                <Logo />
                <Link to='dashboard'>
                    <button>Get Started</button>
                </Link>
            </header>


            <main className="h-[100vh]">
                <div className="flex">
                    <p className="font-montserrat font-semibold">Track your tg-bots data with Re.Bots dashboard!</p>
                    <img className="w-1/3" src="" alt="" />
                </div>

                <div>
                    <Carousel />     
                </div>
            </main>


            <footer className="w-full flex justify-center gap-3">
                <p>My github</p>
                <a href="https://github.com/Tetrabiter">Click</a> 
            </footer>
        </div>
    );
}
 
export default LandingPage;