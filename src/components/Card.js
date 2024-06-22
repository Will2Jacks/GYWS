import React from "react";
import ronaldo from "C:\\Users\\SOHAM\\my-app\\src\\ronaldo_wo_back.png";
import messi from "C:\\Users\\SOHAM\\my-app\\src\\messi_wo_back.png";
import musiala from "C:\\Users\\SOHAM\\my-app\\src\\musiala.avif";

export default function Card(props) {
    let text;
    let hiddenText;
    let image;

    if (props.index === 1) {
        image = messi;
    } else if (props.index === 2) {
        image = ronaldo;
    } else if (props.index === 3) {
        image = musiala;
    } else if (props.index === 4) {
        text = "In fields of green where dreams collide,<br />Where nations' hopes and hearts abide,<br />The world unites, in joy and cheer,<br />For the greatest cup, the time is here.<br />Beneath the sky so vast and blue,<br />A tapestry of colors true,<br />Flags wave high, as anthems soar,<br />The World Cup calls, and spirits roar.";
        hiddenText = "Lionel Messi";
    } else if (props.index === 5) {
        text = "In realms where legends carve their name,<br />Where glory burns in endless flame,<br />A player ascends, with hearts ablaze,<br />To claim the highest of all praise.<br />Five times the cup has graced his hands,<br />Five times he's answered fans' demands,<br />In stadiums where echoes sing,<br />Of the UEFA Champions League king.";
        hiddenText = "Cristiano Ronaldo";
    } else if (props.index === 6) {
        text = "In a clash of wills and skill untold,<br />Where tales of triumph brightly unfold,<br />A team in glory, proud and true,<br />Defeated foes in a spectacle anew.<br />Eight goals scored, their spirits high,<br />Two against, they reached the sky,<br />In every pass and every fate,<br />Their victory etched, resolute and great.";
        hiddenText = "Jamal Musiala";
    }

    let classy = "";
    if (props.row === "top") {
        if (props.index === 1) {
            classy = "topCard1";
        } else if (props.index === 2) {
            classy = "topCard2";
        } else if (props.index === 3) {
            classy = "topCard3";
        }
    } else {
        if (props.index === 4) {
            classy = "bottomCard4";
        } else if (props.index === 5) {
            classy = "bottomCard5";
        } else if (props.index === 6) {
            classy = "bottomCard6";
        }
    }

    return (
        <div className={classy} onClick={props.handleClick}>
            {props.index <= 3 ? (
                <img src={image} alt="card" />
            ) : (
                <div dangerouslySetInnerHTML={{ __html: props.clicked ? hiddenText : text }} />
            )}
        </div>
    );
}
