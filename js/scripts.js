//program logic
var countUpBy = function(ceil, countBy) {
  var resultSet = [];

  for (var i = countBy; i <= ceil; i += countBy) {
    resultSet.push(i);
  }

  return resultSet;
};


//client logic
$(document).ready(function() {
  $('form#counter').submit(function(event) {
  var countUpTo = parseInt($("input#ceil").val());
  var countCeil = parseInt($("input#countBy").val());
  var result = countUpBy(countUpTo, countCeil);
  for (var i in result) {
    $("ul#count").append("<li>" + result[i] + "</li>");
  };
  $('#result').show();
  event.preventDefault();
  });
});
