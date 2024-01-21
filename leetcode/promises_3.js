async function fetchResource(url) {
    const response = await fetch(url);
    const result = await response.json();
    console.log('Result is: ' + result.toString());
}
fetchResource("https://jsonplaceholder.typicode.com/users");