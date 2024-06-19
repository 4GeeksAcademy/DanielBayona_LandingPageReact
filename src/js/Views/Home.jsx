import React from "react";
import Jumbotron from "../components/Jumbotron/Jumbotron.jsx";
import Card from "../components/Card/Card.jsx"


const Home = () =>{
    const cardInfo = [
        {
            title: "Card title",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus necessitat",
            button: "Find Out More!",
            image: "https://via.placeholder.com/500x325"
            
        },
        {
            title: "Card title",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus necessitat",
            button: "Find Out More!",
            image: "https://via.placeholder.com/500x325"
        },
        {
            title: "Card title",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus necessitat",
            button: "Find Out More!",
            image: "https://via.placeholder.com/500x325"
        },
        {
            title: "Card title",
            body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus necessitat",
            button: "Find Out More!",
            image: "https://via.placeholder.com/500x325"
        }
    ];

    return (
        <>
        <Jumbotron
            title="A Warm Welcome!"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio ducimus necessitatibus vel hic eum, possimus, blanditiis soluta nobis consequatur enim, mollitia laudantium. Neque iste reprehenderit molestias possimus animi laborum deserunt."
            textButton="Call To Action!"
        />
        <div className="container mt-5">
            <div className="row">
            {
                cardInfo.map((value, index) =>{
                    return (
                        <div key={index} className="col-sm-3 mb-3 mb-sm-0">
                        <Card key={index}
                        title = {value.title}
                        body = {value.body}
                        button = {value.button}
                        image = {value.image}
                        />
                        </div>
                    )
                })
            }
            </div>
        </div>
        </>
    )
}

export default Home;