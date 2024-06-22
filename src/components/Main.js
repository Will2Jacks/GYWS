import React, { useState, useEffect } from "react";
import Card from "C:\\Users\\SOHAM\\my-app\\src\\components\\Card.js";
import Score from "C:\\Users\\SOHAM\\my-app\\src\\components\\Score.js";

export default function Main() {
    const [points, setPoints] = useState(0);
    const [clicked, setClicked] = useState({
        1: false,
        2: false,
        3: false,
        4: false,
        5: false,
        6: false
    });

    const [clickCount, setClickCount] = useState(0);
    const creatorArray = [5, 6, 4]; // Correct order of cards to click

    function toggle(index) {
        setClicked(prevClicked => ({
            ...prevClicked,
            [index]: true
        }));

        setClickCount(prevCount => prevCount + 1);

        // Check if the clicked card is correct and update points
        if (creatorArray[clickCount] === index) {
            setPoints(prevPoints => prevPoints + 1);
        }
    }

    useEffect(() => {
        // Reset game after 3 clicks
        if (clickCount === 3) {
            setTimeout(() => {
                setClicked({
                    1: false,
                    2: false,
                    3: false,
                    4: false,
                    5: false,
                    6: false
                });
                setClickCount(0);
                setPoints(0);
            }, 3000); // Reset after 3 seconds
        }
    }, [clickCount]);

    return (
        <div>
            <div className="introText">Step into the world of football greatness, where history and poetry collide. In this immersive experience, you will journey through iconic moments and legendary players who have left an indelible mark on the beautiful game.

            Your challenge is to match each player with their corresponding poetic ode to victory. Marvel at the imagery and immerse yourself in the stories behind the trophies they have lifted. From the electrifying stadiums to the glory of champions, every click brings you closer to unlocking the spirit of football's greatest icons.

            Prepare to be inspired, challenged, and rewarded as you uncover the connections between the players and their poetic tributes. Are you ready to test your football knowledge and celebrate the legends who have graced the pitch?

            Let the game begin, and may the spirit of football guide your journey!</div>
            <Score score={points} />
            <div className="upperRow">
                <Card index={2} row="top" clicked={clicked[2]} />
                <Card index={3} row="top" clicked={clicked[3]} />
                <Card index={1} row="top" clicked={clicked[1]} />
            </div>
            <div className="lowerRow">
                <Card index={6} row="bottom" clicked={clicked[6]} handleClick={() => toggle(6)} />
                <Card index={4} row="bottom" clicked={clicked[4]} handleClick={() => toggle(4)} />
                <Card index={5} row="bottom" clicked={clicked[5]} handleClick={() => toggle(5)} />
            </div>
        </div>
    );
}
