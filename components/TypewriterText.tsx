import React, {useEffect, useState} from 'react';

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

const TypewriterText: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const typeSpeed = isDeleting ? 75 : 150;
        const timer = setTimeout(() => {
            if (!isDeleting && text.length === phrases[activeIndex].length) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setActiveIndex((prevIndex) => (prevIndex + 1) % phrases.length);
            } else {
                const delta = isDeleting ? -1 : 1;
                setText((prevText) => prevText.slice(0, prevText.length + delta));
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, activeIndex]);

    return (
        <span className="typewriter-text">{text} <span className="cursor"/> </span>
    );
};

export default TypewriterText;
