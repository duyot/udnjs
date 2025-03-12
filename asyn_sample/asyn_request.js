// Use const for variables that won't be reassigned
const wips = ['<%=wmKey%>'];

// Use async/await for better readability and error handling
async function checkWipStatuses(wips) {
    const results = await Promise.all(wips.map(async (wip) => {
        try {
            const response = await fetch(`${pageContext.request.contextPath}/ajax/workmanager/status/${wip}`, {
                method: 'GET',
                headers: {
                    'Cache-Control': 'no-cache'
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            return { wip, data };
        } catch (error) {
            console.error(`Error fetching status for WIP ${wip}:`, error);
            return { wip, error };
        }
    }));

    results.forEach(({ wip, data, error }) => {
        const validationElement = document.getElementById(`validation-${wip}`);
        if (error) {
            validationElement.textContent = 'Error fetching status';
        } else if (data && data.workManagerStatus === "SUCCESS") {
            validationElement.textContent = data.validationResult;
        } else {
            validationElement.textContent = 'Status not available';
        }
    });
}

// Call the function
checkWipStatuses(wips);