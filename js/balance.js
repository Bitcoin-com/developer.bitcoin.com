var balanceBaseURL = 'https://blockchain.info/q/addressbalance/';
var exchangeRateURL = 'https://blockchain.info/ticker';

var balances = {};

function onExchangeRateUpdated(result)
{
  exchangeRates = result;
  doBalanceUpdateAll();
}

function convertSatsToBTC(sats)
{
  btc = sats * .00000001;
  return "\u0243" + btc.toFixed(4);
}

function convertSatsToUSD(sats)
{
  usd = sats * .00000001 * exchangeRates.USD['15m'];
  return '~$' + Number(usd.toFixed(0)).toLocaleString('en');
}

function doBalanceUpdateAll()
{
  elements = $('[data-btcbalance=true]');

  elements.each(
    function(index, element)
    {
      addr = $(element).attr('data-btcaddress')
      balances[index] = {
        addr: addr,
        element: element
      };
      doBalanceUpdate(addr, function(result) { onBalanceUpdated(index, result) });
    }
  );
}

function onBalanceUpdated(index, result)
{
  var target = $(balances[index].element);
  var output = convertSatsToBTC(result) + ' (' + convertSatsToUSD(result) + ')';
  target.text(output);
}

function doBalanceUpdate(addr, cb)
{
  $.ajax(
    {
      type: 'GET',
      dataType: 'json',
      url: balanceBaseURL + addr + '?cors=true',
      success: cb
    }
  );
}

function doExchangeRateUpdate()
{
  $.ajax(
    {
      type: 'GET',
      dataType: 'json',
      url: exchangeRateURL + '?cors=true',
      success: onExchangeRateUpdated
    }
  );
}

function init()
{
  doExchangeRateUpdate();
}

$(document).ready(init);