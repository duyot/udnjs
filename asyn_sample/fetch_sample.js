fetch('https://catfact.ninja/fact', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Cache-Control': 'no-cache',
    }

}).
    then(res => {
    if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
    }
    return res.json();
}).then(data => {
    console.log(data)
}).
    catch(err => console.log(err));