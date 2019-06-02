import React, {Component} from 'react';

class Avatar extends Component {
    render() {
        const {src, online} = this.props;
        const style = src ? {
                background: 'url(' + src + ') no-repeat 50%',
                backgroundSize: 'cover',
            } : {
                background: '#eceff6 url(https://vk.com/images/icons/camera.png) no-repeat 50%',
                backgroundSize: '45%',
            }
        return (
            <div style={style} className={online + ' avatar'}></div>
        )
    }
}

export default Avatar
