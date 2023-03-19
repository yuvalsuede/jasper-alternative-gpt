import React, { useEffect, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const phrases = [
    'blog posts',
    'art & images',
    'marketing copy',
    'sales emails',
    'SEO content',
    'Facebook ads',
    'web content',
    'love letters',
    'captions',
    'video scripts',
    'blog posts',
];

const RollingText: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % phrases.length);
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <TransitionGroup className="rolling-text">
            <CSSTransition key={activeIndex} timeout={1000} classNames="fade">
                <span>{phrases[activeIndex]}</span>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default RollingText;
