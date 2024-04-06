const App = () => (
  <div>
    <Person
      name="Sam"
      age={43}
      hobbies={["singing", "traveling", "reading", "watching"]}
    />
    <Person
      name="Amma"
      age={17}
      hobbies={["singing", "traveling", "reading", "watching"]}
    />
    <Person
      name="Abraham Linchon"
      age
      hobbies={["singing", "traveling", "reading", "watching"]}
    />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
