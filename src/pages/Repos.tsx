import axios from 'axios';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';

import './Repos.css'

export type Repository = {
  full_name: string;
  description: string;
}

export function Repos() {
  const { data, isFetching } = useQuery<Repository[]>('repos', async () => {
    const response = await axios.get('https://api.github.com/users/LeoUrlian/repos')

    return response.data
  }, {
    staleTime: 1000 * 60, // 1 minuto
  })

  return (
    <ul>
      {isFetching && <p>Carregando...</p>}
      {data?.map(repo => {
        return (
          <table>
            <tr>
              <th>Repositório</th>
              <th>Descrição</th>
            </tr>
            <tr>
              <td key={repo.full_name}>
                <Link to={`repos/${repo.full_name}`}>
                  {repo.full_name}
                </Link>
              </td>
              <td>
                {repo.description}
              </td>
            </tr>
          </table>
        )
      })}
    </ul>
  )
}
