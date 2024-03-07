/* <div>
    <div>
        <h1>i am h1</h1>
        <h2>i am h2</h2>
    </div>
</div> 
ReactElement(object) = >HTML(browser understand)
*/
const parent = React.createElement(
    "div",
    { id: "parent" },
      React.createElement("div", { id: "child" }, [
      React.createElement("h1",{}, "i am h1 tag"),
      React.createElement("h2", {}, "i am h2 tag"),
    ])
  );
  
  // const heading = React.createElement(
  //   "h1",
  //   {
  //     id: "heading",
  //   },
  //   "namste react!"
  // );
  // console.log(heading); //will return an object
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent); //render converting the h1 tag
  