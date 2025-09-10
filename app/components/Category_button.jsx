

function cat_button() {
  return <div>
    <button className="" onClick={cliked}>Categories</button>
  </div>;
}
export default cat_button;

function cliked() {
  console.log("clicked");
}