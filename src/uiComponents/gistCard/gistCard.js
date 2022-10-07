import React from "react";
import { useNavigate } from "react-router-dom";
import FileBadge from "./../fileBadge/fileBadge";
import PropTypes from "prop-types";

const GistCard = (props) => {
  const { data = {} } = props;
  const navigate = useNavigate();

  const pushToDetails = (id) => () => {
    navigate(`/details/${id}`);
  };

  return (
    <div onClick={pushToDetails(data?.id)} className="user_card_wrapper">
      <p className="gist_desc">{data?.description || "No Description"}</p>
      <p className="file_count">{`${Object.keys(data?.files).length} File`}</p>
      <FileBadge files={data?.files} />
    </div>
  );
};

GistCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default React.memo(GistCard);
