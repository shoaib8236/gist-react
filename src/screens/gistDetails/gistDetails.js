import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadGistById } from "./../../store/actions/gistActions";
import { Spin } from "antd";
import Forks from "./../../uiComponents/forks/forks";

const GistDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const stateProps = useSelector(({ gists }) => gists?.details);

  const {
    data: { files },
  } = stateProps;

  useEffect(() => {
    dispatch(loadGistById(params.id));
  }, [params.id]);

  const renderForks = () => {
    const { forks } = stateProps?.data;
    if (forks?.length) {
      return <Forks forks={forks.slice(0, 3)} />;
    } else {
      return <p className="text_danger">No Forks</p>;
    }
  };

  return (
    <div className="gist_details_wrapper">
      {stateProps?.loading ? (
        <div className="gist_loader">
          <Spin />
        </div>
      ) : (
        <div className="detail_box">
          <p className="gist_desc">
            {stateProps?.data?.description || "No Description"}
          </p>
          <p className="detail_box_title">Files :</p>
          {Object.values(files || {})?.map((file, index) => {
            return (
              <li key={index} className="gist_files">
                <a
                  href={file.raw_url}
                  target="_blank"
                  className="text-secondary">
                  {file.filename}
                </a>
              </li>
            );
          })}
          <p className="detail_box_title">Forks :</p>
          {renderForks()}
        </div>
      )}
    </div>
  );
};

export default GistDetails;
