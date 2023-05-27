 function show(shown, hidden) { document.getElementById(shown).style.display='block'; document.getElementById(hidden).style.display='none'; return false; } </script> </head> <body> <div id="Page1"> <a class="btn btn-primary"href="#" onclick="return show('Page2','Page1');">Tham Gia Discord</a> </div> <div id="Page2" style="display:none"> 

var ping = new Date; $.ajax({ url: "ping-server.html", cache:false, success: function(output){ ping = new Date - ping; Console.log("Ping/Latency: " + ping); } }); </script>function myFunction() {

  // Get the text field

  var copyText = document.getElementById("myInput"); 

  // Select the text field

  copyText.select();

  copyText.setSelectionRange(0, 99999); // For mobile devices 

  // Copy the text inside the text field

  navigator.clipboard.writeText(copyText.value);

  

  // Alert the copied text

  alert("Đã Sao Chép " + copyText.value);

}

  var channelID = "UCqZ4kYJ3QFdihfa3rZZa9Sg"; var reqURL = "https://www.youtube.com/feeds/videos.xml?channel_id="; $.getJSON("https://api.rss2json.com/v1/api.json?rss_url=" + encodeURIComponent(reqURL)+channelID, function(data) { var link = data.items[0].link; var id = link.substr(link.indexOf("=")+1); $("#youtube_video").attr("src","https://youtube.com/embed/"+id + "?controls=0&showinfo=0&rel=0"); });// Set the date we're counting down to

var countDownDate = new Date("May 21, 2023 11:50:00").getTime();

// Update the count down every 1 second

var x = setInterval(function() {

  // Get today's date and time

  var now = new Date().getTime();

            

  // Find the distance between now an the count down date

  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in an element with id="demo"

  document.getElementById("demo").innerHTML = days + "d " + hours + "h "

  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text

if (distance < 0) {

    clearInterval(x);

    document.getElementById("demo").innerHTML = "EXPIRED";

  }

}, 1000);            <a href="/dashboard" class="btn btn-outline-primary" type="button">Dashboard</a>`);

      });

      $.get("/api/commands", (data) => {

        //same as above check it :eyes:

        data.commands.forEach((cmd) => {

          $("#commands-body").append(`

<tr>

  <th scope="row">${cmd.name}</th>

  <td>${cmd.aliases ? cmd.aliases.join(", ") : "None"}</td>

  <td>${cmd.usage ? cmd.usage : "None"}</td>

  <td>${cmd.description ? cmd.description : "None"}</td>

</tr>

`);

        });

      });

    });
$(document).ready(() => {

      $.get("/api/info", (data) => {

        //check api/routes.js

        let url = `https://discord.com/oauth2/authorize?client_id=${

          data.ClientID

        }&permissions=${data.Permissions}&scope=${data.Scopes.join("%20")}&redirect_url=${data.Website}${data.CallbackURL}&response_type=code`;

        

        $("#hero").append(`<a href="${url}" class="btn btn-primary" type="button">Invite</a>

