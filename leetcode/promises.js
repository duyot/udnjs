async function getData() {
    setTimeout(function () {
        console.log("Finished getdata in 5s");
        return "<data>duyot</data>"
    }, 5000);
}

async function showData(data) {
    setTimeout(function () {
        console.log("Showing data " + data + " in 3s");
        console.log("finished fetch and process");
        return "success";
    }, 3000);
}

// getData().then(fetchedData => {
//     console.log("Fetched data: "+ fetchedData);
//     return showData(fetchedData);
// }).then(result => {
//     console.log("Result: "+ result);
// });

getData()
    .then(response => {
        console.log("Response:", response);
        return showData(response);  // This returns a new promise
    })
    .then(processedData => {
        console.log("Processed data:", processedData);
        //return furtherProcessing(processedData);  // This returns another new promise
    })
    .catch(error => {
        console.error("Error:", error);
    });