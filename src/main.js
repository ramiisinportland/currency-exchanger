import $ from 'jquery'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import './css/styles.css'

function getElements(response) {
  if (response.meta.code === 200) {
    $("#show-result").text(response)
  } else {
    $('.showErrors').text(`There was an error: ${response.status}`);
  }
}