import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementId, decrementId, reset } from './features/imageIdSlice';

function App() {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.imageId)

  const renderImg = () => {
    if(data.apiData) {
      return <img style={{'width': '100vw'}} src={data.apiData.primaryImage} alt={data.apiData.title} />
    } else {
      return <p>image here</p>
    }
  }

  return (
    <div className="App">
    <div>
      <button>Thunk!</button>
      <button onClick={() => dispatch(reset())}>Clear</button>
      <button onClick={() => dispatch(incrementId())}>Next</button>
      <button onClick={() => dispatch(decrementId())}>Back</button>
    </div>
    <input value={ data.objectId } />
    <div>
      {data.objectId}
      {renderImg()}
    </div>
  </div>
  );
}

export default App;
