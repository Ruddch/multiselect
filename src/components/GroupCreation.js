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

        this.updateFilteredUsers = debounce(this.updateFilteredUsers);
    }

    onSelectedChanged = (selected) => this.setState({selectedUsers: selected})


    updateFilteredUsers = () => this.setState({
        filteredUsers: filterUsers(this.state.searchValue, this.props.data)
    })


    searchChanged = e =>
        this.setState({searchValue: e.target.value}, this.updateFilteredUsers)


    render() {
        return (
            <div className='GroupCreation'>
                <header>
                    <span className='title'>Создание беседы</span>
                    <span className='closeButton'></span>
                </header>
                <Search
                    selected={this.state.selectedUsers}
                    value={this.state.searchValue}
                    searchChanged={this.searchChanged}/>
                <FriendsList
                    selected={this.state.selectedUsers}
                    onSelectedChanged={this.onSelectedChanged}
                    data={this.state.filteredUsers}/>
                <footer>
                    <span className={
                        'button' + (this.state.selectedUsers.length ? '' : ' disabled')
                        }
                    >Создать беседу</span>
                </footer>
            </div>
        );
    }
}

export default GroupCreation;
