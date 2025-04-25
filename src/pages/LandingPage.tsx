import Logo from "../shared/ui/Logo";
import { Link } from "react-router-dom";

const LandingPage = () => {
    return ( 
        <div className="">
            <header className="flex items-center">
                <Logo />
                <Link to='dashboard'>
                    <button>Get Started</button>
                </Link>
            </header>


            <main>
                <div>
                    <p className="font-montserrat">Track your tg-bots with Re.Bots dashboard!</p>
                    <img src="" alt="" />
                </div>

                <div>
                    <p></p>
                    <div>
                        
                    </div>
                </div>
            </main>


            <footer>
                <div>
                    <p></p>
                    <p></p>
                </div>
            </footer>
        </div>
    );
}
 
export default LandingPage;