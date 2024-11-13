//task1: Iterating with Async/Await
async function iteratewithAsynAwait(values) {
    for (const value of values) {
        console.log(value)
        await new Promise(resolve => setTimeout(resolve, 1000));//delay for 1 second
    }
}
//test the function with an array of fruits
const fruits = ["apple", "banana"];
iteratewithAsynAwait(fruits)

//task2:Awaiting a call (simulaiting api fetch)
async function awailCall() {
    try {
        const data = await new Promise((resolve) => {
            setTimeout(() => resolve({ userId: 1, name: 'john doe' }), 2000)
        });
        console.log("data fatched", data)
    } catch (error) {
        console.error("erroe data fetched", error.message)

    }

}
awailCall();

//task3:Handling Errors with Async/Await
async function awailCall() {
    try {
        const data = await new Promise((resolve, reject) => {
            setTimeout(() => reject(new Error(" error API failed")), 2000);
        })
        console.log("data fetched", data)
    } catch (error) {
        console.error("erroe data fetched", error.message)
    }
}
awailCall();

//chaining asyn /await
async function firstFunction() {
    return new Promise(resolve => setTimeout(() => {
        console.log("First function completed.");
        resolve();
    }, 1000));
}

async function secondFunction() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Second function completed.");
        resolve();
    }, 1000));
}

async function thirdFunction() {
    return new Promise(resolve => setTimeout(() => {
        console.log("Third function completed.");
        resolve();
    }, 1000));
}

async function chainedAsyncFunctions() {
    await firstFunction();
    await secondFunction();
    await thirdFunction();
}
chainedAsyncFunctions();

//task4:Awaiting Concurrent Requests
async function concurrentRequests() {
    try {
        const request1 = new Promise(resolve => setTimeout(() => resolve("response Api 1"), 2000));
        const request2 = new Promise(resolve => setTimeout(() => resolve("response Api 2"), 3000));

        const [response1, response2] = await Promise.all([request1, request2]);

        console.log("both responses");
        console.log(response1);
        console.log(response2);


    } catch (error) {
        console.error("Error in concurrent requests", error.message)
    }
}
concurrentRequests();
//task5:Awaiting parallel calls
async function parallellCalls() {
    try {
        const fetchPromises = urls.map(url => fetch(url).then(response => response.json()));
        const resaults = await Promise.all(fetchPromises);
        console.log("all responses received")
        resaults.forEach((resault, index) => {
            console.log("response from url", resault)
        })

    } catch (error) {
        console.error("error in parallel fetch calls", error.message)
    }
}
// Example URLs to fetch data from
const urls =[
    "https://api.example.com/data1",
    "https://api.example.com/data2",
    "https://api.example.com/data3"
];
parallellCalls(urls);



