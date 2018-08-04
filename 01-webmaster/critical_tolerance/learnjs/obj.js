
var org = org || {};
    org.ardeshir = org.ardeshir || {};
    
function createObject(proto, cons) {
    function c() {}
    c.prototype = proto;
    c.prototype.constructor = cons;
    return new c();
} 
    
function onReady(){
console.log("loading...");

// run the updateClock 
// var c  = new org.ardeshir.Clock('clock');
var c   = new org.ardeshir.AlarmClock('clock', -300,'', 14,45); 
var c2  = new org.ardeshir.TextClock('clock2', -300, 'ETC'); 

console.log(c.version);

}

org.ardeshir.Clock = function (id, offset, label) {
    offset = offset || 0;
    label  = label  || 'Coordinated Universal Time (UTC)';
    var d  = new Date();
    this.offset = (offset + d.getTimezoneOffset())*60*1000;

    this.updateClock = function () {
            var date = new Date();
                date = new Date(( offset+ d.getTimezoneOffset())*60*1000 + 
                date.getTime()); 
            // console.log(this);
            var clock = document.getElementById(id);
            clock.innerHTML = this.fmtOut(date.getHours(),date.getMinutes(),date.getSeconds(),label);

    };
        
    this.fmtDigit = function (val) {
         if (val < 10) val = "0" + val;
         return val;
    };
    
    // that helps you to find this
   /*  var that = this;
    setInterval(function() {
        that.updateClock(); }, 1000); */
        
   //  this.updateClock();
    this.tick(true);
};


org.ardeshir.Clock.prototype.tick= function(isTick) {
    clearInterval(this.myInternalInterval);
    if(isTick) {
    var that = this;
     this.myInternalInterval = setInterval(function() {
        that.updateClock(); }, 1000);
        this.updateClock();
    }
}

org.ardeshir.Clock.prototype.version = '1.0.0';

org.ardeshir.Clock.prototype.fmtOut = function(h,m,s,label){
    
    return this.fmtDigit(h) + ':' + 
            this.fmtDigit(m) + ':' + 
            this.fmtDigit(s); // + " " + label;
    
};

//  END OF CLOCK ...inheritance from here on!

// Text Clock Consturctor function, apply Clock's this
org.ardeshir.TextClock = function(id, offset, label) {
    org.ardeshir.Clock.apply(this, arguments);
};

// Text Clock prototype copy clock prototype, but use your own constructor
org.ardeshir.TextClock.prototype = createObject(org.ardeshir.Clock.prototype, org.ardeshir.TextClock);

// Text Clock's own object fields, override parent methods.
org.ardeshir.TextClock.prototype.version = '1.0.1';
org.ardeshir.TextClock.prototype.fmtOut = function(h,m,s,label) {
    
        return this.fmtDigit(h) + ' hr ' + 
            this.fmtDigit(m) + ' min ' + 
            this.fmtDigit(s) + " s " + label;
};

// Alarm Clock 
// Alarm Clock Constructor function, apply TextClock's this
org.ardeshir.AlarmClock = function(id, offset, label) {
    org.ardeshir.Clock.apply(this, arguments);
   
    this.dom = document.getElementById(id);
    this.dom.contentEditable = true;

    this.doUpdate = true;    
    var that = this;
    this.dom.addEventListener('focus', function(e) {
        this.innerHTML = this.innerHTML.slice(0,this.innerHTML.lastIndexOf(':'));
        that.tick(false);
    });
    this.dom.addEventListener('blur', function(e) {
        var a = this.innerHTML.split(':');
         that.almH = parseInt(a[0]);
         that.almM = parseInt(a[1]);
         console.log(that.almH, that.almM);
        that.tick(true);
    });
};

// Alarm Clock prototype copy textclock prototype, but use your own constructor
org.ardeshir.AlarmClock.prototype = createObject(org.ardeshir.Clock.prototype, org.ardeshir.AlarmClock);

// Alarm Clock's own object fields, override parent methods.
org.ardeshir.AlarmClock.prototype.version = '1.0.2';

org.ardeshir.AlarmClock.prototype.fmtOut = function(h,m,s,label) {
    var output; 
    
    if(h==this.almH && m==this.almM) {
     output = 'ALARM WAKE UP';
     var snd = new Audio('beep.mp3');
         snd.play();
         
    } else {
      output = org.ardeshir.Clock.prototype.fmtOut.apply(this,arguments)
           /* this.fmtDigit(h) + ' hr ' + 
            this.fmtDigit(m) + ' min ' + 
            this.fmtDigit(s) + ' s ' + label; */
    }
    return output; 
};


// Set window onload to run onReady();
window.onload = onReady;
