
/**
 *  <div id="parent">
 *    <div id="child">
 *     <h1>"i am h1 tag"></h1>
 *    </div>
 *  </div>
 
 */

const parent = React.createElement("div",{id: "parent"},
    React.createElement( "div",{ id: "child" },
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h1", {}, "I am h2 tag"),// we need to make it an array to pass multiple siblings
))

console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)

// const heading =
//     // it's an object
//     React.createElement("h1",
//         // these all are props
//         {
//             id: "heading",  // attributes
//             xyz: "Me"


//         }, "Hello world")
// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(heading)