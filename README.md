# The Holistic Educator: A Description

- The final version of this project will be an application that: 
1. Tracks connections teachers make with students (i.e. a teacher would be able to see who she/he/they has checked in with or not 'today').
2. Informs teachers of the supports needed to fulfill social-emotional needs (key word filters would suggest books or web resources).
- This project is near and dear to me as a huge advocate for social-emotional learning in schools. This application is a tool that many teachers who are tracking their connections with students will find helpful to ensure that they are reaching every student.  

## Important Links

- [Deployed API](https://whispering-anchorage-25173.herokuapp.com/)
- [Deployed Client](https://rubysattar.github.io/the-holistic-educator/)

## Planning Story

[Results from my teacher poll conducted on instagram](https://imgur.com/dVmMwMG)

- The first step in my planning process was to do market research. I asked other teachers about tools they wished to have in the classroom. Most teachers polled said they would like a way to keep track of which students with whom they have had check-ins.
- Next, I broke down my application into versions and focused on the first version, which would require just one resource to which I'd apply CRUD actions - a student roster (including an option for a single note to be added to each student.)
- Starting with the back-end API, I routed my user and student resources, wrote curl scripts, and tested their accuracy in the development server. 
- Upon success using CRUD actions on these resources in the back-end, I moved onto connecting my back-end to a front-end client server, using Handlebars to display the most relevant data for the user as the user would apply CRUD actions through the front-end. 

### User Stories

- As a user I want to sign in/up
- As a user I want to Create a new student in my roster.
- As a user I want to Read multiple student names.
- As a user I want to Read a single note for a student.
- As a user I want to Update a student I own in my roster.
- As a user I want to Delete a student I own in my roster.
- As a user, I want to Create a check-in note for each student.
- As a user, I want to Read a check-in note for each student. 
- As a user, I want to Read multiple check-in notes for each student.
- As a user, I want to Update a check-in note for each student.
- As a user, I want to Delete a check-in note for each student.

### Technologies Used

- jQuery
- HTML/CSS
- Bootstrap
- Javascript

### Unsolved Problems

- My problem-solving strategy was to console log everything I assumed I knew about my code to be sure my code represented what I thought it did. I routinely checked the server error messages to pinpoint the source of my bugs.
- Would like to eventually .... create more resources to build on more updated versions of this application.

## Images

#### Wireframe:
- [updated application wireframe](https://imgur.com/viNGzwH)
- [initial landing page wireframe](https://imgur.com/HANqQFv)
- [initial application wireframe](https://imgur.com/fbpXkYj)

---

#### ERD:
![ERD](https://www.smartdraw.com/entity-relationship-diagram/img/cardinality.jpg?bn=1510011144)
