var id = 123;

var req = ic.ajax.raw({
  type: 'GET',
  url: '/api/dowloads/'+id,
  beforeSend: function (request) {
    request.setRequestHeader('token', 'token for '+id);
  },
  processData: false
});

var maxSizeForBase64 = 1048576; //1024 * 1024

req.then(
  function resolve(result) {
    var str = result.response;

    var anchor = $('.vcard-hyperlink');
    var windowUrl = window.URL || window.webkitURL;
    if (str.length > maxSizeForBase64 && typeof windowUrl.createObjectURL === 'function') {
      var blob = new Blob([result.response], { type: 'text/bin' });
      var url = windowUrl.createObjectURL(blob);
      anchor.prop('href', url);
      anchor.prop('download', id+'.bin');
      anchor.get(0).click();
      windowUrl.revokeObjectURL(url);
    }
    else {
      //use base64 encoding when less than set limit or file API is not available
      anchor.attr({
        href: 'data:text/plain;base64,'+FormatUtils.utf8toBase64(result.response),
        download: id+'.bin',
      });
      anchor.get(0).click();
    }

  }.bind(this),
  function reject(err) {
    console.log(err);
  }
);
