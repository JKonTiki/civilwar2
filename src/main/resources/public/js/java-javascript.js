var selectedStateNames = [];
var selectedStatesString;
var target;
var previousTargetsHit;
var previousTargetsMissed;

$(document).ready(function() {

// select bases page functions

  $("#player1-add-bases-button").click(function(){
    selectedStateNames=[];
    selectedStatesString = "";
    if(selectedStateNames.length === 0) {
      selectedStates.forEach(function(state){
        selectedStateNames.push(state.name);
      });
      selectedStatesString = selectedStateNames.join(",");
      console.log(selectedStatesString);
      $("#player1-put-bases-for-java").html("<input name='player1-bases' class='hide' value='" + selectedStatesString + "'>");
    }
    var count = (selectedStatesString.match(/,/g) || []).length;
    if (count===4) {
      $("#player1-button").removeClass("disable-button");
    } else{
      $("#select-five-states-1").text("YOU MUST SELECT FIVE STATES");
    }
  });

  $("#player2-add-bases-button").click(function(){
    selectedStateNames=[];
    selectedStatesString = "";
    if(selectedStateNames.length === 0) {
      selectedStates.forEach(function(state){
        selectedStateNames.push(state.name);
      });
      selectedStatesString = selectedStateNames.join(",");
      console.log(selectedStatesString);
      $("#player2-put-bases-for-java").html("<input name='player2-bases' class='hide' value='" + selectedStatesString + "'>");
    }
    var count = (selectedStatesString.match(/,/g) || []).length;
    if (count===4) {
      $("#player2-button").removeClass("disable-button");
    } else{
      $("#select-five-states-2").text("YOU MUST SELECT FIVE STATES");
    }
  });

  // attack stage operations
  // if(previousTargetsHit){
    previousTargetsHit = $("#previousTargetsHit").val();
  // }
  console.log(previousTargetsHit);

  // if(previousTargetsMissed){
    previousTargetsMissed = $("#previousTargetsMissed").val();
  // }
  console.log(previousTargetsMissed);

  $("#attack-select").click(function(){
    target = "";
    target = targetState;
    console.log(target);
    $("#target").html("<input name='target' class='hide' value='" + target + "'>");
    if(target.length > 1) {
      $("#attack-finalize").removeClass("disable-button");
    }
  });





});
