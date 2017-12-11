// Here You can type your custom JavaScript...
var rr_script1 = document.createElement('script');
rr_script1.type = 'text/javascript';
rr_script1.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js';
document.head.appendChild(rr_script1);
var rr_APIKey = 'showcaseparent';
var rr_script = document.createElement('script');
rr_script.type = 'text/javascript';
rr_script.src = 'https://media.richrelevance.com/rrserver/js/1.2/p13n.js';
document.head.appendChild(rr_script);
var rr_pershubdone = false;
//Personalisation hub insert
if (!rr_pershubdone){
  var rr_recshub = document.createElement('div');
  rr_recshub.id = "rrPersHub";
  var perHubCont = `
  <p id='rr_recshubHeading'></p>
  <div id='persrecs'></div>
  <div id='recentview'></div>
  `;
  rr_recshub.innerHTML = perHubCont;

      rr_pershubdone = true;
      var bbb = document.querySelector(".atkGlobalHeader");
      setTimeout(function() { bbb.appendChild(rr_recshub) }, 1000);
}
function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function DisplayRecs(){
  console.log("check");
  console.log(RR.data.JSON.placements);
  for (var key in RR.data.JSON.placements) {
    var curPlacement = RR.data.JSON.placements[key];
    console.log("check123");
    console.log(curPlacement[0]);
    if (curPlacement[0]['placementType']==='home_page.atk' && rr_pershubdone){
      DisplayRecentlyViewed(curPlacement[0]);
    }
    else{
      console.log("Error here");
    }
  }
}
function DisplayRecentlyViewed(thePlacement){

  var addTxt = '<div class="recentItems">';
  addTxt += '<div></div>';
    addTxt += '<a href="'+thePlacement.link+'"><img src= "'+thePlacement.image + '"title="'+thePlacement.title+'"/></a>';
  addTxt += '</div>';
  console.log("Look here");
  console.log(thePlacement.title);

  document.getElementById("recentview").innerHTML = addTxt;
}
var waitTime = setTimeout(function(){
RR.jsonCallback = function(){
  console.log('recs:');
  // console.dir(RR.data.JSON.placements);
  DisplayRecs();
};
var R3_COMMON = new r3_common();
window.R3_COMMON = R3_COMMON;
R3_COMMON.setApiKey(rr_APIKey);
R3_COMMON.setBaseUrl('https://integration.richrelevance.com/rrserver/');
R3_COMMON.setClickthruServer(window.location.protocol + "//" + window.location.host);
R3_COMMON.setSessionId('123456789');
R3_COMMON.setUserId('ABCDEF');
R3_COMMON.addPlacementType('home_page.atk');
var R3_HOME = new r3_home();
window.R3_HOME = R3_HOME;
R3_COMMON.addSegment('atk1');
rr_flush_onload();
r3();
}, 2000);
