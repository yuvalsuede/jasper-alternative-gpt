import React from 'react';

interface GoProPopupProps {
    onClose: () => void;
}

const GoProPopup: React.FC<GoProPopupProps> = ({onClose}) => {

    // @ts-ignore
    // @ts-ignore
    return (
        <div
            className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50 z-50">
            <div className="w-11/12 md:w-1/3 p-2 md:p-8 z-10 relative bg-white">
                <div className="flex justify-center items-center mb-2">
                    <i className="fas fa-coffee"></i>
                </div>
                <h1 className="text-black text-3xl md:text-4xl text-center font-bold mb-0">There is no Pro Plan</h1>
                <div className="w-5/6 md:w-3/4 mx-auto my-4 text-justify">
                    <p className="mb-2"> If you're a fan of Jema.ai, feel free to show your support by buying me a
                        coffee. </p>
                    <p>
                        {' '}
                        Also if you have any questions or feature requests, don't be shy! Hit me up on {' '}
                        <a target="_blank" rel="noreferrer" className="text-purple-700 font-bold"
                           href="https://www.linkedin.com/in/yuval-suede/">
                            Linkedin
                        </a>
                    </p>
                    <div className="mt-10 flex justify-center justify-items-center">
                        <a href='https://ko-fi.com/C0C8JN3UL' target='_blank'>
                            <img height='36'
                                                                                   style={{border:0, height:'36px'}}
                                                                                   src='https://storage.ko-fi.com/cdn/kofi1.png?v=3'
                                                                                   alt='Buy Me a Coffee at ko-fi.com'/></a>
                    </div>
                </div>

                <button className="absolute top-2 right-2 text-xl font-bold" onClick={onClose}>
                    &times;
                </button>
            </div>
        </div>
    );
};

export default GoProPopup;
