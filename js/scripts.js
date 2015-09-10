

var countUpBy = function(ceil, countBy) {             //begin function
  var resultSet = [];
  for (var i = countBy; i <= ceil; i += countBy) {    //begin loop
    resultSet.push(i);
    // $("ul#count").append("<li>" + i + "</li>");       //populate list
  }
  return resultSet;
};

$(document).ready(function() {

  $('form#counter').submit(function(event) {              //submit button
  var countUpTo = parseInt($("input#ceil").val());                  //grab from form
  var countCeil = parseInt($("input#countBy").val());            //grab from form


  var result = countUpBy(countUpTo, countCeil);
  //
  for (var i in result) {
    $("ul#count").append("<li>" + result[i] + "</li>");
  };
  //
  // $('#count').text(result);
  $('#result').show();
  event.preventDefault();
  });
});
