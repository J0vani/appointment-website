export function saveToLocalStorage(key, value) {
    try {
        const serializedValue = JSON.stringify(value);
        sessionStorage.setItem(key, serializedValue);
    } catch (error) {
        console.error('Error saving to local storage', error);
        return undefined;
    }
}


export function getFromLocalStorage(key){
    try {
        const serializedValues = sessionStorage.getItem(key);
        return serializedValues ? JSON.parse(serializedValues): undefined;
        
    }
    catch (error) {
        console.error('Error getting from local storage', error);
        return undefined;
    }
}