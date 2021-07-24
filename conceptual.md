### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - React router is client-side routing. It allows the client to handle all of the URL routes, making the application a "single page app"  

- What is a single page application?
  - where all of the front-end code is sent directly to the client without having to be rendered on the server-side first.

- What are some differences between client side and server side routing?
  - client-side routing: 
    - Routing happens in the client browser
    - less-optimized for SEO or web-crawling
  - server-side routing: 
    - routing happens on the server. 
    - The standard, so is better for SEO and web-crawling

- What are two ways of handling redirects with React Router? When would you use each?
  - `<Redirect to="/url" />`:
    - "You went in the wrong direction. 
    - Typically in response to 404 redirects at the end of `<Switch />` Components. 
  - `history.push("/")`:
    - "You did this, now go here"
    - typically in response to form submissions. 

- What are two different ways to handle page-not-found user experiences using React Router?
  - `<Recirect to="/" />`:
    - A browser redirect to a valid URL at the end of the `<Switch />` component. 
  - `<Route><NotFound /></Route>`:
    - A rendering of some kind of 404 component at the end of the `<Switch />` component. 

- How do you grab URL parameters from within a component using React Router?
  - `const {variable} = useParams();`

- What is context in React? When would you use it?
  - Context is a method of managing a global value amongs all react components. 
  - It makes it easier to pass data multiple levels down into components rather than having to tunnel the props through each element. 
  - You would typically use context when its a setting / value that all components will rely on or a value that a component much further down in the hirearchy will need to use that is set by the original page component or another component much further up. 

- Describe some differences between class-based components and function
  components in React.
  - Class-based components don't have an effective system for hooks the same way function components are built. (most similar would be mixins)
  - Class-based components have the state set as an instance property, rather than through useState(). 
    - The entire state has to change and all values inside of it, as there is no individual setX() function for each value in the state. 
  - componentDidMount(), componentWillUnmount(), componentDidUpdate() are all wrapped into useEffect() for function components now, making the usage much simpler. 
  - class-based components are generally much longer to write. 


- What are some of the problems that hooks were designed to solve?
  - Hooks are designed to solve the issue of having to write similar functions across multiple components.
    - The same hook can be utilized amongs many other similar components. 
  - They can also help de-clutter component logic into a separate file. 