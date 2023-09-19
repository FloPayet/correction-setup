import _ from 'lodash';
// Import our custom CSS
import '../src/scss/style.scss'

// Import all of Bootstrap's JS
function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  
    return element;
  }
  
document.body.appendChild(component());