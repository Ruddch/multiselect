import React, {Component} from 'react';

class Search extends Component {
    handleChange = e => {
        this.props.searchChanged(e)
    };

    render() {
        const selectedUsers = this.props.selected.map(u => (
            <div className='user' key={u.id}>
                <span>{u.name + ' '}</span>

                <span>{u.surname}</span>
            </div>
        ));
        return <div className='search'>
            {selectedUsers}
            <input
            className='searchInput'
            type='text'
            onChange={this.handleChange}
            placeholder={'Введите имя или фамилию'}
            value={this.props.value}/>
        </div>
    }
}

export default Search;
