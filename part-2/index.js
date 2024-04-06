const App = () => (
  <div>
    <Tweet
      name="Samie Smilz"
      username="@samiesmilz"
      message="You don't have to be great to start - you have to start to be great"
    />
    <Tweet
      name="Mark Miller"
      username="@markmiller"
      message="Thoughts become things."
    />
    <Tweet
      name="Cathy Xandy"
      username="@cathrinex"
      message="Dare to be you - dare to be extra-ordinary."
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
