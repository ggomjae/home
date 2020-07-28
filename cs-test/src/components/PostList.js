import React from 'react'
import history from '../history';

class PostList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
                username:[]
        };
    }
    componentDidMount(){
        this.callApi()
            .then(res => this.setState({username: res}))
            .catch(err => console.log(err))
    }

    callApi = async () => {
        const response = await fetch('/api/list')
        const body = await response.json()
        console.log(body)
        return body
    }

    handleFormSubmit(e) {
        e.preventDefault()
        this.createPost()
            .then((response) => {    
                console.log(response.data);
        })
     //   this.props.stateRefesh();
    }

    movePath(param){
        alert(param)
        history.push('/join')
        window.location.reload(); 
    }

    render(){

        const {username} = this.state;
        
        return (
            <div>
                <div>
                    {username.map(v => <p>{v.user_id} {v.user_key} 
                        <button onClick={() => this.movePath(v.user_key)}>{"move"}</button>
                    </p>)}
                </div>
            </div>
        );
    }
}

export default PostList;