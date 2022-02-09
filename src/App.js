import './App.css';
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import Ticket from './Components/Ticket/Ticket';
import SortBar from './Components/SortBar/SortBar';


function App() {
  const dispatch = useDispatch()
  const data = useSelector(state => state.mainReducer.data)
  const paginator = useSelector(state => state.mainReducer.paginator)
  const sortPrice = useSelector (state => state.mainReducer.sortPrice)
  const totalDuration = useSelector(state => state.mainReducer.totalDuration)
  const minPrice = useSelector(state => state.mainReducer.minPrice)
  const maxPrice = useSelector(state => state.mainReducer.maxPrice)


  

  // const [data, setData] = useState([]);
  // const [paginator, setPaginator] = useState(2);

  const addPagination = () => {
    dispatch({type:'CHANGE_PAGINATION', payload: paginator + 2})
    // setPaginator(paginator + 2) 
  }

  const delPagination = () => {
    if (paginator > 2) {
    dispatch({type: 'CHANGE_PAGINATION', payload: paginator - 2})
      // setPaginator(paginator - 2)
    } 
  }


  useEffect(() => {
    if (totalDuration) {
      fetch(`https://air-ticket-master-2fcwpc3lgqhu.herokuapp.com/filter?sortForwardDuration=${totalDuration}&minPrice=${minPrice}&maxPrice=${maxPrice}&limit=${paginator}`)
      .then(res => res.json())
      .then(res => dispatch({type:'CHANGE_DATA', payload: res}))
    } else {
      fetch(`https://air-ticket-master-2fcwpc3lgqhu.herokuapp.com/filter?sortPrice=${sortPrice}&minPrice=${minPrice}&maxPrice=${maxPrice}&limit=${paginator}`)
    .then(res => res.json())
    .then(res => dispatch({type:'CHANGE_DATA', payload: res}))
    }
  }, [paginator, sortPrice, totalDuration, minPrice, maxPrice])


  console.log(data)
  return (
    <div className="App">
      <div>
        <SortBar/>
      </div>
      
      <div>{data.map((item) => {
        return(
          <div>
            <Ticket key={item._id} item={item}/>
          </div>
          )
      })}
        <div className='btnWrapper'>
          <button className='addBtn' onClick={addPagination}>Показать ещё</button>
          <button className='delBtn' onClick={delPagination}>Удалить</button>
        </div>
      </div>
    </div>
  );
}

export default App;
