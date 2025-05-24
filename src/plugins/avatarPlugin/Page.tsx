import korraImg from './Korraaaaa.jpeg';
import'./index.css'
export const avatarPlugin: React.FC = () => (
    <div>
        <h2>Hello World!</h2>
        <p>I'am the Avatar, you gotta deal with it!🔥🌊🪨🌬️</p>
        <img className={"imgKorra"} src={korraImg} alt={"Avatar Korra"}/>

        <iframe
            className={"iframeKorra"}
            width="560"
            height="315"
            src="https://www.youtube.com/embed/_7VaCKfkfmQ?autoplay=1&controls=0&loop=1&playlist=_7VaCKfkfmQ"
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen>
        </iframe>



    </div>
);
  