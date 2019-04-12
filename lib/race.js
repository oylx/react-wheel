import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            result1: 0,
            result2: 0,
            timer: new Date()
        };
    }

    success1() {
        this.setState({
            result1: new Date() - this.state.timer
        });
    }

    success2() {
        this.setState({
            result2: new Date() - this.state.timer
        });
    }

    render() {
        return (
            <div>
            <div className='header'>
            <Timer1 result={this.state.result1}></Timer1>
            <Timer2 result={this.state.result2}></Timer2>
            </div>
            <Playground className='playground' success1={this.success1.bind(this)} success2={this.success2.bind(this)}></Playground>
            </div>
    );
    }
}

class Playground extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div className="playground">
            <Track1 success={this.props.success1.bind(this)}></Track1>
            <Track2 success={this.props.success2.bind(this)}></Track2>
            </div>

    )
    }
}

class Track1 extends React.Component {
    constructor(props) {
        super(props);
        let n = 0;
        this.state = {
            style: {
                transform: `translateX(${n}%)`
            }
        };
        let timerId = setInterval(() => {
            n += 25;
            this.setState({
                style: {
                    transform: `translateX(${n}%)`
                }
            });
            if (n >= 100) {
                window.clearInterval(timerId);
                this.props.success('我是小兔兔');
            }
        }, 1000);

    }

    render() {
        return (
            <div>
            <h2 style={this.state.style}>🐇</h2>
        </div>
    );
    }
}

class Track2 extends React.Component {
    constructor(props) {
        super(props);
        let n = 0;
        let timerId = setInterval(() => {
            n += 20;
            this.setState({
                style: {
                    transform: `translateX(${n}%)`
                }
            });
            if (n >= 100) {
                window.clearInterval(timerId);
                this.props.success('我是小乌龟');
            }
        }, 1000);
        this.state = {
            style: {
                transform: `translateX(${n}%)`
            }
        };
    }

    render() {
        return (
            <div>
            <h2 style={this.state.style}>🐢</h2>
        </div>
    );
    }
}

class Timer1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h2>🐇用时</h2>
        <div>{this.props.result}</div>
        </div>
    );
    }
}

class Timer2 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
            <h2>🐢用时</h2>
        <div>{this.props.result}</div>
        </div>
    );
    }
}

ReactDOM.render(<App></App>, document.getElementById('root'));