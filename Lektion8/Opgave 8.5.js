function observer() {
    console.log("I have been notified");
}

function observer2() {
    console.log("I have been notified....");
}

function subject() {
    let observers = [];
    let object;

    function registerObserver(observer) {
        observers.push(observer);
    }

    function notifyObservers() {
        observers.forEach(o => o());
    }

    object = {registerObserver, notifyObservers};

    return object;
}


let sub = subject();
sub.registerObserver(observer);
sub.registerObserver(observer2);
sub.notifyObservers();