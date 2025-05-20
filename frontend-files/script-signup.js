var my_modal = document.getElementById('signup-modal');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == my_modal) {
    my_modal.style.display = "none";
  }
}