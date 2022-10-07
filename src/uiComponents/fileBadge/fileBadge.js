import React from "react";
import PropTypes from "prop-types";

const FileBadge = (props) => {
  const { files = {} } = props;
  return (
    <div className="file_tags_wrapper">
      {Object.keys(files).map((item, index) => (
        <span key={index} className="file_tag">
          {files?.[item]?.language}
        </span>
      ))}
    </div>
  );
};

FileBadge.propTypes = {
  files: PropTypes.object.isRequired
}


export default React.memo(FileBadge);
