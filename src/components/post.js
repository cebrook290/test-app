import React from "react";
import ReplyButton from "./reply-button";
import LikeButton from "./like-button";
import Comment from "./comment";

let e = React.createElement;

export default class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: props.comments,
            content: props.content
        };
    }

    render() {
        
        let comments;
        if (this.state.comments) {
            comments = this.state.comments.map((comment, index) => <Comment key = {index} {...comment} />);
            // for (let comment of this.state.comments) {
            //     comments.push(<Comment {...comment} />)
            // }
        }

        return (
            <div className="card w-75">
                <div className="card-header bg-primary text-white">
                    Username and Time
                </div>
                <div className="card-body">
                    {this.state.content}
                </div>
                <div className="card-footer">
                    <LikeButton/> <ReplyButton/>
                    <br></br>
                    {comments}
                </div>
            </div>
        )

        // return e('div',
        //     {class: 'card w-75'},
        //     e('div',
        //     {class: 'card-header bg-success text-white'},
        //     'Username and Time'),
        //     e('div',
        //     {class: 'card-body'},
        //     'Post Content'),
        //     e('div',
        //     {class: 'card-footer'},
        //         e(LikeButton, {}, null),
        //         e('span', {}, " "),
        //         e(ReplyButton, {}, null),
        //         e('br', {}, null),
        //         e(Comment, {}, null),
        //         e(Comment, {}, null)
        //     )
        // );
    }
}