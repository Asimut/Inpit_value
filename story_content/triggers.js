function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6p3P9grYQBQ":
        Script1();
        break;
      case "6nZGULDqWEv":
        Script2();
        break;
      case "5vFXxYce3Fu":
        Script3();
        break;
      case "6JMYoQJ3DfQ":
        Script4();
        break;
      case "6l3fRAuerSw":
        Script5();
        break;
      case "5lJH05H8AiZ":
        Script6();
        break;
      case "5nrYEA294fX":
        Script7();
        break;
      case "5Y8XxjmPbwl":
        Script8();
        break;
      case "5V3PHl2qvCc":
        Script9();
        break;
      case "6Y9CCIoqoM7":
        Script10();
        break;
      case "6VbUPQBBdbo":
        Script11();
        break;
      case "66wT0e91RYa":
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
