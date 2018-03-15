import React from 'react';
// import PropTypes from 'prop-types';

const RepoCard = ({ name, url, stars }) => (
    <div className="repo-card">
        <h1 className="repo-card__title">Name: {name}</h1>
        <p className="repo-card__details">url: <a href={url}>{url}</a></p>
        <p className="repo-card__details">Stars: {stars}</p>
    </div>
);

RepoCard.propTypes = {

};

export default RepoCard;
