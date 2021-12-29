import './App.css';
import { useEffect, useState } from 'react';
import Ticket from './Components/Ticket/Ticket';

function App() {

  const [data, setData] = useState([]);
  const [paginator, setPaginator] = useState(2);

  const addPagination = () => {
    setPaginator(paginator + 2) 
  }

  const delPagination = () => {
    if (paginator > 2) {
      setPaginator(paginator - 2)
    } 
  }


  useEffect(() => {
    fetch(`https://air-ticket-master-2fcwpc3lgqhu.herokuapp.com/filter?limit=${paginator}`)
    .then(res => res.json())
    .then(res => setData(res))
  }, [paginator])


  return (
    <div className="App">
      <div>{data.map((item) => {
        return(
          <div>
            <Ticket key={item._id} item={item}/>
            <br/>
            <br/>
            <br/>
          </div>
          )
      })}
      <button onClick={addPagination}>Показать ещё</button>
      <br/>
      <br/>
      <button onClick={delPagination}>Удалить</button>
      </div>
    </div>
  );
}

export default App;
