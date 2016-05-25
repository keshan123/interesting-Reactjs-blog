import React,{Component} from 'react';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';
import {Link} from 'react-router';

class PostsNew extends Component {
    render(){
        const { fields: {title, categories,content} ,handleSubmit} = this.props;
        
        
        return(
        
            <form onSubmit = {handleSubmit(this.props.createPost)}>
            <h3> Create a New Post </h3>
            
            <div className="form-group">
            
            <label> Title </label>
            <input type="text" className="form-control" {...title} />
            <div className="text-help text-danger">
                {title.touched ? title.error : ''}
            </div>
            
            <label> Categories </label>
            <input type="text" className="form-control" {...categories} />
            <div className="text-help text-danger">
                {categories.touched ? categories.error : ''}
            </div>
            
            <label> Content </label>
            <textarea className="form-control" {...content} />
            </div>
            <div className="text-help text-danger">
                {content.touched ? content.error : ''}
            </div>
            
            <button type="submit" className="btn btn-primary">
            Submit </button>
            
            <Link to="/" className= "btn btn-danger"> Cancel </Link>
            </form>
        )
    }
}

function validate(values) {
    const errors = {};
    
    if(!values.title){
        errors.title = 'Enter a Title'
    }
    
    if (!values.categories){
        errors.categories = 'Enter Category'
    }
    if (!values.content){
        errors.content = 'Enter some Content'
    }
    return errors;
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'], validate
},null, {createPost})(PostsNew);