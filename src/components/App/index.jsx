import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchReposByTheStars } from '../../fetch';
import ReposList from '../ReposList';

const App = ({ onAddTopRepos }) => (
            <div>
                <button onClick={onAddTopRepos}>Get Top Repositories by the Stars</button>
                <ReposList />
            </div>
        );

const mapDispatchToProps = dispatch => ({
    onAddTopRepos() {
        let repos = null;
        fetchReposByTheStars().then(data => repos = data);
        setTimeout(() => {
            dispatch({
                type: 'TOP_REPOS_ADD',
                payload: repos
            })
        }, 2000);

    }
})

export default connect(null, mapDispatchToProps)(App);

// https://api.github.com/search/repositories?q=language:javascript&stars:top
