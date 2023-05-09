import { useEffect } from "react";
import { useRef } from "react";

export const useMountedRef = () => {
    const mounted = useRef(false);
    useEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    });
    return mounted;
};