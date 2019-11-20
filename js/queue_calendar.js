document.addEventListener('DOMContentLoaded', function () {
    var elems = document.getElementById('queueDate');
    M.Datepicker.init(elems, options);
});

// Or with jQuery

$(document).ready(function () {
    $('.datepicker').datepicker();
});

$(document).ready(function() {
    M.updateTextFields();
  });