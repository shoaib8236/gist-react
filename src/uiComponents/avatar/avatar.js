import React from "react";
import PropTypes from "prop-types";
const Avatar = (props) => {
  const { avatarUrl, name } = props;
  return (
    <div className="avatar_wrapper">
      <img key="image" src={avatarUrl} alt={name} className="avatar" />,
      <span key="username" className="username">
        {name}
      </span>
    </div>
  );
};

Avatar.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default React.memo(Avatar);
