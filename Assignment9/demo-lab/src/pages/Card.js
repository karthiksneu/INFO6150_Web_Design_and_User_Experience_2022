import React from "react";
class Card extends React.Component {
    render() {
      var namebar = this.props.id;
  
      return (
        <div class="card custom-card">
          <div class="card-header">{namebar}</div>
          <div class="card-body">
           <p class="card-text">{"This is the " + namebar + " page"}</p>
            
          </div>
        </div>
      );
    }
  }
  
  export default Card;