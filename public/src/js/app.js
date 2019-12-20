if ('serviceWorker' in navigator) {
    // Registra o serviceWorker
    navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
            console.log('Service Worker registered.');
        });
}