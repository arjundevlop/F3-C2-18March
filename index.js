const button = document.querySelector(".btn");

function PromiseAPI1(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(fetch("https://dummyjson.com/posts"));
            
            
        }, 1000);
    })
}

function PromiseAPI2(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(fetch("https://dummyjson.com/products"));
            
            
        }, 2000);
    })
}



function PromiseAPI3(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(fetch("https://dummyjson.com/todos"));
            
            
        }, 3000);
    })
}

button.addEventListener("click", function fetchData(){
    var loader = document.querySelector(".loader");
    loader.style.display = "block";
    
    PromiseAPI1().then((res)=>{
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Error fetching API 1');
        }
    }).then((data)=>{
        // Render data in HTML table
        // ...
        var header = "<tr>";
            var arr = data.posts;
            var firstObj = arr[0];
    
            var objKeys = Object.keys(firstObj);
            
            objKeys.forEach((value)=>{
                header += "<th>"+ value+ "</th>";
            })

            var rows = "";
            (data.posts).forEach(item=>{
                rows += "<tr>";
                Object.values(item).forEach(value=>{
                    rows += "<td>" + value + "</td>";
                })
                rows+= "</tr>";
            })
            document.getElementById("posts-table").innerHTML = header+rows;

        return PromiseAPI2();
    }).then((res)=>{
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Error fetching API 2');
        }
    }).then((data)=>{
        // Render data in HTML table
        // ...

        var header = "<tr>";
            var arr = data.products;
            var firstObj = arr[0];
    
            var objKeys = Object.keys(firstObj);
            
            objKeys.forEach((value)=>{
                header += "<th>"+ value+ "</th>";
            })

            var rows = "";
            (data.products).forEach(item=>{
                rows += "<tr>";
                Object.values(item).forEach(value=>{
                    rows += "<td>" + value + "</td>";
                })
                rows+= "</tr>";
            })
            document.getElementById("products-table").innerHTML = header+rows;

        return PromiseAPI3();
    }).then((res)=>{
        if (res.ok) {
            return res.json();
        } else {
            throw new Error('Error fetching API 3');
        }
    }).then((data)=>{
        // Render data in HTML table
        // ...
        var header = "<tr>";
            var arr = data.todos;
            var firstObj = arr[0];
    
            var objKeys = Object.keys(firstObj);
            
            objKeys.forEach((value)=>{
                header += "<th>"+ value+ "</th>";
            })

            var rows = "";
            (data.todos).forEach(item=>{
                rows += "<tr>";
                Object.values(item).forEach(value=>{
                    rows += "<td>" + value + "</td>";
                })
                rows+= "</tr>";
            })
            document.getElementById("todos-table").innerHTML = header+rows;

        loader.style.display = "none";
        button.removeEventListener("click",fetchData);
    }).catch((error)=>{
        console.error(error);
        loader.style.display = "none";
    });
});