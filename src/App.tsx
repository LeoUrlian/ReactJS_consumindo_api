import { useQuery } from 'react-query';

type Repository = {
  full_name: string;
  description: string;
}

function App() {

  return(
    <ul>
      {isFetching && <p>Carregando...</p>}
      {repositories?.map(repo => {
        return(
          <li key={repo.full_name}>
            <strong>{repo.full_name}</strong>
            <p>{repo.description}</p>
          </li>
        )
      })}
    </ul>
  )
}

export default App
