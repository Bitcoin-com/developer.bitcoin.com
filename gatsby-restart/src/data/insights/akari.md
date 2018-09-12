---
title: AKARI
author: AKARI
description: Tools to boost economic freedom
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

### Intro

AKARI’s focus is on enabling anyone to begin leveraging the many advantages of Bitcoin Cash and increase their economic freedom. One of the ways they do this is by providing a great experience through free and open-source online crowd-fundraising tools and Bitcoin Cash payment tools such as the website pay/donate buttons and APB.

With the help of [BITBOX](../bitbox.html), AKARI’s unique approach to decentralized micro-crowdfunding and donating tools are helping users reach their Bitcoin Cash funding goals.

### Creating an Effective Bitcoin Cash Crowdfunding Experience

The [BitFund.cash](http://BitFund.cash) highlighting project created by AKARI is featuring many new Bitcoin Cash crowdfunding projects and starting to build a community where Bitcoin Cash users can come to support other projects as well as potentially earn some Bitcoin by helping raise awareness for projects and causes. The BitFund.cash website is using BITBOX to display live updates as well as the AKARI payment and crowdfunding tools such as the AKARI-PAGES Builder (or APB) which also leverage BITBOX for visualizing live donations to Bitcoin Cash addresses.

The new Builder tool focuses on solving the needs of crowd-funders with an emphasis on freedom, says AKARI's founders “We had to take into account that many users wish to receive funding directly in a peer-to-peer manner, as well as wish to ensure that they completely own their fundraising campaigns and have the freedom to continue leveraging the tools indefinitely. On top of that it had to be completely free for crowdfunders to begin, and maintain. In this regard we focused on enabling anyone to build their own featured crowdfunding pages without requiring design or coding experience or even a web-host, yet is fully extensible as their crowdfunding progresses.”

Seeking to create an effective tool for users as well as mobile visitors, developers at AKARI watched eagerly as the first few fundraisers built their own mobile-friendly pages. “We helped answered questions on Reddit and learned from the early users where we can improve on the Builder tool” explained an AKARI developer, “It's interesting getting to watch live the fundraisers reaction as money comes in directly to the fund the very instant they are sent, thanks to BITBOX and the [Bitcoin.com wallet](https://wallet.bitcoin.com/), they're elated!”

### Successful Campaigns

One of the first successful campaigns was supporting endangered animals in South Africa. A Cheetah Cub breeding program met their first fundraising goal after the project was shared on [Reddit r/btc](http://reddit/r/btc) and [Yours](http://yours.org). It is a great feeling supporting projects like this because you know for sure they are doing the right thing and it must be done. They’re eager to get the next one going now. We also hope to see many humanitarian projects launched soon too. If the project teaches others about Bitcoin Cash it is obviously going to get some quick support.” explains an AKARI founder.

Part of the goals of AKARI's tools is to help teach users how to leverage aspects of Bitcoin Cash as they are involved in the fundraising process, that means they learn about how to set up an [Electron Cash wallet](https://electroncash.org/) or Bitcoin.com wallet and learn how to get the new type of Bitcoin Cash address to use in their fundraiser, as well as learn about other Bitcoin Cash ecosystem projects.

A really popular feature of the donation pages and payment pages is the progress indication and goal setting. Beyond increasing donation rates and effectiveness thanks to the various mobile options, AKARI developed a unique mobile-friendly progress indicator that displays clearly on nearly every internet device and leverages the live information from BITBOX. “This was the most effective aspect of the tools, it reduces the barriers to payment while providing direct feedback to Bitcoin Cash users.”

### Code Samples

[BITBOX](../bitbox.html) was fast and easy to interact with compared to other block explorer APIs and has been reliable, “We couldn’t have accomplished what we are doing at AKARI and at the rate that we aim to innovate without the timely help of BITBOX. The main connection was the AJAX function we created which allowed us to provide fundraisers with live updates on their fundraising campaigns. It uses AJAX to make a client-side link between the AKARI page and BITBOX to fetch live details from the crowdfunder's Bitcoin Cash Receiving Address and make live calculations based on that address, such as the percentage of their fundraising goal reached.”

          `var delay = Math.floor(Math.random() * 5000) + 1000;

$.get("front_address.txt", function(address) {
var bchaddress = address;
var apiout = "https://rest.bitbox.earth/v1/address/details/"+bchaddress;
window.apiout = apiout;
});

    $.get("front_goal.txt", function(response) {

var goaltxt = response;
window.value1 = parseFloat(goaltxt);
});

    $.get("front_currentgoalnum.txt", function(currentgoalnum) {

var goalcount = currentgoalnum;
window.value8 = (goalcount);
});

function polling(func, wait, times){
var interv = function(w, t){
return function(){
if(typeof t === "undefined" || t-- > 0){
setTimeout(interv, w);
try{
func.call(null);
}
catch(e){
t = 0;
throw e.toString();
}
}
};
}(wait, times);
setTimeout(interv, wait);
};

polling(function(){
$.ajax({
type: "GET",
contentType: 'application/json; charset=utf-8',
url: window.apiout,
success: function(data){
document.getElementById('output').innerHTML = (data.totalReceived);
var goal = value1;
var percentage = (Math.floor((data.totalReceived / goal) _ 100));
var percentofgoal = (Math.floor((data.totalReceived / goal) _ 100)+"%");

     document.getElementById('percent').innerHTML = (percentofgoal);
     document.getElementById('goal').innerHTML = (goal);
     document.getElementById('goalcount').innerHTML = (window.value8+' ');

var quart = (percentage/4 | 0);
var total = 100;
var totalquart = (total/4);
function repeat(s, n){
return ((new Array(n+1)).join(s));
}
var barcount = (repeat('█', quart));
var difference = (repeat('█', totalquart-quart));
document.getElementById('bar').innerHTML = (barcount);
document.getElementById('barfill').innerHTML = (difference);
var processing = (data.unconfirmedBalance);
if (processing > 0) {
document.getElementById('output1').innerHTML = (data.unconfirmedBalance);
return false;
}
console.log("polling");
}
});
}, delay, 1);`

### Summary

AKARI is constantly working on tools that will help individuals begin a new Bitcoin Cash journey and boost economic freedoms on an individual basis, and BITBOX and [@cgcardona](https://twitter.com/cgcardona) have been amazing in helping us step toward these goals.

Learn more about AKARI at [http://agf.earth](http://agf.earth) and start your fundraiser at [http://BitFund.cash](http://BitFund.cash)
