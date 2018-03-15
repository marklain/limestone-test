import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RepoCard from '../RepoCard';


const ReposList = ({ repos }) => (
    <div className="repo-list">
        {repos.map((rep, index)=> <RepoCard name={rep.name} num={index} key={index} url={rep.url} stars={rep.stars} />)}
    </div>
);

ReposList.propTypes = {
    repos: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        stars: PropTypes.number.isRequired
    }))
}

const mapStateToProps = state => ({
    repos: state.repos
});

export default connect(mapStateToProps, null)(ReposList);
