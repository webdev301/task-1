const HOURS = {

    Sun: null,

    Mon: [8, 18], Tue: [8, 18], Wed: [8, 18], Thu: [8, 18], Fri: [8, 18],

    Sat: [9, 15],

};

function updateStatus(){

    const toronto = (opts) =>
        new Intl.DateTimeFormat("en-us", {timezone: "America/Toronto", ...opts}).format(new Date());

    const day = toronto({weekday: "short"});

    const hour = Number(toronto({hour: "numeric", hourCycle: "h23"}));

    const today = HOURS[day];

    const isOpen = today && hour >= today[0] && hour < today[1];

    const badge = document.getElementById("status");

    badge.textContent = isOpen ? "Open Now" : "Closed";

    badge.className = isOpen ? "badge open" : "badge closed";
}

updateStatus();
setInterval(updateStatus, 60000);