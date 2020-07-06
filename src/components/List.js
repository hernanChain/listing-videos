import React,{ Component } from "react";
import { getVideos } from '../api';
import Message from "./Message";
import Header from "./Header";
import Item from './Item';

class List extends Component{
    constructor(props){
        super(props);
        this.state={
            isLoading : false,
            videos : null,
            error : null
        };
    }

    async componentDidMount() {
        this.setState({ isLoading: true });
        try{
            const videos = await getVideos();
            this.setState({ videos , isLoading: false });
          } catch(error){
            this.setState({ error, isLoading: false });
          }
          return true;
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
                <div>
                <div>
                  {
                videos && videos.map((video,i) => {
                  return (<Item key={i} data={video}/>)
                })
                  }
                </div>  
                </div>
               
            </React.Fragment>
        )
    }
}

export default List;