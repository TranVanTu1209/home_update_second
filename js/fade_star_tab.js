var starChoiceBtn = $('#showcase #star-tab').fadeOut();
$('#showcase .room-type-form button#star').on('click', (e) => {
  starChoiceBtn.fadeToggle();
  e.preventDefault();
});