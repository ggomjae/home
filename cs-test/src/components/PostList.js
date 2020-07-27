import React, {Component} from 'react'

class PostList extends Component{

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

    render(){

        const {username} = this.state;
        console.log(username[0])
        console.log(username[1])
        
        return (
            <div>
                <div>
                    {username.map(v => <p>{v.user_id}</p>)}
                    {username.map(v => <p>{v.user_key}</p>)}
                </div>
            </div>
        );
    }
}

export default PostList;