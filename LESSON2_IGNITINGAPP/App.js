// const heading = React.createElement("h1",{id: "heading"},"Hello World in React");

// const root = ReactDOM.createRoot(document.getElementById("root"));

// // heading will be an object (i.e createElement will be returning a JS object)

// // now render will take object and create html h1 tag

// root.render(heading);



// create parent div with 2 childs in it and h1 , h2 in each child

{/* <div id="parent">
    <div id="child1">
    <h1>"h1 tag"</h1>
    <h2>"h2 tag"</h2>
    </div>
    <div id="child2">
    <h1>"h1 tag"</h1>
    <h2>"h2 tag"</h2>
    </div>
</div> */}


const layout = React.createElement("div", id = "parent",
 [React.createElement("div", id = "child1", 
    [React.createElement("h1", {}, "h1 tag"), React.createElement("h2", {}, "h2 tag")]),React.createElement("div", id = "child2", 
    [React.createElement("h1", {}, "h1 tag"), React.createElement("h2", {}, "h2 tag")])]);



const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(layout);