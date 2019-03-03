import React from 'react';
import PropTypes from 'prop-types';
import './GitHubLinkedInIconLink.css';

/* 
    -The only props that the component requires is svgPath
        -if the props.svgPath is the string 'gitHub' the gitHub icon will display
        -if the props.svgPath is the string 'linkedIn' the LinkedIn icon will display
        -optional props are width and height (use pixels cause firefox ignores rems in SVG)
*/
function GitHubLinkedInIconLink(props) {
    // taken from
    // https://stackoverflow.com/questions/23402542/embedding-svg-into-reactjs
    let svgPath,viewBox,url,ariaLabel;

    const gitHubPath = <g>
        <path
            className="social-icon"
            d="M409.132,114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736,15.166,259.057,5.365,219.271,5.365
            c-39.781,0-76.472,9.804-110.063,29.408c-33.596,19.605-60.192,46.204-79.8,79.8C9.803,148.168,0,184.854,0,224.63
            c0,47.78,13.94,90.745,41.827,128.906c27.884,38.164,63.906,64.572,108.063,79.227c5.14,0.954,8.945,0.283,11.419-1.996
            c2.475-2.282,3.711-5.14,3.711-8.562c0-0.571-0.049-5.708-0.144-15.417c-0.098-9.709-0.144-18.179-0.144-25.406l-6.567,1.136
            c-4.187,0.767-9.469,1.092-15.846,1c-6.374-0.089-12.991-0.757-19.842-1.999c-6.854-1.231-13.229-4.086-19.13-8.559
            c-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559
            c-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-0.951-2.568-2.098-3.711-3.429c-1.142-1.331-1.997-2.663-2.568-3.997
            c-0.572-1.335-0.098-2.43,1.427-3.289c1.525-0.859,4.281-1.276,8.28-1.276l5.708,0.853c3.807,0.763,8.516,3.042,14.133,6.851
            c5.614,3.806,10.229,8.754,13.846,14.842c4.38,7.806,9.657,13.754,15.846,17.847c6.184,4.093,12.419,6.136,18.699,6.136
            c6.28,0,11.704-0.476,16.274-1.423c4.565-0.952,8.848-2.383,12.847-4.285c1.713-12.758,6.377-22.559,13.988-29.41
            c-10.848-1.14-20.601-2.857-29.264-5.14c-8.658-2.286-17.605-5.996-26.835-11.14c-9.235-5.137-16.896-11.516-22.985-19.126
            c-6.09-7.614-11.088-17.61-14.987-29.979c-3.901-12.374-5.852-26.648-5.852-42.826c0-23.035,7.52-42.637,22.557-58.817
            c-7.044-17.318-6.379-36.732,1.997-58.24c5.52-1.715,13.706-0.428,24.554,3.853c10.85,4.283,18.794,7.952,23.84,10.994
            c5.046,3.041,9.089,5.618,12.135,7.708c17.705-4.947,35.976-7.421,54.818-7.421s37.117,2.474,54.823,7.421l10.849-6.849
            c7.419-4.57,16.18-8.758,26.262-12.565c10.088-3.805,17.802-4.853,23.134-3.138c8.562,21.509,9.325,40.922,2.279,58.24
            c15.036,16.18,22.559,35.787,22.559,58.817c0,16.178-1.958,30.497-5.853,42.966c-3.9,12.471-8.941,22.457-15.125,29.979
            c-6.191,7.521-13.901,13.85-23.131,18.986c-9.232,5.14-18.182,8.85-26.84,11.136c-8.662,2.286-18.415,4.004-29.263,5.146
            c9.894,8.562,14.842,22.077,14.842,40.539v60.237c0,3.422,1.19,6.279,3.572,8.562c2.379,2.279,6.136,2.95,11.276,1.995
            c44.163-14.653,80.185-41.062,108.068-79.226c27.88-38.161,41.825-81.126,41.825-128.906
            C438.536,184.851,428.728,148.168,409.132,114.573z"
            fill="#82898f"/>
    </g>;
    const linkedInPath = <g>
        <path
            className="social-icon"
            d="M243.196,0C108.891,0,0,108.891,0,243.196s108.891,243.196,243.196,243.196
                 s243.196-108.891,243.196-243.196C486.392,108.861,377.501,0,243.196,0z M182.397,360.994h-60.799V148.197h60.799V360.994z
                 M153.882,135.156c-15.747,0-28.484-12.768-28.484-28.515s12.768-28.515,28.484-28.515c15.747,0.03,28.515,12.798,28.515,28.515
                 C182.397,122.388,169.629,135.156,153.882,135.156z M395.193,360.994h-60.799V229.425c0-15.413-4.408-26.204-23.347-26.204
                 c-31.403,0-37.452,26.204-37.452,26.204v131.569h-60.799V148.197h60.799v20.337c8.694-6.657,30.399-20.307,60.799-20.307
                 c19.699,0,60.799,11.795,60.799,83.051V360.994z"
            fill="#82898f"/>
    </g>;
    if (props.iconName === 'gitHub') {
        svgPath = gitHubPath;
        viewBox = '0 0 438.549 438.549';
        url = 'https://github.com/Userrrfriendly';
        ariaLabel = 'Link to my github profile'
    } else if (props.iconName === 'linkedIn') {
        svgPath = linkedInPath;
        viewBox = viewBox = "0 0 486.392 486.392";
        url = 'https://www.linkedin.com/in/veniamin-tsigourof/';
        ariaLabel = 'Link to my LinkedIn profile'
    }

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
            aria-label={ariaLabel}
            style={{ width: `${props.width}`, height: `${props.height}`}}
            >
            <svg
                className="svg"
                width={props.width}
                height={props.height}
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox={viewBox}>
                {svgPath}
            </svg>
        </a>
    );
}

GitHubLinkedInIconLink.defaultProps = {
    width: '32px', //carefull here: rems won't work in firefox for some reason
    height: '32px'
};

GitHubLinkedInIconLink.propTypes = {
    iconName: PropTypes.string.isRequired,
    width: PropTypes.string,
    height: PropTypes.string
}

export default GitHubLinkedInIconLink;