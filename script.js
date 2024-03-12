$(function () {
  
  $('#currentDay').text(dayjs().format('MMMM D, YYYY'));

  $('.saveBtn').on('click', function() {
    var hour = $(this).parent().attr('id');
    var text = $(this).siblings('.description').val();
    localStorage.setItem(hour, text);
  });

  
  $('.time-block').each(function() {
    var hour = parseInt($(this).attr('id').split('-')[1]);
    var currentHour = dayjs().hour();

    if (hour < currentHour) {
      $(this).addClass('past');
    } else if (hour === currentHour) {
      $(this).addClass('present');
    } else {
      $(this).addClass('future');
    }
  });

  
  $('.time-block').each(function() {
    var hour = $(this).attr('id');
    var text = localStorage.getItem(hour);

    if (text) {
      $(this).children('.description').val(text);
    }
  });
});