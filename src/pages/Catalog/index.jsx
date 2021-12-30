import Car from '../../components/Car';
import Search from '../../components/Search';

const Catalog = () => {
  return (
    <>
      <div className="container">
        <Search />
        <div className="row">
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <Car />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <Car />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <Car />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <Car />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-4">
            <Car />
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
