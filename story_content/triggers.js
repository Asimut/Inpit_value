function ExecuteScript(strId)
{
  switch (strId)
  {
      case "62KjqsPvMe4":
        Script1();
        break;
      case "6nHYcE3TScj":
        Script2();
        break;
      case "6lXrotx0wjp":
        Script3();
        break;
      case "6C4j1Zd2pQG":
        Script4();
        break;
      case "6nFYWlMuSUP":
        Script5();
        break;
      case "6WaHBtVULpj":
        Script6();
        break;
      case "6fZ3QQwGVGZ":
        Script7();
        break;
      case "628ActONT83":
        Script8();
        break;
      case "6RCJ7ltQfB8":
        Script9();
        break;
      case "6OjNbTpZnMn":
        Script10();
        break;
      case "6SHff9DIZbe":
        Script11();
        break;
      case "6SWiDITUbVA":
        Script12();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
window.Script1 = function()
{
  player.once(() => {
const target = object('5ydpz4BIjrQ');
const duration = 750;
const easing = 'ease-out';
const id = '68GlhL0WSIO';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  const target = object('5ydpz4BIjrQ');
const duration = 750;
const easing = 'ease-out';
const id = '68GlhL0WSIO';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6meNzAWhq4x');
const duration = 750;
const easing = 'ease-out';
const id = '5cOujT39HQ1';
const pulseAmount = 0.07;
const delay = 0;
addToTimeline(
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script4 = function()
{
  const target = object('6meNzAWhq4x');
const duration = 750;
const easing = 'ease-out';
const id = '5cOujT39HQ1';
const pulseAmount = 0.07;
player.addForTriggers(
id,
target.animate([
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }, { scale: `${1 + pulseAmount}` },
{ scale: '1' }
],
  { fill: 'forwards', duration, easing }
)
);
}

};
