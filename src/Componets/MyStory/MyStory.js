import React from 'react';
import './myStory.css';
import heroImgMedium from '../../Images/hero-medium.jpg';
import heroImgSmall from '../../Images/hero-small.jpg';

const MyStory = ()=> {
    return (
        <main className="main-story">
        <h1 className="my-story-title">From Engineering to Software Engineering...</h1>
            <p className="story-p">
                Hello there! I am Ben, a self taught front end web developer, 
                currently I am in transition from a career in engineering to that of a software-engineer.
                To make my long story short: I used to make maps, now I make Apps.
            </p>
            <figure className="figure-block">
                <blockquote className="quote-mystory">I used to make maps, now I make Apps.</blockquote>
            </figure>
            <p className="story-p">
                My slightly longer story is that I was drawn to tech ever since I can remember me, 
                my first introduction to coding happened in high-school during computer science courses 
                where we learned to code with pseudocode 
                (I know pseudocode doesn't sound really exciting but it was my favorite subject). 
                Although I was interested in programming I ended up studying Engineering and specifically 
                Geoinformatics Engineering. One of the reasons for that decision was that 
                geoinformatics/geomatics engineering among other things often involves aspects of Computer Engineering 
                and Software Engineering,  so I aimed to combine both of my interests into one degree. 
            </p>
            <p className="story-p">
                In reality my University’s curriculum was more focused on geodesy, 
                surveying, geographic information systems, and cartography and much less on 
                Computer & Software Engineering, 
                so apart from the basics of Visual Basic that we were taught at our freshmen year 
                there was no other course with coding on the curriculum. 
                Despite the fact that coding was pretty much neglected I enjoyed studying geomatics engineering 
                and later working as one. After all both geomatics engineering and software-engineering 
                have a lot common concepts:  
            </p>
            <ul>
                <li>
                    in both disciplines the goal is to create something from nothing:
                    <ul>
                        <li>
                            in surveying engineering we transform abstract values like horizontal and 
                            vertical angles and distances from one point to another to create meaningful maps
                        </li>
                        <li>
                            Similarly in software engineering we transform abstract values like Boolean, strings, 
                            numbers etc into fully functional applications that affect and simplify our daily routines.
                        </li>
                    </ul>
                </li>
                <li>in both disciplines a key aspect of the work is data visualization:
                    <ul>
                        <li>
                            in cartography whether you are creating a small scale technical drawing of a bridge or 
                            a large scale thematic map the goal is to visualize the data and present it in a meaningful
                             way to the end user.
                        </li>
                        <li>
                            similarly front end web developers use HTML and CSS to visualize some kind of information
                        </li>
                    </ul>
                </li>
                <li>
                    and most importantly whether you are a geomatics engineer or a software engineer in order to 
                    excel at your work you must be a lifelong learner
                </li>
            </ul>
            <h1 className='story-h1'>So how exactly did I get into coding?</h1>
            <p className="story-p">
                After graduating I pursued a career in geomatics, the first years were really challenging and overwhelming 
                – no University can prepare you for the real world’s needs,  plus as I mentioned before, 
                geomatics is a rapidly evolving science so I was constantly learning new things and worked on diverse projects. 
                That was fun while it lasted but at some point I was up to date with the industry, 
                and since my work didn’t throw me any new challenges I created one for myself so I decided that 
                it was high time for me to learn to code. 
            </p>
            <p className="story-p">
                When I made the decision to learn to code I had no idea that it would lead me to a career change, 
                I just wanted to be a better and more versatile geomatics engineer. 
                So I tried to pick up a learning path that would help me later in my career in geomatics. 
            </p>
            <figure className="figure-block">
                <blockquote className="quote-mystory">
                    When I made the decision to learn to code I had no idea that it would lead me to a career change, 
                    I just wanted to be a better and more versatile geomatics engineer.
                </blockquote>
            </figure>
            <p className="story-p">
                Coding has so many applications in geomatics (among other things: creating extensions for ArcGIS 
                - the most popular commercial software created by ESRI the pioneer in geomatics, 
                or custom extensions for qGIS – the most popular and widely used opensource GIS solution, 
                scripts for AutoCAD, creating completely new software, web-mapping, the options are endless...) 
                so I had to choose to focus on something specific otherwise it would lead me nowhere. 
                The process of choosing what exactly I want to achieve and what technology I must learn in order 
                to achieve it was like trying to find a needle in a haystack.
            </p>
            <figure className="hero-figure">
                <picture className="hero-image">
                    <source srcSet={heroImgSmall} media="(max-width: 600px)"/>
                    <img src={heroImgMedium} alt="me looking at a haystack"/>
                </picture>
                <figcaption className="hero-caption">
                    me trying to decide what programming language should I learn, 
                    in other words me looking for a needle in a haystack
                </figcaption>
            </figure>
            <p className="story-p">
                After weighing my options, I narrowed down my focus to two coding paths that appealed to me: 
                the first one was creating custom tools/extensions upon already existing software 
                (preferably C# with .NET framework for ArcGIS or Python for qGIS) 
                and the second option was to create dynamic web maps/webGIS applications that would serve 
                engineering data or even offer complete web-GIS solutions 
                (although web mapping sounds rather simplistic – 
                especially now that we live in the age of Google Earth and Google maps, serving engineering maps 
                on the web is a complex problem: most mapping applications that engineers use have different 
                projection and coordinate systems, also they need to serve custom imagery either satellite or orthophotos, 
                vector formats that are not web friendly at all (.shp I am looking at you) 
                plus they should offer editing tools and possibly even some spatial analysis tools. 
                Well obviously since you are reading this either in your browser or in your phone its pretty obvious 
                that I choose the web mapping path.
            </p>

            <p className="story-p">
                One of the reasons was that I already had some hands on experience with web mapping – in my 
                <span className="hover-word" title="Development of a web-GIS application. The case of ArcGIS server for the city of  Komotini"> thesis </span>
                 was a web-mapping application of my hometown created with the ArcGIS Server platform, 
                 the other reason was simply that the web is the future not only in geomatics but in every aspect of our lives. 
                 Also this time I didn’t want to rely on any commercial product, 
                 I wanted to learn how to build things from scratch.
            </p>
            <p className="story-p">
                So I did some research and found out that the most straightforward way to display maps on the web was 
                with Leaflet.js - a JavaScript mapping library. So I had to start by learning some JavaScript, 
                also since the map would be displayed in the browser I had to get some familiarity with HTML and CSS. 
                Finally I had a concrete goal in front of me: in order to create custom web-mapping applications I had to 
                learn JavaScript, HTML and CSS.
            </p>
            <p className="story-p">
                Initially I started learning the basics of the above technologies from free online resources like codeacademy. 
                Once I had a grasp of the basics I got really hooked up and wanted to dive deeper into coding so I enrolled for 
                online courses in web-developing in teamtreehouse and started working on projects and challenges on freeCodeCamp.
            </p>
            <p className="story-p">
                As I was diving deeper and deeper in the rabbit hole of tutorials, 
                I realized that I was getting more serious about JavaScript and the web but at the same point 
                I was moving away from my initial goal (learn how to create web-mapping applications in order to 
                become a better geomatics engineer). It was probably around that time that I started thinking about 
                a career change, but at the same time I wasn’t sure whether I wanted to quit geomatics, after all, 
                I liked my profession and I had invested a good amount of my life into geomatics engineering. 
            </p>
            <p className="story-p">
                What pushed me even further toward career change was when one of my friends 
                (who also happened to be a developer) recommended Udacity as a good online portal to learn 
                all things tech so I subscribed to their newsletter and a couple of months later got an email 
                that saying that Udacity and Google where offering a limited opportunity through the Grow with 
                Google program that offered a full Udacity NanoDegree in either Web or Android Scholarship Program, 
                since I already had some experience in the front-end part I applied for that scholarship without a 
                second thought. After the first application phase I was one of the 20.000 people from around the 
                globe that participated in the Google Developer Challenge Scholarship that lasted 3 months and 
                offered a series of JavaScript CSS and HTML lessons and challenges. Top 2,000 students from this 
                challenge were to be awarded full scholarships to the Front-End Web Developer NanoDegree Program by Udacity.  
            </p>
            <p className="story-p">
                When I received an e-mail from Udacity saying that I was one of the 2.000 students that would be awarded 
                a full scholarship. 
                I was more determined than ever that choosing a career as a software engineer was the right path for me.
            </p>
            <p className="story-p">
                During the six months of the FEND NanoDegree I learned a ton of things like responsive design with 
                flex and CSS Grid, asynchronous JavaScript and RESTful APIs, automation tools, version control, 
                and of course last but not the least my front end framework of choice - React.js 
                (in fact this site was built with React.js). 
            </p>
            <p className="story-p">
                My Udacity spell ended in 28 of August when I got my front end web developer 
                certificate since then I am polishing my skills and preparing myself for a new challenge…
            </p>
            <time dateTime="2018-11">November 2018</time>
        </main>
    )
}

export default MyStory;