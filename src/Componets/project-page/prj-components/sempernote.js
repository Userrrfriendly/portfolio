import React from "react";
import Ft from "../../FunkyText/FunkyText";
import FunkyHeader from "../../FunkyText/FunkyHeader";

function Sempernote() {
  const goalsData = [
    "The User can create a Sempernote account by registering with an email and a password",
    "The User can login to Sempernote with his email/password",
    "All Data is persistant and is stored online in a MongoDb database.",
    "Once Logged in the User can create and edit Notes, Notebooks and Tags ",
    "Each Note,Notebook and Tag can be Renamed/Deleted/Added to Favorites or Removed from Favorites",
    "Deleted Notes are moved to Trash where they can be Inspected, Restored or Permanently Deleted",
    "Tags and Notebooks are deleted permanently",
    "Each Note must belong to a single Notebook",
    "Each Note can be moved from one Notebook to another",
    "Tags can be attached to Notes",
    "The user can sort the notes by Title, Created Date, Modified Date",
    "When in note editing mode the content of the note is auto-saved (and uploaded to the database) each two seconds after the user stops typing or presses the back button or the save button"
  ];
  const functionality = `The app is a simplified version of Evernote where  the user can create notes in a WYSIWYG (what you see is what you get) rich text editor. Each note is stored in a notebook and each note can have zero or multiple Tags assigned to it.`;

  const approach1 = `Since the data drives the project requirements I started with the back-end. Once I got familiar with the frameworks and tools I would use (Node,Express,MongoDB,GraphQL) my first task was to decide how to structure my data. After giving it some thought I resolved to use four collections in my MongoDB:`;

  const approach2 = `Next step was to create a relationship schema between the collections: `;
  const approach3 = `After creating the schema and creating an authentication method with JSON web token for the users to be able to sign in/log in it was a simple matter of adding more GraphQL queries for each request that would come from the client.`;
  const approach4 = `On the client side things got a bit chaotic since I started building the app with MaterializeCSS and halfway decided to switch to Material-UI since it is a more mature framework, it's optimized for React, gets frequent updates and offers a lot more regarding accessibility and other features out of the box.`;
  const approach5 = `The other big issue that I had was how to manage state, initially I used React.context API and just mapped all its methods to app state, obviously this is not an optimal approach as the app state was bloating with each new functionality that was being added and it was getting hard to maintain this "fine mess". My initial thoughts were to add Redux at some point to solve this problem but since Material-UI converted  me to a React hook fan (the latest versions of Material UI relies heavily on hooks). I decided to use the new kid on the block regarding state management and that of course is the useReducer with useContext hooks.`;

  const finale = `Honestly quite a ton of cool stuff, this was the first full-stack  application that I developed and deployed, so I had a chance to get familiar with <strong>Node.js</strong> &  Express.js plus I wanted the data to be persistently stored in an online database so I had to learn the basics of MongoDB and mongoose.js. Since I already had experience with RESTful APIs I tried to go for a different approach and used GraphQL instead (best decision ever! GraphQL is great).
    Apart from learning a ton of things about back-end I also got acquainted with quite a few new things in React, for starters I used Material-UI as a front end framework, and since the new version of Material-UI is relies heavily on React hooks,  it was a perfect opportunity to learn this new feature of React. Speaking about hooks, I really got "hooked" with React hooks and decided to used useReducer + useContext instead of Redux to manage the state of the app.
   `;
  return (
    <div>
      <article className="prj-pg-details-article">
        <h3 className="prj-pg-details-article-h3" aria-label="Goals:">
          <FunkyHeader text="Goals:" />
        </h3>
        <p>
          <Ft>
            The goal was to create my first full-stack app. To be more specific
            I wanted to try the MERN stack with a splash of GraphQL instead of
            traditional RESTfull API. The app itself is a simple digital note
            taking app similar to Evernote and OneNote.
          </Ft>
        </p>
        <strong aria-label="User Stories:">
          <Ft>User Stories:</Ft>
        </strong>
        <ul className="check-list">
          {goalsData.map((listItem, i) => (
            <li key={i} className="check-item" aria-label={listItem}>
              <Ft>{listItem}</Ft>
            </li>
          ))}
        </ul>
      </article>
      <article className="prj-pg-details-article">
        <h3 className="prj-pg-details-article-h3" aria-label="Functionality:">
          <FunkyHeader text="Functionality:" />
        </h3>
        <p className="prj-pg-details-p" aria-label={functionality}>
          <Ft>{functionality}</Ft>
        </p>
      </article>
      <article className="prj-pg-details-article">
        <h3
          className="prj-pg-details-article-h3"
          aria-label="Approach/Milestones:"
        >
          <FunkyHeader text="Approach/Milestones:" />
        </h3>
        <p className="prj-pg-details-p" aria-label={approach1}>
          <Ft>{approach1}</Ft>
        </p>
        {
          <ul>
            <li aria-label="Users">
              <Ft>Users</Ft>
            </li>
            <li aria-label="Notebooks">
              <Ft>Notebooks</Ft>
            </li>
            <li aria-label="Notes">
              <Ft>Notes</Ft>
            </li>
            <li aria-label="Tags">
              <Ft>Tags</Ft>
            </li>
          </ul>
        }
        <p className="prj-pg-details-p" aria-label={approach2}>
          <Ft>{approach2}</Ft>
        </p>
        {
          <ul>
            <li aria-label="each user in the User collection has a reference to the notebooks and tags that they created">
              <Ft>
                each user in the User collection has a reference to the
                notebooks and tags that they created
              </Ft>
            </li>
            <li aria-label="each notebook in Notebooks collections is connected with the user that owns the notebook and it also holds a reference to the individual notes from the Notes collection that are created by that user.">
              <Ft>
                each notebook in Notebooks collections is connected with the
                user that owns the notebook and it also holds a reference to the
                individual notes from the Notes collection that were created by
                that user.
              </Ft>
            </li>
            <li aria-label="each individual Note has a reference to the notebook where it belongs and also to any tags from the Tag collection that are attached to the note">
              <Ft>
                each individual Note has a reference to the notebook where it
                belongs and also to any tags from the Tag collection that are
                attached to the note
              </Ft>
            </li>
            <li aria-label="each tag holds a reference the user who created it and also a reference to each individual note that is tagged with that particular tag. ">
              <Ft>
                each tag holds a reference the user who created it and also a
                reference to each individual note that is tagged with that
                particular tag.{" "}
              </Ft>
            </li>
          </ul>
        }
        <p className="prj-pg-details-p" aria-label={approach3}>
          <Ft>{approach3}</Ft>
        </p>

        <p className="prj-pg-details-p" aria-label={approach4}>
          <Ft>{approach4}</Ft>
        </p>
        <p className="prj-pg-details-p" aria-label={approach4}>
          <Ft>{approach5}</Ft>
        </p>
      </article>
      <article className="prj-pg-details-article">
        <h3
          className="prj-pg-details-article-h3"
          aria-label="What did I learn from this project?"
        >
          <FunkyHeader text="What did I learn from this project?" />
        </h3>
        <p className="prj-pg-details-p" aria-label={finale}>
          <Ft>
            A ton of cool stuff, this was the first full-stack application that
            I developed and deployed, so I had a chance to get familiar with
          </Ft>
          <strong>
            <Ft>Node.js </Ft>
          </strong>
          &
          <strong>
            <Ft> Express.js </Ft>
          </strong>
          <Ft>
            plus I wanted the data to be persistently stored in an online
            database so I had to learn the basics of
            <strong>
              <Ft>MongoDB </Ft>
            </strong>
            and
            <strong>
              <Ft>mongoose.js. </Ft>
            </strong>
            Since I already had experience with RESTful APIs I tried to go for a
            different approach and used
            <strong>
              <Ft>GraphQL </Ft>
            </strong>
            instead (best decision ever! GraphQL is great).
            <br />
            Apart from learning a bunch of things about back-end I also got
            acquainted with quite a few new things in React, for starters I used
            <strong>
              <Ft>Material-UI </Ft>
            </strong>
            as a front end framework, and since the new version of Material-UI
            relies heavily on
            <strong>
              <Ft>React hooks, </Ft>
            </strong>
            it was a perfect opportunity to learn this new feature of React.
            Speaking about hooks, I really got "hooked" with React hooks and
            decided to used useReducer + useContext instead of Redux to manage
            the state of the app, which is a great state management option for
            small apps like this.
          </Ft>
        </p>
      </article>
    </div>
  );
}

export default Sempernote;
