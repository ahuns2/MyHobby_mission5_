$(document).ready(function () {
    $('#calculateBtn').click(function () {
        var hours = parseFloat($('#hours').val());

        // Validate input
        if (isNaN(hours) || hours <= 0) {
            $('#hoursError').text('Please enter a valid positive number.');
            return;
        } else {
            $('#hoursError').text('');
        }

        var hourlyRate = parseFloat($('#hourlyRate').val().replace('$', ''));
        var totalCost = hours * hourlyRate;

        $('#totalCost').text('$' + totalCost.toFixed(2));
    });
});
