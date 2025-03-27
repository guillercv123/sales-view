// src/lib/loadingManager.ts
type SetLoadingFn = (value: boolean) => void;

let setLoadingFn: SetLoadingFn;

export const loadingManager = {
    register(fn: SetLoadingFn) {
        setLoadingFn = fn;
    },
    set(value: boolean) {
        if (setLoadingFn) {
            setLoadingFn(value);
        }
    },
};
