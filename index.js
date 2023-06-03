const Button = (props) => {
  //  Write your code here.
  const { className, buttonText } = props;
  return <button className={`button ${className}`}>{buttonText}</button>;
};

const element = (
  //  Write your code here.
  <div className="container">
    <h1 className="heading">Social Buttons</h1>
    <div className="button-formation">
      <Button className="yellow" buttonText="Like" />
      <Button className="white" buttonText="Comment" />
      <Button className="blue" buttonText="Share" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
