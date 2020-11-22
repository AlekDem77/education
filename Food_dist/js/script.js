//tabs

window.addEventListener('DOMContentLoaded', () =>{

    const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');

    function hideTabContent(){
        tabsContent.forEach(item =>{
            item.classList.remove('show', 'fade');
            item.classList.add('hide');
        });
        tabs.forEach(item =>{
            item.classList.remove('tabheader__item_active');
        });
    }

    function showTabContent(i = 0){
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event)=>{
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')){
            tabs.forEach((tab, i) =>{
                if(target == tab){
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //timer

    const deadline = '2020-11-23 00:00';
    timersetting(deadline);

   function timeToEnd (enddate){
    const time = Date.parse(enddate) - Date.parse(new Date()),
        days = Math.floor(time/(1000*60*60*24)),
        hours = Math.floor( (time/(1000*60*60) % 24) ),
        minutes = Math.floor((time/(1000*60) % 60)),
        seconds = Math.floor((time/(1000) % 60));

    return{
        time: time,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
        };
   }
  

    function timersetting(enddate){
        let timer = document.querySelector('.timer'),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(setTimeToNodes, 1000);
            setTimeToNodes();

            function setTimeToNodes(){
                let data = timeToEnd(enddate);
                days.textContent = addZero(data.days);
                hours.textContent = addZero(data.hours);
                minutes.textContent = addZero(data.minutes);
                seconds.textContent = addZero(data.seconds);

                if (data.time <= 0){
                    clearInterval(timeInterval);
                }

            }
    }

    function addZero(item){
        if (item < 10){
            return `0${item}`;
        }else{
            return item;
        }
    }

    

});