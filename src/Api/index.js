async function apiRequest(url, method, data = null, authToken = null)
{
    try
    {
        const options = {
            method: method,
            headers: {
                'Content-Type': 'application/json',
                Authorization: authToken ? `Bearer ${authToken}` : '',
                // Add any additional headers here if needed
            },
            body: data ? JSON.stringify(data) : null,
        };

        const response = await fetch(url, options);

        if (!response.ok)
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error)
    {
        console.error('Error:', error);
        throw error; // Rethrow the error for handling at a higher level if needed
    }
}

export default apiRequest;
