import { useCallback, useMemo, useState } from "react";

export const useIterator = (items = []) => {
    const [i, setIndex] = useState(0);

    const prev = useCallback(() => {
        if (i === 0) return setIndex(items.length - 1);
        setIndex(i - 1);
    }, [i]);

    const next = useCallback(() => {
        if (i === 0) return setIndex(0);
        setIndex(i + 1);
    }, [i]);

    const item = useMemo(() => items[i], [i]);

    return [item || items[0], prev, next];
};
