import React from "react";
import Card from '../pages/Card';
class Contact extends React.Component {
  render() {
    return (
      <div class="contact-form">
        <div class="cards">
          <div class="card-body">
            <h5 class="card-title">Contact US</h5>
            <p class="card-text">
              Contact us for queries and questions regarding the desserts and job
              opportunities.
            </p>
            <a href="mailto:admission@notheastern.edu" class="btn btn-primary">
              Email Us
            </a>
          </div>
        </div>
        <Card id="Contact"></Card>
      </div>
    );
  }
}

export default Contact;
