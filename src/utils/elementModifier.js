const eventStep = new CustomEvent("multistep-active", {
    detail: {
        active: 0,
    },
    bubbles: true,
    composed: false,
    cancelable: false
})

export class elementModifier {    
    changeCardSec(number, sections){
        console.log(sections)
        sections[0].childNodes.forEach(p => p.classList.remove('active'));
        sections[0].childNodes[number].classList.add('active');
        //eventStep.detail.active = n;
        //sections[0].childNodes[n].dispatchEvent(eventStep);
    }

    colorMultiStp(n){
        console.log("n de print " + n);
        //console.log(sections[0].childNodes)
        /*sections[0].childNodes.forEach(p => p.classList.remove('active'));
        sections[0].childNodes[n].classList.add('active');*/
    }
}