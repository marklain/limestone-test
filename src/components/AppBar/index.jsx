import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchProfileByName } from '../../fetch';
import UserCard from '../UserCard';

const AppBar = ({ profileInfo, onAddProfileInfo }) => {

    let inputRef = null;

    const onFormSubmit = evt => {
        evt.preventDefault();
        onAddProfileInfo(inputRef.value);
        inputRef.value = '';
    };
    return (
    <div className="app-bar">
        <form onSubmit={onFormSubmit} className="authorization-form">
            <input className="authorization-form__input" type="text" ref={node => inputRef = node} placeholder="Type your username..."/>
            <button className="authorization-form__btn" type="submit">Login</button>
        </form>
        {profileInfo.map((item, index) => <UserCard key={index} imgUrl={item.imgUrl} name={item.name}/>)}
    </div>
)};

AppBar.propTypes = {
    profileInfo: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        imgUrl: PropTypes.string.isRequired
    })),
    onAddProfileInfo: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    profileInfo: state.profileInfo
});
const mapDispatchToProps = dispatch => ({
    onAddProfileInfo(userName) {
        if (userName === '') {
            alert('Please, enter your name, before press login.');
            return;
        }
        let profileInfo = null;

        fetchProfileByName(`https://api.github.com/users/${userName}`).then(data => {
            profileInfo = {
                name: data.login,
                imgUrl: data.avatar_url
            }
        });

        setTimeout(() => {
            dispatch({
                type: 'ADD_INFO',
                payload: profileInfo
            })
        }, 1500);
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBar);
