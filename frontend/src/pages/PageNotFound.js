import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="not-found">
      <h1> Sorry, this page is not found!</h1>
      <div className="not-found-img-wrapper">
        <img
          src="https://unsplash.com/photos/NodtnCsLdTE/download?force=true&w=1920"
          alt=""
        />
      </div>

      <button onClick={goBack}>Go back</button>
    </div>
  );
};

export default PageNotFound;
