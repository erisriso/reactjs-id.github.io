import React from 'react';

var styles = {
    select: {
        appearance: 'none',
        '-webkit-appearance': 'none',
        '-moz-appearance': 'none',
        width: '100%',
        padding: '0 20px',
        border: 'none',
        color: '#000',
        borderRadius: 0,
        background: '#fff'
    },
    image: {
        background: 'url(img/fb_post.png) no-repeat center center',
        backgroundSize: 'contain',
        height: '400px',
        width: '500px',
        marginBottom: '30px' 
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        };
    }
    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.email.value;
        this.setState({message: null});
        axios.post(`https://reactjs-id.herokuapp.com/invite`, {
            email,
            channel: 'react-id',
            coc: 0
        }).then(response => {
            this.setState({message: `Wuut! silakan cek email ${email} :D`})
        }, err => {
            this.setState({message: err.data.msg})
        });
    }
    render() {
        var pendaftar = [];
        for (var i = 1; i <= 70; i++) {
            pendaftar.push(i);
        }
        let {message} = this.state;
        return (
            <div>
                <div className="hero-transition-manager">
                    <section className="hero add show shown">
                        <div className="center">
                            <div className="image" style={styles.image}/>
                            <a href="http://live.hacktiv8.com/reactid-march-2017-meetup/" target="_blank" className="btn">
                                Lihat Event
                            </a>
                        </div>
                        <div className="entrance-transition image-entrance show"><img src="img/logo.png" alt="" className="rimage" /></div>
                    </section>
                </div>
                <div className="subscription" id="slack">
                    <img style={{width: '80px', height: '80px', marginBottom: '10px'}} src="img/slack.png" alt=""/>
                    <h2>React-ID di Slack</h2>
                    <p>Masukkan email Anda untuk mendapatkan undangan dan berdiskusi di Slack.</p>

                    <form onSubmit={this.onSubmit.bind(this)}>
                        <label for="subscription-email" className="label">Masukkan email di sini...</label>
                        <input ref="email" id="slack-email" className="email" placeholder="Enter your email..." required="" />
                        <button className="submit" type="submit"><span className="submit-text">Dapatkan Undangan</span></button>
                    </form>
                    {message ?
                        <p>{message}</p>
                        : null}
                    
                </div>
            </div>
        );
    }
};

export default Header;