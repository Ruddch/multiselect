import React, {Component} from 'react';
import User from './User';

class FriendsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            top: 0,
            height: 10,
            opacity: 0,
        };
    }
    isSelected = (id) => this.props.selected.some(s => s.id === id);

    handleScroll = (e) => {
        window.clearTimeout(this.isScrolling);
        const target = e.target;
        const cHeight = target.clientHeight;
        const scHeight = target.scrollHeight;
        const scrollTop = target.scrollTop;
        const height = cHeight * cHeight / scHeight;
        const top = scrollTop / scHeight * cHeight;

        this.isScrolling = setTimeout(() => {
            this.setState({opacity: 0})
        }, 100);
        this.setState({top, height, opacity: 1});

    }

    render() {
        const friends = this.props.data.map(f => (<User
            key={f.id}
            selected={this.props.selected}
            onSelectedChanged={this.props.onSelectedChanged}
            user={f}
            checked={this.isSelected(f.id)}/>)
        );
        return (
            <div className='scrollWrap'>
                <div onScroll={this.handleScroll} ref={this.props.friendListRef} className='friendsList'>
                    {friends}
                </div>
                <div style={this.state} className='fakeScroll'></div>
            </div>
        )
    }
}

export default FriendsList;
