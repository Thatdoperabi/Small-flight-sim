function init () {
    const missionAbort = document.getElementById("abortMission");
    missionAbort.addEventListener("mouseover", function (event){
      let element = event.target;
      element.style.backgroundColor = "red"
      missionAbort.addEventListener("mouseout", function (event) {
        let element = event.target;
        element.style.backgroundColor = "white"
        missionAbort.addEventListener("click", function () {
          console.log("Mission aborted! Space shuttle returning home")
          window.confirm("For real Homie?")
        })
      })
    })
    const button = document.getElementById("liftoffButton");
    button.addEventListener("click", function (event) {
    console.log("Houstom, we have lifttoff!")
    });
    const paragraph = document.getElementById("statusReport");


    
}

window.addEventListener("load", init);
