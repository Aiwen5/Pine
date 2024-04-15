import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

export default function LottieAnimation({ animationData, height, width }) {
    const animationContainer = useRef(null);
    const anim = useRef(null);

    useEffect(() => {
        anim.current = lottie.loadAnimation({
            container: animationContainer.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: animationData,
        });

        return () => anim.current?.destroy();
    }, [animationData]);

    return <div ref={animationContainer} style={{ height, width }} />;
};
