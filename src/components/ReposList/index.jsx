import React from 'react';
import { connect } from 'react-redux';
import RepoCard from '../RepoCard';


const ReposList = ({ repos }) => (
    <div className="repo-list">
        {repos.map(rep => <RepoCard name={rep.name} url={rep.url} stars={rep.stars} />)}
    </div>
);

ReposList.propTypes = {

}

const mapStateToProps = state => ({
    repos: state.repos
});

export default connect(mapStateToProps, null)(ReposList);
