import React,{Component,PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions/index'
import {Link} from 'react-router'

class PostsShow extends Component {
    
    static contextTypes = {
        router: PropTypes.object
    }
    
    componentWillMount(){
        this.props.fetchPost(this.props.params.id);
    }
    
    onDeleteClick(){
        this.props.deletePost(this.props.params.id).then(()=>{
            this.context.router.push('/')
        })
    }
    render(){
        
        const {post} = this.props;
        
        if(!post){
            return <div> Loading...</div>
        }
         return (
                <div className="show-content col-md-9"> 
                <Link to="/"> Back to Index </Link>
                <button 
                className="delete-button btn btn-primary pull-xs-right"
                onClick={this.onDeleteClick.bind(this)}
                >Delete Post
                </button>
                <h3 className="post-title"> {post.title} </h3>
                <img width="250" className="img-rounded" src={post.categories}/>
                <p className="post-content"> {post.content} </p>
                </div>
            )
    }
}

function mapStateToProps(state){
    return {post:state.posts.post}
}
export default connect(mapStateToProps, {fetchPost,deletePost})(PostsShow)
