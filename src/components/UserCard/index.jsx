import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProfileByName } from '../../fetch';

const UserCard = ({ imgUrl, name, onAddUserRepos }) => {
    return (
        <div className="user-card">
            <img src={imgUrl} alt="" className="user-card__img"/>
            <h3 className="user-card__name">{name}</h3>
            <button onClick={() => {onAddUserRepos(name);}} className="user-card__btn">Get my repositories</button>
        </div>
)};

UserCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onAddUserRepos: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    onAddUserRepos(name) {
    let repos = null;

    fetchProfileByName(`https://api.github.com/users/${name}/repos`).then(data => data.map(item => ({
            name: item.name,
            url: item.html_url,
            stars: item.stargazers_count
        }))).then(data => repos = data);
        
        setTimeout(() => {
            dispatch({
                type: 'USER_REPOS_ADD',
                payload: repos
            })
        }, 1500);
    }
});

export default connect(null, mapDispatchToProps)(UserCard);
