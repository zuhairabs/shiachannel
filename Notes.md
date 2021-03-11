function getTimings() {
  fetch('http://api.aladhan.com/v1/timingsByCity?city=Mumbai&country=India&method=0')
  .then(res => res.json())
  .then(data => {
      const { data: { timings } } = data;
      renderTimings(timings);
    }
  )
  .catch(err => console.log(err));
}

function renderTimings(timings){
  for(let time in timings){
    console.log(time + ": " + timings[time]);
  }
}

getTimings();

// Get Location
fetch('https://extreme-ip-lookup.com/json/')
.then( res => res.json())
.then(response => {
    console.log("City: ", response.city);
    console.log("Country: ", response.country);
 })
 .catch((data, status) => {
    console.log('Request failed');
 })

//Decode Arabic
// var string = "http\\u00253A\\u00252F\\u00252Fexample.com";
// decodeURIComponent(JSON.parse('"' + string.replace(/\"/g, '\\"') + '"'));
// \u0627\u0644\u062e\u0645\u064a\u0633

// Change font based on Language
// https://stackoverflow.com/questions/31318067/how-to-change-the-font-family-when-user-language-changes-from-english-to-hebrew
//https://stackoverflow.com/questions/25827756/change-the-font-based-on-language-css

/*
<!DOCTYPE html>
<html>

<body>
<!-- GTranslate: https://gtranslate.io/ -->
<a href="#" onclick="doGTranslate('en|ar');return false;" title="Arabic" class="gflag nturl" style="background-position:-100px -0px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Arabic" /></a><a href="#" onclick="doGTranslate('en|az');return false;" title="Azerbaijani" class="gflag nturl" style="background-position:-500px -600px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Azerbaijani" /></a><a href="#" onclick="doGTranslate('en|en');return false;" title="English" class="gflag nturl" style="background-position:-0px -0px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="English" /></a><a href="#" onclick="doGTranslate('en|hi');return false;" title="Hindi" class="gflag nturl" style="background-position:-500px -100px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Hindi" /></a><a href="#" onclick="doGTranslate('en|fa');return false;" title="Persian" class="gflag nturl" style="background-position:-200px -500px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Persian" /></a><a href="#" onclick="doGTranslate('en|tr');return false;" title="Turkish" class="gflag nturl" style="background-position:-100px -500px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Turkish" /></a><a href="#" onclick="doGTranslate('en|ur');return false;" title="Urdu" class="gflag nturl" style="background-position:-100px -700px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Urdu" /></a><a href="#" onclick="doGTranslate('en|gu');return false;" title="Gujarati" class="gflag nturl" style="background-position:-600px -700px;"><img src="//gtranslate.net/flags/blank.png" height="16" width="16" alt="Gujarati" /></a>

<style type="text/css">
<!--
a.gflag {vertical-align:middle;font-size:16px;padding:1px 0;background-repeat:no-repeat;background-image:url(//gtranslate.net/flags/16.png);}
a.gflag img {border:0;}
a.gflag:hover {background-image:url(//gtranslate.net/flags/16a.png);}
-->
</style>

*/