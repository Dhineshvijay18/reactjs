import Singlepost from '../Singlepost/Singlepost';
const { Component } = require('react');
class Post extends Component {
        state = {
       posts: [ 
        { title:"Post 1", description:"post 1 description"},
        { title:"Post 2", description:"post 2 description"},
    ],
                postTitle:'postTitle'
    };

 
    }
    render(){
        const posts = [...this.state.posts];
        posts[0].title = 'Modified post title1';
        posts[1].title = 'Modified post title2';
        this.setState({
            posts,
        });
        this.setState({
            postTitle:'Modified Title',
            
        });
        clickHandler() {
            console.log('Dhinesh Babu');
            this.setState({
                postTitle:'Dhinesh Babu',
            })
            console.log(this)
       
        }
        return(
            <div>
                <div>
                    <button onClick = {()=>this.clickHandler()} className='text-1xl font-bold text-whit bg-green-500 px-5 py-5 rounded-3xl'
                   
                    >Click Me!</button>
                </div>
                <h2 className='text-2xl my-3'>{ this.state.postTitle}</h2>
                
             <div className='flex'>
                
                <Singlepost title={this.state.posts[0].title} description={this.state.posts[0].description} />
                <Singlepost title={this.state.posts[1].title} description={this.state.posts[1].description} />
                </div>
            </div>
            
        );

    }
}

export default Post;