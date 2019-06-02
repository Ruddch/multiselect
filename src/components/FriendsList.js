import React, {Component} from 'react';
import User from './User';

class FriendsList extends Component {
    isSelected = (id) => this.props.selected.some(s => s.id === id)

    render() {
        const friends = this.props.data.map(f => (<User
            key={f.id}
            selected={this.props.selected}
            onSelectedChanged={this.props.onSelectedChanged}
            user={f}
            checked={this.isSelected(f.id)}/>)
        );
        return (
            <div className='friendsList'>
                {friends}
            </div>
        )
    }
}

export default FriendsList;
