 import './styles.css';

const Search = () => {
  return (
    <div className="base-card product-card">
      <div className="card-search-container">
        <form >
          <div className="row g-0"> 
          <div className="col-9">
            <input
              type="text"
              className="form-control"
              placeholder="Digite sua busca"
            />
          </div>
          <div className="col-3">
            <button className='form-control'>
              <span>Buscar</span>
            </button>
          </div>
          </div>
        </form>
      </div>
     </div>
  );
};

export default Search;
