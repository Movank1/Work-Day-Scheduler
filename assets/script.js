

    $(document).ready(function () {
  //  Add a listener for click events on the save button. 
      $('.saveBtn').on('click', function () {
 
  // use the id in the containing time-block as a key to save the user input such as Names; time; and Job title in
  // local storage.
        var value = $(this).siblings('.description').val();
        var time = $(this).parent().attr('id');
        var label = $(this).parent().find('[type="radio"]:checked').val();    
        
        localStorage.setItem(time, value);
        localStorage.setItem(time + '-title', label);      

    // Message to Show notification that item was saved to localStorage by adding class 'show'
    $('.notification').addClass('show');
  
    setTimeout(() => {
      $('.notification').removeClass('show');
    }, 10000);
  });

  const hourUpdater = () => {

    // get current number of hours

    const currentHour = dayjs().hour();

    // loop over time blocks
  
    $('.time-block').each((index, element) => {
      const blockHour = parseInt($(element).attr('id').split('-')[1]);
  // check if we've moved past this time
      if (blockHour < currentHour) {
        $(element).addClass('past');
      } else if (blockHour === currentHour) {
        $(element).removeClass('past').addClass('present');
      } else {
        $(element).removeClass('past present').addClass('future');
      }
    });
  };

  hourUpdater();

  // set up interval to check if current time needs to be updated
  setInterval(hourUpdater, 15000);

  // load any saved data from localStorage
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));

  // Today date and time
  
  $('#currentDay').text(dayjs().format('dddd, MMMM D, YYYY h:mm A'));
});

