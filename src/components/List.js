import React,{ Component } from "react";
import Message from "./Message";
import Header from "./Header";

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading : false,
            videos : null,
            error : null
        };
    }

    render(){
        const { videos,  isLoading, error } = this.state;
        if(isLoading){
            return(<Message message="Loading..."/>)
        }
        if(error){
            return(<Message message="Error..."/>)
        }
        if(!videos){
            return(<Message message="No hay videos para mostrar"/>)
        }
        return(
            <React.Fragment>
                <Header onClickAdd={this.handleAdd}/>
                {
                videos && videos.map((video,i) => {
                  //return (<Item key={i} data={video}/>)
                  //return (<Item key={i} data={video}/>)
                })
                }
            </React.Fragment>
        )
    }
}

export default List;