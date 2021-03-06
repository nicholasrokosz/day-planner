for (let hour = 9; hour < 18; hour++) {
  $('.container').append(createTimeSlot(hour));
}
function createTimeSlot(hour) {
  const $timeSlot = $('<div>')
    .attr('id', `hour-${hour}`)
    .attr('value', hour)
    .attr('class', 'row time-block');
  const $timeLabel = $('<div>').attr('class', 'col-md-1 hour');
  if (hour > 12) {
    $timeLabel.text(`${hour - 12} PM`);
  } else if (hour === 12) {
    $timeLabel.text(`${hour} PM`);
  } else {
    $timeLabel.text(`${hour} AM`);
  }
  const $textArea = $('<textarea>').attr('class', 'col-md-10 description'); // .attr('value', hour)
  const $saveBtn = $('<button>')
    .attr('class', 'btn saveBtn col-md-1')
    .append($('<i>').attr('class', 'fas fa-save'));
  $timeSlot.append($timeLabel, $textArea, $saveBtn);

  let currentTime = parseInt(luxon.DateTime.local().toFormat('H'));
  $('.container').each(function () {
    //console.log($timeSlot.attr("value"));
    if ($timeSlot.attr('value') < currentTime) {
      $textArea.css('background-color', '#d1d5da');
    } else if ($timeSlot.attr('value') == currentTime) {
      $textArea.css('background-color', '#f97583');
    } else {
      $textArea.css('background-color', '#85e89d');
    }
  });
  return $timeSlot;
}

$('#current-day').text(luxon.DateTime.local().toFormat('ff'));

let plansForDay = localStorage.getItem('plansForDay');
if (plansForDay) {
  plansForDay = JSON.parse(plansForDay);
} else {
  plansForDay = [];
}
$('.saveBtn').click(function (e) {
  plansForDay.push({
    currentHour: $(this).parent().attr('id').split('-')[1],
    currentText: $(this).siblings('textarea').val(),
  });
  localStorage.setItem('plansForDay', JSON.stringify(plansForDay));
});

// console.log(plansForDay);

plansForDay.forEach(function (plan) {
  $("div[value='" + plan.currentHour + "']")
    .children('textarea')
    .text(plan.currentText);
});

$('#clear-btn').click(function () {
  window.localStorage.clear();
  location.reload();
});
