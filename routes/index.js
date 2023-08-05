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
{
  id: 11,
  term: "Infrastructure as Code (IaC)",
  description: "IaC is a practice that enables developers to manage and provision infrastructure through code, using version control systems to automate the process of creating, modifying, and destroying infrastructure components. This approach helps ensure infrastructure stability, repeatability and scalability.",
  reference: "Mitchell, B. (December 18, 2019). Infrastructure as Code: A Comprehensive Guide. Retrieved from HashiCorp: https://www.bashicorp.com/resources/what-is-infrastructor-as-code"
},
{
  id: 12,
  term: "Continuous Deployment (CD)",
  description: "CD is a continuous delivery deployment where code changes are automatically pushed to production after passing all automated testing steps. This enables fast and reliable software release and shortens the time from development to deployment.",
  reference: "Fowler, M. (21 August 2013). Continuous delivery. Retrieved from MartinFowler.com: https://martinfowler.com/bliki/Continuousdelivery.html"
},
{
  id: 13,
  term: "Infrastructure orchestration:",
  description: "Infrastructure orchestration involves automating the provisioning, coordination and management of various infrastructure resources and services across multiple environments. This makes efficient use of resources and simplifies application deployment and scaling.",
  reference: "Kavis, M. (December 20, 2017). Describe infrastructure orchestration. Retrieved from InfoQ: https://www.infoq.com/articles/infrastructor-orchestration-explained/"
},
{
  id: 14,
  term: "Incident Management:",
  description: "Incident management is a set of processes and activities that focus on identifying, responding to, and resolving incidents and service disruptions. The goal is to restore normal operations as quickly as possible with minimal impact to users and business operations.",
  reference: "Atlassian. (n.d.). Incident Management. Retrieved from Atlassian: https://www.atlassian.com/incident-management"
},
{
  id: 15,
  term: "Chat operation",
  description: "ChatOps is a collaboration model that integrates chat tools with automation and monitoring systems. This allows teams to take action, receive notifications and access information from within the chat platform, promoting transparency and real-time communication.",
  reference: "Scott, J. (2016, May 16). ChatOps: Heroes Guide on GitHub. Taken from GitHub Engineering: https://github.blog/2016-05-16-chatops-at-github/"
},
{
  id: 16,
  term: "Blue-green expansion",
  description: "Green-blue deployment is a deployment strategy that uses two identical production environments, blue and green. A new version of the application is deployed in the green environment and the blue environment serves the current version. Once the green environment is validated, traffic changes from blue to green, reducing downtime and risk during deployment.",
  reference: "Hamer, M. (March 24, 2021). A description of the blue/green deployment. Taken from DevOpsCube: https://www.devopscube.com/blue-green-deployment/"
},
{
  id: 17,
  term: "Canary deployment",
  description: "Canary deployment is a strategy for gradually releasing a new version of an application to a subset of users or servers. This allows you to test new versions in production with a smaller audience and find problems earlier than a full launch.",
  reference: " Datadog. (n.d.). What is Canary Deployment? Retrieved from Datadog: https://www.datadoghq.com/glossary/canary-deployment/"
},
{
  id: 18,
  term: "Elasticity",
  description: "Elasticity refers to the ability of an application or infrastructure to automatically increase or decrease resources based on demand. This allows the system to handle a wide variety of workloads efficiently and cost-effectively.",
  reference: "AWS. (n.d.). What is Elasticity in the Cloud? Retrieved from Amazon Web Services: https://aws.amazon.com/what-is-aws/elasticity/"
},
{
  id: 19,
  term: "GitOps",
  description: "GitOps is an approach to DevOps that uses version control systems like Git to manage infrastructure and application configuration. Changes to the system are declared in a Git repository and automated processes apply those changes to the target environment.",
  reference: "Weaveworks. (n.d.). GitOps - What You Need to Know. Retrieved from Weaveworks: https://www.weave.works/technologies/gitops/"
},
{
  id: 20,
  term: "Feature Flag",
  description: "Feature flags are configuration keys that allow developers to remotely enable or disable certain features of their application. This allows for incremental rollouts, A/B testing, and risk-free feature adoption.",
  reference: "Rollout. (n.d.). What is a Feature Flag? Retrieved from Rollout.io: https://rollout.io/blog/feature-flag-best-practices-definition/"
},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722', sub: 'Welcome to DevOps Glossary', names: nameList });
});

module.exports = router;