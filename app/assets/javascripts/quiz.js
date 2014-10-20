$(document).ready(function () {
//    making it static before I make it dynamic with the questions
    var question = $.ajax({type: "GET", url: '/quizzes/1/questions/1.json', dataType: 'json', async: false, success: function (data) {
        $('.question').append(data.description);
        var answerLength = data.possible_answers.length;
        for (i = 0; i < answerLength; i++) {
            $('.answers .container').append('<button class="btn btn-primary" value="' + data.possible_answers[i].correct + '" id="' + data.possible_answers[i].id + '">' + data.possible_answers[i].description + '</button>');
        }

    }});

    $('button').on('click', function(e) {
        if (e.target.value === 'true') {
            e.target.className = 'btn btn-success';
            $('.result').append('Correct!! </br> The answer is ' + e.target.innerText)

        } else {
            var correctAnswer = $('[value="true"]').text();
            $('.result').append('Incorrect!! </br> The answer was ' + correctAnswer)
            e.target.className = 'btn btn-danger'
//            setTimeout(function () {
//                $('.result').   I was about to set timeout on the notice so that There wasn't duplicate messages.  I probably should have just replaced the text.
//            }, 5000)
        }

    })
});

// I was having trouble manipulating the ajax object outside of the ajax call itself, so I did it all inside, I realize this is probably not best practices