import React from "react";
import Avatar from "./../avatar/avatar";
import PropTypes from "prop-types";

const Forks = (props) => {
  const { forks } = props;
  return (
    <ul className="fork_wrapper">
      {forks.map((fork, index) => {
        return (
          <li key={index}>
            <a href={`https://gist.github.com/${fork.id}`} target="_blank">
              <Avatar avatarUrl={fork.user.avatar_url} name={fork.user.login} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

Forks.propTypes = {
  forks: PropTypes.array.isRequired,
};

export default React.memo(Forks);
