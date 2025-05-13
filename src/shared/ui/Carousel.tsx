import { useState , useEffect } from "react";

const messages = [
    'Добро пожаловать!',
    'Следите за задачами.',
    'Получайте уведомления.',
    'Начнём прямо сейчас!',
];


const Carousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() =>{
        const timer = setInterval(() =>{
            setIndex((prev) => (prev + 1) % messages.length);
        }, 3000);

        return () => clearInterval(timer);
    }, []);

    return ( 
        <div className="h-6 text-center">
            <p>{messages[index]}</p>
        </div>
    );
}
 
export default Carousel;