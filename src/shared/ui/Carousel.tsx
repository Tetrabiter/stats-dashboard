import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const messages = [
    '🎉 Добро пожаловать в Re.Bots!',
    '📊 Следите за своими ботами в реальном времени.',
    '🔔 Получайте уведомления о действиях пользователей.',
    '🚀 Начните прямо сейчас и получите больше данных!',
];

const Carousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % messages.length);
        }, 4000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="w-full mt-10 flex justify-center">
            <div className="bg-blue-50 border border-blue-200 rounded-lg px-7 py-4 shadow-sm min-h-[90px] max-w-xl w-full text-center">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-lg font-medium text-blue-800 font-montserrat"
                    >
                        {messages[index]}
                    </motion.p>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Carousel;
