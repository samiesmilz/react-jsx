const Person = ({ name, age = 0, hobbies }) => (
  <div class="person">
    <h3 class="notify">
      {age > 18 ? "Please go vote ✅" : "You must be 18 🚻"}
    </h3>
    <p>
      <strong>Name:</strong> {name.length > 8 ? name.slice(0, 6) : name}
    </p>
    <p>
      <strong>Age:</strong> {age}
    </p>
    <p>Learn some information about this person</p>
    <p>
      <strong>Hobbies :</strong>
      <ul>
        {hobbies.map((h) => (
          <li>{h}</li>
        ))}
      </ul>
    </p>
  </div>
);
