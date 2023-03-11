import { Component } from "react";
import Footer from "./Footer";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };

    }
    componentDidMount() {
        fetch('https://api.escuelajs.co/api/v1/users')
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result

                    });

                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                },

            )
    }
    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <p>Error {error.message}</p>
        } else if (!isLoaded) {
            return (
                <div class="spinner">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                </div>

            )
        } else {
            return (
                <div className="color">
                <div className="container">
                <div className="cardf">
                  {items.map(item => (
                    <div className="card">
                      <img src={item.avatar} alt="product img" />
                      <p className="price">{item.role}</p>
                      
                    </div>
                    
                  ))}
                  
                </div>
              </div>
              <Footer></Footer>
              </div>
            )
        }
    }


}
