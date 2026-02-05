import { useState, useEffect } from 'react';

function App() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'https://my-json-server.typicode.com/FreSauce/json-ipl/data';

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const data = await response.json();
        
        // Sort by NRR in ascending order
        const sortedTeams = data.sort((a, b) => a.NRR - b.NRR);
        
        setTeams(sortedTeams);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading IPL 2022 Points Table...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        <h2>Error</h2>
        <p>{error}</p>
      </div>
    );
  }

  return (
    <div className="ipl-container">
      <div className="header">
        <h1>IPL 2022 Points Table</h1>
        <p>Sorted by NRR (Ascending)</p>
      </div>
      
      <div className="table-container">
        <table className="ipl-table">
          <thead>
            <tr>
              <th>Position</th>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((team, index) => (
              <tr key={team.No}>
                <td>{index + 1}</td>
                <td>
                  <span className="team-name">{team.Team}</span>
                </td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td className={`nrr nrr-${team.NRR >= 0 ? 'positive' : 'negative'}`}>
                  {team.NRR.toFixed(3)}
                </td>
                <td><strong>{team.Points}</strong></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
