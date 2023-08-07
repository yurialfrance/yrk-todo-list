import React, { Component } from 'react';

class AddTodo extends Component {
    state = {
        title: '',
    };

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title); // Use lowercase 'addTodo'
        this.setState({ title: '' }); // Clear the input field after submitting
    };
    

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    placeholder="Add new todo list... 新しい「やること」リストを追加する..."
                    onChange={this.onChange}
                    style={{ flex: '10', padding: '5px' }}
                    value={this.state.title} 
                />
                <input type="submit" value="Submit 送信" className="btn" />
            </form>
        );
    }
}

export default AddTodo;
