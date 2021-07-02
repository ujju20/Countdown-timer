function getTimeRemaining(endTime)
{
    var t=Date.parse(endTime)-Date.parse(new Date());
    var seconds=Math.floor((t/1000)%60);
    var minutes=Math.floor((t/(1000*60))%60);
    var hours=Math.floor((t/(1000*60*60))%24);
    var days=Math.floor((t/(1000*60*60*24))%60);

    return {
        'seconds':seconds,
        'minutes':minutes,
        'hours':hours,
        'days':days,
        'total':t
    }
}

function initializeClock(endTime)
{
    var daysDiv=document.getElementById('days');
    var hoursDiv=document.getElementById('hours');
    var minutesDiv=document.getElementById('minutes');
    var secondsDiv=document.getElementById('seconds');

    function updateClock()
    {
        var t=getTimeRemaining(endTime);

        daysDiv.innerHTML=t.days;
        hoursDiv.innerHTML=('0'+t.hours).slice(-2);;
        minutesDiv.innerHTML=('0'+t.minutes).slice(-2);
        secondsDiv.innerHTML=('0'+t.seconds).slice(-2);

        if(t<=0)
        {
            clearInterval(interval);
        }
    }

    updateClock();
    var interval=setInterval(updateClock,1000);
}

var deadline=new Date(Date.parse(new Date())+14*24*60*60*1000);
initializeClock(deadline);