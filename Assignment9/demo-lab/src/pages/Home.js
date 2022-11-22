import React from 'react'
import Card from '../pages/Card';
import cake from './cake.jpg'
// function Home() {
//     return (
//         <div>This is the Home Page!!!</div>
//     )
// }

class Home extends React.Component {
    render() {
      return (
        <div>


    

           <div class="card-body">
          <div class="container px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 align-items-center my-5">
              <div class="col-lg-7">
                <img
                  class="img-fluid rounded mb-4 mb-lg-0"
                  // src="https://www.datocms-assets.com/14946/1633281680-ux-vs-ui-cover-edited.png?auto=format&w=912"
                  src={cake}
                  alt="..."
                />
              </div>
              <div class="col-lg-5">
                <h2 class="font-weight-light">Do you love cupcakes?</h2>
                <p>
                Croissant gummi bears brownie bonbon donut gummi bears sugar plum jujubes. Icing pie sweet sweet roll chocolate bar icing jelly-o sesame snaps jujubes. Cotton candy cheesecake ice cream jujubes bonbon gummies tiramisu tootsie roll. Jelly chupa chups chupa chups cupcake chupa chups pudding. Lollipop caramels tiramisu biscuit bonbon gummi bears apple pie cheesecake. Powder dessert chocolate cake gingerbread chupa chups carrot cake toffee jelly-o sweet roll. Chocolate cake gummies cookie candy sweet roll wafer marshmallow oat cake.
                </p>
                <a class="btn btn-primary" href="#!">
                  More Info
                </a>
              </div>
            </div>
            
            
          </div>
          
        </div>
        <Card id="Home"></Card>
        </div>
      );
    }
  }
export default Home