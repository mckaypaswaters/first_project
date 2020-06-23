import React from "react";
import axios from "axios";

export default class Test extends React.Component {
    state = {
        users: [],
        imgURL: "",
    };
    componentDidMount() {
        axios
            .get("https://dog.ceo/api/breeds/image/random")
            .then((response) => {
                this.setState({
                    imageURL: response.data.message,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        const { imageURL } = this.state;
        return <img src={imageURL} />;
    }
}
