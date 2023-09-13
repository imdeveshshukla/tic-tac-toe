function Game() {
    let value =["","","","","","","","",""];
    value.forEach(element => {
       if (element === "") {
        return(
            <Fragment>
                <p>Lets Start</p>
            </Fragment>
            );
       } 
    });
    // function getGameInfo(){
    // }
}
export default Game;
