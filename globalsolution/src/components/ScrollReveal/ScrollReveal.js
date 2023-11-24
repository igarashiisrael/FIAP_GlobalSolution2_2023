import React, { useState, useEffect } from 'react';

const ScrollReveal = ({ children, className }) => {
    const [isVisible, setIsVisible] = useState(false);

    const domRef = React.useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setIsVisible(entry.isIntersecting));
        });

        const { current } = domRef;
        observer.observe(current);

        return () => observer.unobserve(current);
    }, []);

    return (
        <div
            className={`${className} ${isVisible ? 'is-visible' : ''}`}
            ref={domRef}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
