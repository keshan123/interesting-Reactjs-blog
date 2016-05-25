import React,{Component} from 'react';
import {reduxForm} from 'redux-form';

class PostsNew extends Component {
    render(){
        const {handleSubmit} = this.props;
        return(
        
            <form onSubmit = {handleSubmit}>
            <h3> Create a New Post </h3>
            
            <div className="form-group">
            
            <label> Title </label>
            <input type="text" className="form-control"/>
            
            <label> Catergories </label>
            <input type="text" className="form-control"/>
            
            <label> Content </label>
            <textarea className="form-control"/>
            </div>
            
            <button type="submit" className="btn btn-primary">
            Submit </button>
            
            </form>
        )
    }
}

export default reduxForm({
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content']
})(PostsNew);