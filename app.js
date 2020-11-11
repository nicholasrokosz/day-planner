for(let hour = 9; hour < 18; hour++) {
    $(".container").append(createTimeSlot(hour));
}
function createTimeSlot(hour) {
  const $timeSlot = $("<div>")
  .attr("id", `hour-${hour}`)
  .attr("value", hour)
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
  
  let currentTime = luxon.DateTime.local().toFormat("H");
  $(".container").each(function(block){
      console.log($timeSlot.attr("value"));
      if($timeSlot.attr("value") < currentTime) {
          $textArea.css("background-color", "gray");
          } else if ($timeSlot.attr("value") == currentTime){
            $textArea.css("background-color", "red");
          } else{
            $textArea.css("background-color", "green");
          }
  });
  return $timeSlot;
}