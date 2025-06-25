export function fetchData(url, options = {}) {
    const urlService = `http://127.0.0.1:5000/${url}`;
    try {
        const response = fetch(urlService, options);
        return response.then(res => res.json());
    }
    catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}