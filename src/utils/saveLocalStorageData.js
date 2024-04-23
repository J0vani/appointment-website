export function saveToLocalStorage(key, value) {
    try {
        const serializedValue = JSON.stringify(value);
        sessionStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error('Error saving to local storage', error);
    }
}