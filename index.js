converse.initialize({
  bosh_service_url: 'https://conversejs.org/http-bind/', // Please use this connection manager only for testing purposes
  show_controlbox_by_default: true,
  whitelisted_plugins: ['myplugin'],
  view_mode: 'embedded',
});

converse.plugins.add('myplugin', { initialize: function () {
  this._converse.api.listen.on('messageSend', (msg) => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: msg.attributes.message,
      showConfirmButton: false,
      timer: 1000
    })
  });
  },
});