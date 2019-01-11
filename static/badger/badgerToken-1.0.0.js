/* BadgerToken 1.0.0
For documentation and resources visit https://developer.bitcoin.com/badger
*/

window.onload = function() {
  var badgerButtons = document.body.getElementsByClassName('badger-button')
  for (var i = 0; i < badgerButtons.length; i++) {
    var badgerButton = badgerButtons[i]
    badgerButton.addEventListener('click', function(event) {
      if (typeof web4bch !== 'undefined') {
        web4bch = new Web4Bch(web4bch.currentProvider)

        var txParams = {
          to: badgerButton.getAttribute('data-to'),
          from: web4bch.bch.defaultAccount,
          value: badgerButton.getAttribute('data-token-amount'),
          sendTokenData: {
            tokenId: badgerButton.getAttribute('data-token-id'),
            tokenProtocol: badgerButton.getAttribute('data-token-protocol'),
          },
        }
        web4bch.bch.sendTransaction(txParams, (err, res) => {
          if (err) return

          var paywallId = badgerButton.getAttribute('data-paywall-id')
          if (paywallId) {
            var paywall = document.getElementById('paywall')
            paywall.style.display = 'block'
          }

          var successCallback = badgerButton.getAttribute(
            'data-success-callback'
          )
          if (successCallback) {
            window[successCallback](res)
          }
        })
      } else {
        window.open('https://badger.bitcoin.com')
      }
    })
  }
}
