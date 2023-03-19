import {useEffect, useState} from 'react';

// @ts-ignore
const Toast = ({message, duration = 3000, onDismiss}) => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
            if (onDismiss) {
                onDismiss();
            }
        }, duration);
        return () => clearTimeout(timer);
    }, [duration, onDismiss]);

    if (!visible) return null;

    return (
        <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg">
            {message}
        </div>
    );
};

export default Toast;
