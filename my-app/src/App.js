import useFetch from './Components/useFetch';

function App() {

  const FAKE_URL="https://reqres.in/api/users/";
  const {data, loading,error} =useFetch(FAKE_URL);
  return (
    <div className="App">
      <h1>Custome React hooks </h1>
      {loading && <h2>loading ....</h2>}
      {error && <h2>Error:Something went wrong </h2>}
      {/* {data.length} */}

      <div>
        <pre>{JSON.stringify(data,undefined,2)}</pre>
      </div>

    </div>
  );
}

export default App;
