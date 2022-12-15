var datePickerOptions = {
    dateFormat: 'd/m/yy',
    firstDay: 1,
    changeMonth: true,
    changeYear: true
  }
  
  $(document).ready(function() {
    $('.datepicker').datepicker();
    $('#addInput').live('click', function(){
      $input = $('<input type="text" name="mydate[]" />').datepicker(datePickerOptions);
      $('<div>').html($input).appendTo($('#main'));
    });
  });
  
