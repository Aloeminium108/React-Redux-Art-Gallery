import './App.css';
import { useDispatch, useSelector, connect } from 'react-redux';
import { incrementId, decrementId, reset, setId, fetchData } from './features/imageSlice';
import { useEffect } from 'react';

const mapStateToProps = (state) => ({
  imageId: state.image.id
})

function App(props) {

  const dispatch = useDispatch()

  const image = useSelector((state) => state.image)

  const renderImg = () => {
    if(image.api) {
      return <img style={{'width': '100vw'}} src={image.api.primaryImage} alt={image.api.title} />
    } else {
      return <p>image here</p>
    }
  }

  useEffect(() => {
    dispatch(fetchData())
  }, [props.imageId, dispatch])

  return (
    <div className="App">
    <div>
      <button onClick={() => dispatch(fetchData())}>Thunk!</button>
      <button onClick={() => dispatch(reset())}>Clear</button>
      <button onClick={() => dispatch(incrementId())}>Next</button>
      <button onClick={() => dispatch(decrementId())}>Back</button>
    </div>
    <input value={ image.id } onChange={(e) => {
      dispatch(setId(Number(e.target.value)))
    }}/>
    <div>
      {image.id}
      {renderImg()}
    </div>
  </div>
  );
}

export default connect(mapStateToProps)(App);
