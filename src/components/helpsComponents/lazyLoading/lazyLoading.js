import React, {useEffect, useRef, useState} from 'react';


const LazyLoading = ({src, width, className, height, file, alt}) => {
    const placeholderRef = useRef(null)
    const [shown, setShown] = useState(false)
    useEffect(() => {
        const obsrv = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) {
                    setShown(true)
                    obsrv.unobserve(placeholderRef.current)
                }
            }
        )

        if (placeholderRef && placeholderRef.current) {
            obsrv.observe(placeholderRef.current)
        }
    }, [shown])

    return (
        <img
            src={shown ? file ? src : require(`../../../assets/${src}`) : ''}
            ref={placeholderRef}
            width={width || '100%'}
            height={height || '100%'}
            className={className}
            alt={alt || ''}

        />
    )
};

export default LazyLoading;
