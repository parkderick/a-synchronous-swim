(function () {

  const serverUrl = 'http://127.0.0.1:3000';

  //
  // TODO: build the swim command fetcher here

  // const a = function (fn) => {
  //   setTimeout(fn, 1000)
  //   console.log('working')
  //   // var formData = new FormData();
  //   // formData.append('file', file);
  // }
  var a = () => {
    $.ajax({
      type: 'GET',
      // data: formData,
      url: serverUrl,
      cache: false,
      contentType: false,
      processData: false,
      success: (data) => {
        console.log('Request Success');
        // // reload the page
        // // window.location = window.location.href;
        SwimTeam.move(data);
        // alert("Data: " + data)
      }
    })
  }
  setInterval(a, 2000)


  /////////////////////////////////////////////////////////////////////
  // The ajax file uplaoder is provided for your convenience!
  // Note: remember to fix the URL below.
  /////////////////////////////////////////////////////////////////////

  // const ajaxFileUplaod = (file) => {
  //   var formData = new FormData();
  //   formData.append('file', file);

  //   $.ajax({
  //     type: 'POST',
  //     data: formDatad,
  //     url: serverUrl,
  //     cache: false,
  //     contentType: false,
  //     processData: false,
  //     success: () => {
  //       // reload the page
  //       window.location = window.location.href;
  //     }
  //   });
  // };

  $('form').on('submit', function (e) {
    e.preventDefault();

    var form = $('form .file')[0];
    if (form.files.length === 0) {
      console.log('No file selected!');
      return;

    }

    var file = form.files[0];
    if (file.type !== 'image/jpeg') {
      console.log('Not a jpg file!');
      return;
    }

    ajaxFileUplaod(file);
  });

})();
