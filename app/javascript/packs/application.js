// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
import 'bootstrap';
// import 'jquery-bar-rating/dist/themes/fontawesome-stars.css';
import 'jquery-bar-rating/dist/themes/css-stars';
import 'jquery-bar-rating';


document.addEventListener('turbolinks:load', ()=> {
  $(function() {
        $('#rating').barrating({
          theme: 'css-stars'
        });
     });
});

// document.addEventListener('turbolinks:load', () => {
//   document.getElementById('CreateListButton').addEventListener('click', () => {
//     AddQuerySearchToImageURL();
//   });
//   // console.log(document.getElementById('hidden_imageUrl'));
//   // 
// });
