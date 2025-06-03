"use client"

function LoadingCircleSpinner() {
    return (
        <div className="w-full h-screen flex items-center justify-center bg-white">
            <div className="animate-spin bg-blue-300 rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
        </div>
    )
}

export default LoadingCircleSpinner
