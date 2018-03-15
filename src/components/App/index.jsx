import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchTopReposByLanguage } from '../../fetch';
import ReposList from '../ReposList';
import AppBar from '../AppBar';

const App = ({ onAddTopRepos }) => {
    let selectRef = null;

    const onSubmitForm = (evt) => {
        evt.preventDefault();
        onAddTopRepos(selectRef.value);
    }

    return (
            <div className="wrapper">
                <div className="main">
                    <form className="search-repos" onSubmit={onSubmitForm}>
                        <select className="search-repos__language" ref={node => selectRef = node}>
                            <option value="JavaScript">JavaScript</option>
                            <option value="PHP">PHP</option>
                            <option value="Java">Java</option>
                            <option value="Python">Python</option>
                            <option value="Ruby">Ruby</option>
                        </select>
                        <button className="search-repos__btn" type="submit">Get Top Repositories By The Stars</button>
                    </form>
                    <ReposList />
                </div>
                <AppBar />
            </div>
        )};

App.propTypes = {
    onAddTopRepos: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    onAddTopRepos(lang) {
        let repos = null;
        fetchTopReposByLanguage(lang).then(data => repos = data);
        setTimeout(() => {
            dispatch({
                type: 'TOP_REPOS_ADD',
                payload: repos
            })
        }, 2000);

    }
})

export default connect(null, mapDispatchToProps)(App);
