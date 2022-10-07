import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { loadGists } from "../../store/actions/gistActions";


const SearchCotnainer = (props) => {
  const { loading } = props;
  const inputRef = useRef();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    let username = inputRef.current.value.trim();

    if (username.length > 0) {
      dispatch(loadGists(username));
    }
  };

  return (
    <div className="search_container">
      <form onSubmit={onSubmit}>
        <input
          className={`search_input ${loading ? "disbled_style" : ""}`}
          disabled={loading}
          ref={inputRef}
          type="text"
          placeholder="Search for a user"
        />
      </form>
    </div>
  );
};


export default React.memo(SearchCotnainer);
