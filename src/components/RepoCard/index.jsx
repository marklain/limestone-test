import React from 'react';
import PropTypes from 'prop-types';

const RepoCard = ({ name, url, stars, num }) => (
    <div className="repo-card">
        <h1 className="repo-card__title">{num + 1}. {name}</h1>
        <p className="repo-card__details">url: <a className="repo-card__link" target="_blank" href={url}>{url}</a></p>
        <p className="repo-card__details">Stars: {stars}</p>
    </div>
);

RepoCard.propTypes = {
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    stars: PropTypes.number.isRequired,
    num: PropTypes.number.isRequired
};

export default RepoCard;
