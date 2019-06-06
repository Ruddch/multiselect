import React, {Component} from 'react';
import capitalize from 'lodash/capitalize'

class Search extends Component {
    constructor(props) {
        super(props);
        this.searchBlock = React.createRef();
        this.state = {
            height: 0,
        }
    }

    handleChange = e => {
        this.props.searchChanged(e)
    }

    componentDidUpdate(_, prevState) {
        const height = this.searchBlock.current.clientHeight;
        if (height !== prevState.height) {
            this.setState({height});
            this.props.handleResize(height, prevState.height);
        }
    }

    render() {
        const selectedUsers = this.props.selected.map(u => (
            <div className='user' key={u.id}>
                <span>{capitalize(u.name) + ' '}</span>
                <span>{capitalize(u.surname)}</span>
            </div>
        ));
        return <div ref={this.searchBlock} className='search'>
            <div className='flexContainer'>
                {selectedUsers}
                <input
                className='searchInput'
                type='text'
                onChange={this.handleChange}
                placeholder={'Введите имя или фамилию'}
                value={this.props.value}/>
            </div>
        </div>
    }
}

export default Search;
