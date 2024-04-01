function generateArray(start, end) {
    const result = [];
    if (start < end) {
        for (let i = start; i <= end; i++) {
            result.push(i);
        }
    } else if (start > end) {
        for (let i = start; i >= end; i--) {
            result.push(i);
        }
    } else {
        result.push(start);
    }
    return result;
}