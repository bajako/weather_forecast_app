
import React from 'react';


export class PrzekazujeObiekt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dostalem: this.props.dane[3]
    }
  }


  temperatura = (dostalem) => {

    if (dostalem !== undefined){

      // let dostalem = this.props.dane;


    return (
      <div>
        <h2>temperatura teraz{dostalem[1].temp}</h2>
        <h2>wilgotność {dostalem[1].humidity}</h2>
        {/*<h2> szybkość wiatru {dostalem2[1].speed}</h2>*/}
        {/*<img src={`http://openweathermap.org/img/w/${dostalem3[1][0].icon}.png`}/>*/}
        {/*<img src={`http://openweathermap.org/img/w/${dostalem3[1][0].icon}.png`}/>*/}
      </div>
    )
  }
  else{
      console.log("jest undefined")
    }};

  wiatr = (dostalem) => {

    if (dostalem !== undefined){

      // let dostalem = this.props.dane;


      return (
        <div>
          <h2>wiatr teraz {dostalem[1].speed}</h2>
          {/*<h2> szybkość wiatru {dostalem2[1].speed}</h2>*/}
          {/*<img src={`http://openweathermap.org/img/w/${dostalem3[1][0].icon}.png`}/>*/}
          {/*<img src={`http://openweathermap.org/img/w/${dostalem3[1][0].icon}.png`}/>*/}
        </div>
      )
    }
    else{
      console.log("jest undefined")
    }};


    render() {

    // let dostalem = this.props.dane[3];
    // console.log(dostalem);
    //
    // let dostalem2 = this.props.dane[5];
    // let dostalem3 = this.props.dane["1"];
    // console.log(Array.isArray(dostalem3));
    // // console.log(dostalem3[0]);
    //   this.sprawdzam(this.props.dane[3]);
      // this.sprawdzam(dostalem);
    // function sprawdzam(){ if (dostalem != undefined){
    //
    //
    //   return (
    //     <div>
    //       <h2>temperatura teraz{dostalem[1].temp}</h2>
    //       <h2>wilgotność {dostalem[1].humidity}</h2>
    //       <h2> szybkość wiatru {dostalem2[1].speed}</h2>
    //       <img src={`http://openweathermap.org/img/w/${dostalem3[1][0].icon}.png`}/>
    //       {/*<img src={`http://openweathermap.org/img/w/${dostalem3[1][0].icon}.png`}/>*/}
    //     </div>
    //   )
    // }}



    return (
      <div>
        <div> Przkazane dane to   {this.temperatura(this.state.dostalem)} {this.wiatr(this.props.dane[5])}</div>

        {/*<h2>Dzisiaj: {Math.round(this.props  .temperature.list["0"].main.temp)} &#0176;C</h2>*/}
        {/*<h2>Jutro: {Math.round(this.state.dayTwo.temp)} &#0176;C</h2>*/}
        {/*<h2>Pojutrze: {Math.round(this.state.dayThree.temp)} &#0176;C</h2>*/}
        {/*<h2>Czwarty dzień: {Math.round(this.state.dayFour.temp)} &#0176;C</h2>*/}
        {/*<h2>Piąty dzień: {Math.round(this.state.dayFive.temp)} &#0176;C</h2>*/}
      </div>
    )

  }
}


