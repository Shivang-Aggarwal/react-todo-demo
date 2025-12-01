import './App.css';

function App() {
  return (
    <div>
      <div>
        <div>
          Your Todo's
        </div>
        <div>
          <thead>
            <tr>
              <th scope='col'>#</th>
              <th scope='col'>Description</th>
              <th scope='col'>Assigned</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope='row'>1</th>
              <td>Feed dog</td>
              <td>Eric</td>
            </tr>
            <tr>
              <th scope='row'>2</th>
              <td>Get a haircut</td>
              <td>Eric</td>
            </tr>
          </tbody>
        </div>
      </div>
    </div>
  );
}

export default App;