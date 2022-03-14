let curScene = 0
function changeScene (decision) {
 let message = ''
 switch (curScene) {
 	case 0:
 	curScene = 1
 	message = 'Ваше путешствие начинается на развилке дорог'
 	break
 	case 1:
 	if (decision == 1) {
 		curScene = 2
 		message = 'Вы прибыли в милый домик в лесу'
 	}
 	else {
 		curScene = 3
 		message = 'Вы стоите на мосту с видом на мирный ручей'
 	}
 	break
 case 2:
  if (decision == 1) {
  	curScene = 4
  	message = 'Заглянув в окно, вы видите в доме ведьму'
  }
  else {
  	curScene = 5
  	message = 'Извините, в доме живет ведьма и вы стали её обедом'
  }
  break
  case 3:
  if (decision == 1) {
  	curScene = 6
  	message = 'Извините, на той стороне моста живет тролль и вы стали его обедом'	
  }
  else {
  	curScene = 7
  	message = 'Ваш путь прерывается прибытием огромного тролля'
  }
  break
  case 4:
  if (decision == 1) {
  	curScene = 8
  }
  else {
  	curScene = 5
  	message = 'Извините, вы стали частью выдьминского рагу'
  }
  break 
  case 5:
  curScene = 0
  break
  case 6:
  curScene = 0
  break
  case 7:
  if (decision == 1) {
  	curScene = 6
  	message = 'Извините, вы стали вкусным обедом тролля'
  }
  else {
  	curScene = 9
  }
  case 9:
  break
 }
 document.getElementById('sceneimg').src = 'scene' + curScene + '.png'
 if (message != '') {
 	alert (message)
 }
}