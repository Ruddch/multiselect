import React, {Component} from 'react';
import capitalize from 'lodash/capitalize'
import Avatar from './Avatar';

class User extends Component {
    handleSelectionChanged = () => {
        const {selected, onSelectedChanged, user, checked} = this.props;
        if (!checked) {
            onSelectedChanged([...selected, user]);
        } else {
            const index = selected.indexOf(user);
            const removed = [
                ...selected.slice(0, index),
                ...selected.slice(index + 1),
            ];
            onSelectedChanged(removed);
        }
    }

    handleBSPress = (e) => {
        const {selected, onSelectedChanged} = this.props;
        if (e.key === 'Backspace') {
            e.preventDefault();
            e.stopPropagation();
            onSelectedChanged(selected.slice(0, -1))
        }
    }

    render() {
        const {avatarSrc, name, surname, online} = this.props.user;
        return (
            <div className='user'
                tabIndex='0'
                onKeyPress={this.handleSelectionChanged}
                onKeyDown={this.handleBSPress}
                onClick={this.handleSelectionChanged}>
                <div className='userWrap'>
                    <Avatar src={avatarSrc} online={online}/>
                    <div className='fullName'>
                        <span>{capitalize(name) + ' '}</span>
                        <span>{capitalize(surname)}</span>
                    </div>
                </div>
                <div className={(this.props.checked ? 'checked ' : '') + 'select'}></div>
            </div>
        );
    }
}

export default User;
