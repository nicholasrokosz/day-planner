for(let hour = 9; hour < 18; hour++) {
    $(".container").append(createTimeSlot(hour));
}
function createTimeSlot(hour) {
  const $timeSlot = $("<div>")
  .attr("id", "hour-" + hour)
  .attr("class", "row time-block");
  const $timeLabel = $("<div>").attr("class", "col-md-1 hour");
  if (hour > 12) {
    $timeLabel.text(`${hour - 12} PM`);
  } else if (hour === 12) {
    $timeLabel.text(`${hour} PM`);
  } else {
      $timeLabel.text(`${hour} AM`);
  }
  const $textArea = $("<textarea>")
  .attr("class", "col-md-10 description");
  const $saveBtn = $("<button>")
  .attr("class", "btn saveBtn col-md-1")
  .append($("<i>").attr("class", "fas fa-save"));
  $timeSlot.append($timeLabel, $textArea, $saveBtn);
  return $timeSlot;
}