// le boutton google

var googleUser = {};
  var startApp = function() {
    gapi.load('auth2', function(){

      auth2 = gapi.auth2.init({
        client_id: 'YOUR_CLIENT_ID.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',

      });
      attachSignin(document.getElementById('customBtn'));
    });
  };

  function attachSignin(element) {
    auth2.attachClickHandler(element, {},
        function(googleUser) {
          document.getElementById('name').innerText = "Signed in: " +
              googleUser.getBasicProfile().getName();
        }, function(error) {
         //  alert(JSON.stringify(error, undefined, 2));
        });
  }

  // la video

  let video = document.querySelector('video');
video.addEventListener('playing', ()=> {
  if(video.ended){
    video.play()
  }
})