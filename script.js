var short_break_time;
var pomodoro_time;
var long_break_time;
const timer = document.getElementById('timer');
const save_changes = document.getElementById('save_changes');
const start = document.getElementById('start');
const pause = document.getElementById('pause');
const pomodoro_button = document.getElementById('pomodoro');
const long_break_button = document.getElementById('long_break');
const short_break_button = document.getElementById('short_break');
const percentages = document.getElementById('percentages');
var functionIsRunning = false;

pomodoro_button.classList.add('clicked');


var pomodoro_interval = 1;
var interval;
var break_active=false;
Settings();















start.addEventListener('click', Start);

function Start(){
    if(functionIsRunning == false){
    start.classList.add('clicked');
    var time = timer.textContent.trim();
    console.log(time);

    var startingMinutes = time.slice(0,2);
    var startingSeconds = time.slice(3,5)

   console.log(startingMinutes);
    console.log(startingSeconds);


    CountDown(startingMinutes,startingSeconds);

    start.classList.remove('clicked');
    };
}

function Short(){
    console.log('short');
    break_active=true;
    short_break_button.classList.add('clicked');
    timer.innerHTML = `${short_break_time}:00`;
    Start();
    
}

function Long(){
    console.log('long');
    break_active=true;
    long_break_button.classList.add('clicked');
    timer.innerHTML = `${long_break_time}:00`;
    Start();
    
}

function Pomodoro(){
    pomodoro_button.classList.add('clicked');
    timer.innerHTML = `${pomodoro_time }:00`;
    Start();
    
}


pause.addEventListener('click', Pause);

function Pause(){
functionIsRunning = false;
clearInterval(interval);

}



save_changes.addEventListener('click', Settings);

function Settings(){
    short_break_time = (document.form.short_break_time.value);
    short_break_time = short_break_time <10 ? '0'+ short_break_time :short_break_time
    pomodoro_time = (document.form.pomodoro_time.value);
    pomodoro_time = pomodoro_time <10 ? '0'+ pomodoro_time :pomodoro_time;
    long_break_time = (document.form.long_break_time.value);
    long_break_time = long_break_time <10 ? '0'+ long_break_time :long_break_time;
    sounds_check  = (document.form.sounds.checked);
    timer.innerHTML = `${pomodoro_time}:00`;

    console.log(short_break_time,pomodoro_time,long_break_time);


    var background = (document.form.selection.value);
    
    if(background == "Blue"){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1617108309814-3326655a165a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')";
        
    }
    else if (background == "Brown"){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1588840103995-02893d4eb8fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80')"
       
    }
    else if (background == "Pink"){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1562516354-276afcce3e96?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1426&q=80')"
       
    }
    else if (background == "Beiqe"){
        document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1603430416701-dbc7b96272cc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80')"
       
    }
    else if (background == "Pink"){
        document.body.style.backgroundImage = "url('')"
       
    }

    functionIsRunning = false;
    clearInterval(interval);


};







function Close(){
    window.location.reload();
};

function CountDown(m, s){
    var time = (m * 60) +Number(s);
    var startedTime = time;
    console.log(time);
    
    functionIsRunning = true;
    
    interval = setInterval(function(){
        if(functionIsRunning==true){
        m = Math.floor(time/60);
        s=time%60;

        percentages.style.width = `${time/startedTime*100}%` ;





        s = s <10 ? '0'+ s :s;
        m = m <10 ? '0'+ m :m; 

        timer.innerHTML = `${m}:${s}`;
        time--;
        console.log(functionIsRunning);

    

        if( s <= 0 && m <= 0){
            functionIsRunning = false;
            pomodoro_button.classList.remove('clicked');
            short_break_button.classList.remove('clicked');
            long_break_button.classList.remove('clicked');
            
            if(break_active==false){
                pomodoro_interval++;
        
                if(pomodoro_interval%5==0){
                    clearInterval(interval);
                    Long();
                }
                else{
                
                    clearInterval(interval);
                     Short();
                    }
            }
            else{
                clearInterval(interval);
                Pomodoro();
                break_active=false;
            };
    

            
        };
    };
    },1000);
    
    



};