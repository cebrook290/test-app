import React from "react";
import Post from "./post";

let e = React.createElement;

export default class Newsfeed extends React.Component {
    render() {
        let comments = [
            {
                content: 'This is my post',
                username: 'Tommy',
                date: '12-2-2020' 
            },
            {
                content: 'This is my post',
                username: 'Sammy',
                date: '12-31-2020' 
            },
            {
                content: 'This is my amazing post',
                username: 'Carolyn',
                date: '1-2-2021' 
            }
        ]; 
        return (
            <div className="container">
                <Post {...{comments: comments, content: 'This is my post Content!!'}} />
                <Post {...{content: 'This is ANOTHER post!!! OMG'}} />
                <Post/>
                
            </div>
        )
        
        
        
        // return e('div',
        //     {class: 'container'},
        //     e(Post, {}, null),
        //     e(Post, {}, null),
        //     e(Post, {}, null),
        // );
    }
}