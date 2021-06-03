function animate(obj, target, callback) {
    // console.log(callback);  callback = function() {}  
    clearInterval(obj.timer);
    obj.timer = setInterval(function() {
        // var step = Math.ceil((target - obj.offsetLeft) / 10);
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            // if (callback) {   
            //     callback();
            // }
            callback && callback();
        }
        obj.style.left = obj.offsetLeft + step + 'px';

    }, 15);
}