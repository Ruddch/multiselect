import React, {Component} from 'react';
import debounce from 'lodash/debounce';

import FriendsList from './FriendsList';
import Search from './Search';
import filterUsers from '../includes/filterBySubstr';

class GroupCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            filteredUsers: this.props.data,
            selectedUsers: [],
        };

        this.friendListRef = React.createRef();

        this.updateFilteredUsers = debounce(this.updateFilteredUsers);
    }

    onSelectedChanged = (selected) => this.setState({selectedUsers: selected})

    scrollUserList = (height, prevHeight) =>
        prevHeight && this.friendListRef.current.scrollBy(
            0, (height - prevHeight) / 2)

    updateFilteredUsers = () => this.setState({
        filteredUsers: filterUsers(this.state.searchValue, this.props.data)
    })

    searchChanged = e =>
        this.setState({searchValue: e.target.value}, this.updateFilteredUsers)


    render() {
        const content = this.state.filteredUsers.length || !this.state.searchValue
            ? <FriendsList
                friendListRef={this.friendListRef}
                selected={this.state.selectedUsers}
                onSelectedChanged={this.onSelectedChanged}
                data={this.state.filteredUsers}/>
            : (<div className='emptyResult'>
                <span>{'There is no result for "'+ this.state.searchValue +'"'}</span>
            </div>);

        return (
            <div className='GroupCreation'>
                <header>
                    <span className='title'>Создание беседы</span>
                    <span className='closeButton' tabIndex='1'></span>
                </header>
                <Search
                    handleResize={this.scrollUserList}
                    selected={this.state.selectedUsers}
                    value={this.state.searchValue}
                    searchChanged={this.searchChanged}/>
                {content}
                <footer>
                    <div className='flexContainer'>
                        <button className={
                            'button' + (this.state.selectedUsers.length ? '' : ' disabled')
                            }
                        >Создать беседу</button>
                    </div>
                </footer>
            </div>
        );
    }
}

export default GroupCreation;
