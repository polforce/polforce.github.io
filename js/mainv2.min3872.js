$(function(){function a(){$("#btn-connect").removeClass("hide").addClass("hide"),$("#connectedAddress").html(O.substring(0,4)+"..."+O.substring(O.length-4)+"<br/><a>Disconnect</a>"),$("#referredBy").html(b(P)),$("#profileAddress").html(b(O)),$("#introPanel").removeClass("hide").addClass("hide"),$("#profilePanel").removeClass("hide")}function b(a){return Q?a.substring(0,15)+"...":a}async function c(){D.methods.users(O).call(function(f,g){f?console.log(f):0<g.id?(a(),$("#profilePanelRegisterSection").addClass("hide"),$("#profilePanelRegistered").removeClass("hide"),$("#refURL").val("https://polforce.github.io/?ref="+O),$("#playerID").html(g.id),$("#matrixParent").html(b(g.referrer)),$("#totalInvitedPartners").html(g.partnersCount),$("#totalDividendEarnings").html(new BigNumber(g.divsClaimed).div(S).toFixed(5)+" POL"),d(e),setTimeout(function(){c()},1e4)):(a(),d())})}function d(a){D.methods.viewDivs(O).call(function(b,c){b||($("#newDivs").html(new BigNumber(c).div(S).toFixed(5)+" POL"),0<+c&&$("#withdrawBtn").removeClass("hide")),a&&a()})}function e(){$("#matrixDiv").removeClass("hide"),$("#matrixDivX6").removeClass("hide"),fa=new BigNumber(0),f(1)}function f(){D.methods.userEarningsAll(O).call(function(a,b){if(!a){for(let a=1;13>a;a++)console.log("LEVEL:",a,b.x3MatrixEarnings[a].toString()),da[+a]=new BigNumber(b.x3MatrixEarnings[a].toString()),ea[+a]=new BigNumber(b.x6MatrixEarnings[a].toString()),fa=fa.plus(new BigNumber(b.x3MatrixEarnings[a].toString())),fa=fa.plus(new BigNumber(b.x6MatrixEarnings[a].toString())),$("#x3_level"+a+"_earned").html(da[+a].div(S).toFixed(1)),$("#x6_level"+a+"_earned").html(ea[+a].div(S).toFixed(1));$("#totalEarningsMATIC").html(fa.div(S).toFixed(1)+" POL"),g()}else;})}function g(){D.methods.usersHighestLevels(O).call(function(a,b){m(function(){i(b.x3HighestLevel,1,b.x6HighestLevel)})})}function h(a,b,d,e,f){let g=b;0==a[1].length&&(a[1]=["0x0000000000000000000000000000000000000000"]),D.methods.users(a[1][b]).call(function(c,j){c||"0x0000000000000000000000000000000000000000"==a[1]||($("#x3_idOfLevel"+d+"_"+ +(g+1)).html("ID: "+j.id.toString()),$("#x3_idOfLevel"+d+"_"+ +(g+1)).attr("title","Partner ID:"+j.id.toString()+", Addr: "+q(a[1][g]))),b+1<a[1].length?m(function(){h(a,b+1,d,e,f)}):D.methods.users(a[0]).call(function(b,c){b||($("#x3_level"+d+"_referrer").html(c.id.toString()),$("#x3_level"+d+"_referrer").attr("title","Current Referrer ID:"+c.id.toString()+", Addr: "+q(a[0]))),13>d?m(function(){i(e,d+1,f)}):m(function(){l(f,1)})})})}function i(a,b,c){b<=a?($("#x3_level"+b+"_stats").removeClass("hide"),$("#x3_level"+b+"_buy").removeClass("hide"),$("#x3_level"+b+"_buy").addClass("hide"),$("#x3_level"+b+"_matrix").removeClass("disabled2"),$("#x3_level"+b).removeClass("disabled"),D.methods.usersX3Matrix(O,b).call(function(d,e){!0==e[2]&&($("#x3_level"+b).addClass("disabled"),C("Level "+b+" is blocked for further partner payments until you upgrade to the next level!","Upgrade needed",1e4)),m(function(){h(e,0,b,a,c)})})):($("#x3_level"+b+"_stats").removeClass("hide"),$("#x3_level"+b+"_stats").addClass("hide"),$("#x3_level"+b+"_buy").removeClass("hide"),$("#x3_level"+b+"_matrix").removeClass("disabled2"),$("#x3_level"+b+"_matrix").addClass("disabled2"),$("#x3_level"+b).removeClass("disabled"),b>a+1?($("#x3_level"+b).removeClass("disabled"),$("#x3_level"+b).addClass("disabled")):$("#x3_level"+b+"_matrix").removeClass("disabled2"),13>b?m(function(){i(a,b+1,c)}):m(function(){l(c,1)}))}function j(a,b,d,e){let f=b;0==a[1].length&&(a[1]=["0x0000000000000000000000000000000000000000"]),D.methods.users(a[1][f]).call(function(c,g){c||"0x0000000000000000000000000000000000000000"==a[1]||($("#x6_idOfLevel"+d+"_1_"+ +(f+1)).html("ID: "+g.id.toString()),$("#x6_idOfLevel"+d+"_1_"+ +(f+1)).attr("title","Partner ID:"+g.id.toString()+", Addr: "+q(a[1][f]))),b<a[1].length-1?m(function(){j(a,b+1,d,e)}):m(function(){k(a,0,d,e)})})}function k(a,b,d,e){let f=b;0==a[2].length&&(a[2]=["0x0000000000000000000000000000000000000000"]),D.methods.users(a[2][f]).call(function(c,g){c||"0x0000000000000000000000000000000000000000"==a[2]||($("#x6_idOfLevel"+d+"_2_"+ +(f+1)).html("ID: "+g.id.toString()),$("#x6_idOfLevel"+d+"_2_"+ +(f+1)).attr("title","Partner ID:"+g.id.toString()+", Addr: "+q(a[2][f]))),b<a[2].length-1?m(function(){k(a,b+1,d,e)}):13>d&&m(function(){l(e,d+1)})})}function l(a,b){b<=a?($("#x6_level"+b+"_stats").removeClass("hide"),$("#x6_level"+b+"_buy").removeClass("hide"),$("#x6_level"+b+"_buy").addClass("hide"),$("#x6_level"+b+"_matrix").removeClass("disabled2"),$("#x6_level"+b).removeClass("disabled"),D.methods.usersX6Matrix(O,b).call(function(c,d){!0==d[3]&&($("#x6_level"+b).addClass("disabled"),C("Level "+b+" is blocked for further partner payments until you upgrade to the next level!","Upgrade needed",1e4)),m(function(){D.methods.users(d[0]).call(function(c,e){c||($("#x6_level"+b+"_referrer").html(e.id.toString()),$("#x6_level"+b+"_referrer").attr("title","Current Referrer ID:"+e.id.toString()+", Addr: "+q(d[0]))),j(d,0,b,a)})})})):($("#x6_level"+b+"_stats").removeClass("hide"),$("#x6_level"+b+"_stats").addClass("hide"),$("#x6_level"+b+"_buy").removeClass("hide"),$("#x6_level"+b+"_matrix").removeClass("disabled2"),$("#x6_level"+b+"_matrix").addClass("disabled2"),$("#x6_level"+b).removeClass("disabled"),b>a+1?(console.log("Disabling x6:",b),$("#x6_level"+b).removeClass("disabled"),$("#x6_level"+b).addClass("disabled")):$("#x6_level"+b+"_matrix").removeClass("disabled2"),12>b&&l(a,b+1))}function m(a){setTimeout(function(){a()},100)}function n(a){return function(){document.execCommand("copy",!1,a.select())}}function o(a){var b,c,d=decodeURIComponent(window.location.search.substring(1)),e=d.split("&");for(c=0;c<e.length;c++)if(b=e[c].split("="),b[0]===a)return void 0===b[1]||b[1]}function p(a){return /^(0x){1}[0-9a-fA-F]{40}$/i.test(a)}function q(a){return a}function r(){var a=document.querySelector(".js-shareUrl"),b=n(a);a.addEventListener("click",function(){b(),C("Your REF URL has been copied to your clipboard ready for you to share!")},!1);var c=o("ref")||"";if(0<c.length)P=c;else{let a=Cookies.get("ref")||"";0<a.length&&(P=a)}P||(console.log("NO REF"),P=H),"undefined"==P&&(console.log("NO REF2"),P=H),Cookies.set("ref",P,{expires:60}),console.log("REF:",P),P&&(refererShort=P.substring(0,20)+"...");M=new I({cacheProvider:!1,providerOptions:{walletconnect:{package:J,options:{rpc:{chainID_required:G},network:"polygon"}}},disableInjectedProvider:!1})}async function s(){E=new Web3(N),console.log("Web3 instance is",E);const a=await E.eth.getChainId(),b=K.getChain(a);if(a!=F)return void $("#wrongChainError").foundation("open");console.log("NETWORK NAME:",b.name);const d=await E.eth.getAccounts();console.log("Got accounts",d),O=d[0],O,c()}async function t(){const a=await new Web3(N);D=new a.eth.Contract(polymatrixabi.abi,L),await s(N)}async function u(){console.log("Opening a dialog",M);try{N=await M.connect()}catch(a){return void console.log("Could not get a wallet connection",a)}N.on("accountsChanged",()=>{s()}),N.on("chainChanged",()=>{s()}),N.on("networkChanged",()=>{s()}),await t()}async function v(){console.log("Killing the wallet connection",N),N.close&&(await N.close(),await M.clearCachedProvider(),N=null),O=null}function w(){D.methods.isUserExists(P).call(function(a,b){console.log("REF CHECK:",a,b);let c=!0;return a?(console.log(a),void C("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",2048e18)):void(!1==b&&(c=!1),c||(P=H),console.log("REG REF:",P),Cookies.set("ref",P,{expires:60}),$("#loadingDiv").removeClass("hide"),Q&&(ka=0,A()),D.methods.registrationExt(P).send({from:O,value:ga[0].times(2)},function(a){return a?($("#loadingDiv").addClass("hide"),void C("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",2048e18)):void(Q||(ka=0,A()))}))})}function x(){$("#loadingDiv").removeClass("hide"),D.methods.claimDivs().send({from:O},function(a){return a?($("#loadingDiv").addClass("hide"),void C("An error occured sending your transaciton - please ensure you have enough gas and try again","Error with transaciton",2048e18)):void($("#loadingDiv").addClass("hide"),$("#newDivs").html("0 POL"),C("Dividends are being processed by the blockchain and will be in your wallet shortly!","Withdrawing Dividends",4e4))})}function y(a,b){$("#loadingDiv").removeClass("hide"),Q&&(ha=0,ia=b,ja=a,z()),D.methods.buyNewLevel(a,b).send({from:O,value:ga[b-1].toString()},function(c){return c?($("#loadingDiv").addClass("hide"),void C("An error occured sending your transaciton - please ensure you have enough funds and try again","Error with transaciton",2048e18)):void(Q||(ha=0,ia=b,ja=a,z()))})}function z(){console.log("CHECK BUY COMPLETE:",ha),D.methods.usersHighestLevels(O).call(function(a,b){1==ja?+b.x3HighestLevel>=+ia?($("#loadingDiv").addClass("hide"),setTimeout(function(){c()},1500)):15>ha?setTimeout(function(){ha++,z()},1500):($("#loadingDiv").addClass("hide"),C("An error occured checking your transaction - please refresh the page to check confirmation","Error with transaciton",2048e18)):+b.x6HighestLevel>=+ia?($("#loadingDiv").addClass("hide"),setTimeout(function(){c()},1500)):15>ha?setTimeout(function(){ha++,z()},1500):($("#loadingDiv").addClass("hide"),C("An error occured checking your transaction - please refresh the page to check confirmation","Error with transaciton",2048e18))})}function A(){console.log("CHECK USER COMPLETE:",ka);try{D.methods.users(O).call({from:O},function(a,b){0<b.id?(console.log("USER COMPLETE:",b),$("#loadingDiv").addClass("hide"),$("#playerID").html(b.id.toString()),setTimeout(function(){c()},1500)):15>ka?setTimeout(function(){ka++,A()},1500):($("#loadingDiv").addClass("hide"),C("An error occured checking your transaction - please refresh the page to check confirmation","Error with transaciton",2048e18))})}catch(a){setTimeout(function(){ka++,A()},1500)}}function B(){var a=window.open("/polforce.pdf","_blank");a.focus()}function o(a){var b,c,d=decodeURIComponent(window.location.search.substring(1)),e=d.split("&");for(c=0;c<e.length;c++)if(b=e[c].split("="),b[0]===a)return void 0===b[1]||b[1]}function p(a){return /^(0x){1}[0-9a-fA-F]{40}$/i.test(a)}function C(a,b,c){$.toast({text:a,heading:b||"PolForce",showHideTransition:"fade",allowToastClose:!0,hideAfter:c||8e3,stack:5,position:"bottom-right",bgColor:"#ff3cbe",textColor:"#eeeeee",textAlign:"left",loader:!0,loaderBg:"#9EC600",beforeShow:function(){},afterShown:function(){},beforeHide:function(){},afterHidden:function(){}})}var D,E;const F=137,G="https://rpc-mainnet.matic.network",H="0x2Ed88fccd09ac31f893Ef6A28086c437B709A78E",I=window.Web3Modal.default,J=window.WalletConnectProvider.default,K=window.evmChains,L="0x9f8202d9b1d4a709C6e12EC10189A30D8fF90C";const myNumber = new BigNumber("1024000000000000000000");let M,N,O;var P,Q=!1,R=window.matchMedia("only screen and (pointer:coarse)");R.matches&&(Q=!0);const S=1e18;var T,U=Array(12),V=Array(12),W=Array(12),X=Array(12),Y=Array(12),Z=Array(12),_=Array(12),aa=Array(12),ba=Array(12),ca=Array(12),da=Array(12),ea=Array(12),fa=new BigNumber(0);for(let a=0;12>a;a++)W[a]=[],_[a]=[],X[a]=[],aa[a]=[],Y[a]=[],ba[a]=[],Z[a]=[],ca[a]=[],da[a]=new BigNumber(0),ea[a]=new BigNumber(0);var ga=[];ga[0]=new BigNumber(2e18);ga[11] = new BigNumber("1024e18");ga[12] = new BigNumber("2048e18");for(let a=1;12>a;a++)ga[a]=new BigNumber(ga[a-1].toString()).times(2);$(document).foundation(),r(),document.querySelector("#unlockBtn").addEventListener("click",u),document.querySelector("#unlockBtn2").addEventListener("click",u),document.querySelector("#btn-connect").addEventListener("click",u),document.querySelector("#connectedAddress").addEventListener("click",v),document.querySelector("#withdrawBtn").addEventListener("click",x),document.querySelector("#registerBtn").addEventListener("click",w);for(let a=2;15>a;a++)$("#x3BuyBtn_level"+a).click(function(){y(1,a)}),$("#x6BuyBtn_level"+a).click(function(){y(2,a)});var ha=0,ia=0,ja=0,ka=0;return document.querySelector("#gameGudeBtn").addEventListener("click",B),document.querySelector("#viewGuideBtn").addEventListener("click",B),void document.querySelector("#viewContractBtn").addEventListener("click",function(){var a=window.open("https://polygonscan.com","_blank");a.focus()})});
