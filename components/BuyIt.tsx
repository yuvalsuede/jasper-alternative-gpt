import React from "react";


export default function GetItNow() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70">
            <div>
                <div className="flex flex-col items-center justify-center p-4 gap-4">
                    <div>
                        <div className="flex flex-col items-center gap-2">
                            <h2
                                style={{ letterSpacing: '1px'}}
                                className="text-6xl font-bold tracking-tighter text-white ">This website is for SALE <br/> #1 Google ranked</h2>
                        </div>
                    </div>
                    <button
                        className="w-[200px] bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-6 rounded-full font-semibold text-xs shadow-md
                        text-white text-5xl
                        "
                    >
                        <a href="https://www.linkedin.com/in/yuval-suede/" target="_blank">Make it yours</a>
                    </button>
                </div>
            </div>
        </div>
    )
}

