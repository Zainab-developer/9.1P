var express = require('express');
var router = express.Router();

const nameList = [
  {
    id: 1,
    term: "DevOps",
    description: "It aims to increase collaboration, automation, and integration between development and operations teams, resulting in faster and more stable software delivery.",
    reference: "Courtemanich, M. (2021, December). What is DevOps? The ultimate guide. Retrieved from Tech Target: https://www.techtarget.com/searchitoperations/definition/DevOps"
},
{
  id: 2,
  term: "Continuous Integration (CI)",
  description: "CI ensures that changes are validated early, reducing integration issues, and enabling faster feedback on code quality.",
  reference: "Ellingwood, J. (2017, May 11). An Introduction to Continuous Integration, Delivery, and Deployment. Retrieved from Digital Ocean: https://www.digitalocean.com/community/tutorials/an-introduction-to-continuous-integration-delivery-and-deployment"
},
{
  id: 3,
  term: "Continuous Delivery (CD)",
  description: "CD enables frequent and reliable releases, ensuring that software can be deployed to production at any time with minimal manual intervention.",
  reference: "Hat, R. (2022, May 11). What is CI/CD? Retrieved from Red Hat: https://www.redhat.com/en/topics/devops/what-is-ci-cd"
},
{
  id: 4,
  term: "Version Control",
  description: "It provides a history of changes, enables collaboration, and helps manage conflicts when multiple developers work on the same codebase.",
  reference: "Nagele, C. (2020, 1). An introduction to version control. Retrieved from Beans Talk: http://guides.beanstalkapp.com/version-control/intro-to-version-control.html"
},
{
  id: 5,
  term: "Containerization",
  description: "Containers ensure that applications run consistently across different environments, making it easier to deploy and scale applications.",
  reference: "Gaitonde, A. (2021, March 15). Introduction to Containers: Basics of Containerization. Retrieved from Medium: https://medium.com/geekculture/introduction-to-containers-basics-of-containerization-bb60503df931"
},
{
  id: 5,
  term: "Microservices",
  description: "Microservices allow for more agile development, better fault isolation, and scalability, making it easier to update and maintain different parts of the application.",
  reference: "Lewis, J. (2014, March 25). Microservices. Retrieved from MartinFowler.com: https://martinfowler.com/articles/microservices.html"
},
{
  id: 6,
  term: "Configuration Management",
  description: "CI ensures that changes are validated early, reducing integration issues, and enabling faster feedback on code quality.",
  reference: "Hat, R. (2023, June 22). What is configuration management? Retrieved from Red Hat: https://www.redhat.com/en/topics/automation/what-is-configuration-management"
},
{
  id: 7,
  term: "DevOps Culture",
  description: "It emphasizes breaking down silos, promoting shared responsibilities, and a willingness to embrace change and feedback to achieve a more efficient and productive software development process.",
  reference: "HALL, T. (2016). What is DevOps Culture? Retrieved from Atlassian: https://www.atlassian.com/devops/what-is-devops/devops-culture"
},
{
  id: 8,
  term: "Git",
  description: "Git provides powerful branching and merging capabilities, enabling multiple developers to work on different features simultaneously and later integrate changes seamlessly.",
  reference: "Nelson, M. (2020, December 3). An Intro to Git and GitHub for Beginners (Tutorial). Retrieved from Product Hubspot: https://product.hubspot.com/blog/git-and-github-tutorial-for-beginners"
},
{
  id: 9,
  term: "Scalability",
  description: "A scalable system can efficiently adapt to changes in load, ensuring it can handle larger volumes of users and data as the application grows.",
  reference: "Watts, S. (2020, July 27). An Introduction to Scalability. Retrieved from BMC: https://www.bmc.com/blogs/scalability-introduction/"
},
{
  id: 10,
  term: "Continuous Testing",
  description: "It involves various testing types, such as unit tests, integration tests, and end-to-end tests, to ensure that changes do not introduce defects and meet quality standards.",
  reference: "Katalon. (2022). Introduction to Continuous Testing | Definition, Tools & How to Perform. Retrieved from Katalon: https://katalon.com/resources-center/blog/continuous-testing-introduction"
},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub: 'Welcome to DevOps Glossary', names: nameList });
});

module.exports = router;