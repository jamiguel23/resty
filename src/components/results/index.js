import './results.scss';


const Results = (props) => {

  return (
    <section>
      <h2>Results</h2>
      {
        props.loading ?
          <div>Loading... </div>
          :
          <pre>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
      }
    </section>
  );

}

export default Results;

