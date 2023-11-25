let displayer=  document.getElementById('displayer');
        let novelButton=document.getElementById('novel')
        let buttons =document.querySelectorAll('.li')
        buttons.forEach(reset)
        novelButton.style.color='rgb(253, 80, 0)'
        novelButton.style.borderColor='rgb(253, 80, 0)'
        displayer.style.background='url(" ../images/Novels.jpg")';
        displayer.style.backgroundSize='100% 100%'
        novelButton.onclick=function(){
          let buttons =document.querySelectorAll('.li')
          buttons.forEach(reset)
          novelButton.style.color='rgb(253, 80, 0)'
          novelButton.style.borderColor='rgb(253, 80, 0)'
          displayer.style.background='url(" ../images/Novels.jpg")';
          displayer.style.backgroundSize='100% 100%'
        }
        let mangaButton=document.getElementById('manga')
        mangaButton.onclick=function(){
          let buttons =document.querySelectorAll('.li')
          buttons.forEach(reset)
          mangaButton.style.color='rgb(253, 80, 0)'
          mangaButton.style.borderColor='rgb(253, 80, 0)'
        displayer.style.background='url("../images/one-piece-monkey-d-luffy-hd-wallpaper-preview.jpg")';
          displayer.style.backgroundSize='100% 100%'

        }
       
        let fantasyButton=document.getElementById('fantasy')
        fantasyButton.onclick=function(){
          let buttons =document.querySelectorAll('.li')
          buttons.forEach(reset)
          fantasyButton.style.color='rgb(253, 80, 0)'
          fantasyButton.style.borderColor='rgb(253, 80, 0)'
          displayer.style.background='url(" ../images/fantacy.jpg")';
          displayer.style.backgroundSize='100% 100%'
        }
        let acadamicButton=document.getElementById('acadamic')
        acadamicButton.onclick=function(){
          let buttons =document.querySelectorAll('.li')
          buttons.forEach(reset)
          acadamicButton.style.color='rgb(253, 80, 0)'
          acadamicButton.style.borderColor='rgb(253, 80, 0)'
          displayer.style.background='url(" ../images/wallpaperflare.com_wallpaper.jpg")';
          displayer.style.backgroundSize='100% 100%'
        }
       
       
        function reset(item){
          item.style.color='white'
          item.style.borderColor='white'
        }