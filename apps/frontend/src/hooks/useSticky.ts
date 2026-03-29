import { useEffect, useRef, useState } from "react";

function onSticky(selector: string | HTMLElement, callback: (isSticky: boolean) => void) {
    const element = typeof selector === 'string' ? document.querySelector(selector) : selector;

    if (!element) {
        return
    }

    const observer = new IntersectionObserver(
        ([event]) => callback(event.intersectionRatio < 1),
        {threshold: [1], rootMargin: '-1px 0px 0px 0px'}
    )
    observer.observe(element)

    return () => observer.unobserve(element)
}

export default function useSticky() {
    const ref = useRef(null);
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        if (!ref.current) {
            return;
        }

        return onSticky(ref.current, setIsSticky);
    }, [])

    return { ref, isSticky }
}