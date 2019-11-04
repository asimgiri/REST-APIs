import React, { Component } from 'react';

export default class RandomCats extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgSrc: []
        }
    }

    componentDidMount() {
        setInterval(this.fetchData, 1000)
    }

    fetchData = async () => {
        const response = await fetch('https://aws.random.cat/meow');
        const data = await response.json();
        console.log(data.file);
        this.setState({
            imgSrc: [...this.state.imgSrc, data.file]
        }, () => console.log(this.state.imgSrc))
    }

    render() {
        return (
            <div className="random_cats">
                {this.state.imgSrc.map((value, index) => {
                    return (
                        <img key={index} src={value} alt="" />
                    )
                })}
            </div>
        )
    }
}