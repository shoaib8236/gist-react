import { Empty, Spin } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import GistCard from "../../uiComponents/gistCard/gistCard";
import SearchCotnainer from "../../uiComponents/searchCotnainer/searchCotnainer";

const Gists = () => {
  const stateProps = useSelector(({ gists }) => ({ ...gists.gists }));

  return (
    <div className="users_layout">
      <SearchCotnainer loading={stateProps?.loading} />
      <div className="scrolle_container">
        {stateProps?.loading ? (
          <div className="gist_loader">
            <Spin />
          </div>
        ) : (
          <>
            {stateProps?.gists.length > 0 ? (
              <div className="gist_result">
                {stateProps?.gists.map((item) => (
                  <GistCard key={item?.id} data={item} />
                ))}
              </div>
            ) : (
              <div className="gists_empty_wrapper">
                <Empty />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Gists;
