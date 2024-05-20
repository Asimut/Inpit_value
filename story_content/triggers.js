function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6nvfDcWgYdh":
        Script1();
        break;
      case "67RpEyJwY3c":
        Script2();
        break;
      case "6EQomsNRo6w":
        Script3();
        break;
      case "6cjlYAFBPoA":
        Script4();
        break;
      case "5a8ZyllmsvZ":
        Script5();
        break;
      case "5xRdtCji8E3":
        Script6();
        break;
      case "6SIx3SKJHGg":
        Script7();
        break;
      case "681yDs0u9eN":
        Script8();
        break;
      case "6lsqTiDJQcv":
        Script9();
        break;
      case "6JrlJTj0QfT":
        Script10();
        break;
      case "6CWdsQfcyQx":
        Script11();
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
