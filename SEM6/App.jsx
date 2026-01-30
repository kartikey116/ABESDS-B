console.log("hi");

const parent = document.getElementById("container");
const root = ReactDOM.createRoot(parent);

const h2 = React.createElement("h2", {}, "welcome to React");
const li1 = React.createElement("li", {}, "java");
const li2 = React.createElement("li", {}, "C programming");
const img = React.createElement("img", { src: "./file.jpg", style: { width: "100px" } });

const ul = React.createElement("ul", {}, li1, li2);
const div = React.createElement("div", {}, h2, ul, img);


root.render(div); 