
     import React, { Component } from 'react';
     import './ContentRating.css';

     class ContentRating extends Component {
       constructor() {
         super();
         this.state = {
             likes: 0,
             dislikes: 0,
           handleLike:() => {
             this.setState((prevState) => ({
                 likes: prevState.likes + 1
               }));
           },
           handleDislike:() => {
             this.setState((prevState) => ({
                 dislikes: prevState.dislikes + 1
               }));
           }
           };
       }
       render() {
         return (
          <>
          <h1>Ocena treści tekstu</h1>
          <div className='content-rating'>
             <p>Tekst</p>
             <div className='rating-buttons'>
             <button className="like-button" onClick={this.state.handleLike}>
                 Lubię to ({this.state.likes})
               </button>
               <button className="dislike-button" onClick={this.state.handleDislike}>
                 Nie lubię ({this.state.dislikes})
               </button>
             </div>

          </div>
          </>
         );
       }
     }

     export default ContentRating;