export const debounceFactory = (delay: number) => {
    let timeout: NodeJS.Timeout;

    return (emit: Function) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => {
            emit();
        }, delay);
    };
};