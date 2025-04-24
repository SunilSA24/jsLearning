document.getElementById("retryFetchBtn").addEventListener("click", () => {
    fetchWithRetry("https://jsonplaceholder.typicode.com/invalid", 3);
});

async function fetchWithRetry(url, retries) {
    const statusElement = document.getElementById("status");

    try {
        const response = await fetch(url);

        if (!response.ok) {
            statusElement.innerText = "failed to fetch data after all attempts";
        }

    } catch (error) {
        console.error(error)
    }

    // Write code here
}