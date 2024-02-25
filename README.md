![Project Banner](https://raw.githubusercontent.com/Education-IT/Panel-Dydaktyczny/main/images/banner.png)
## Course Project - *JavaScript Programming Languages* - **UAM**

> **Completed in the fifth semester of computer science studies.**

The result of this project is used by me on a daily basis for educational purposes with children and young people. It serves as an ideal center for essential materials and programs that young students (working on company laptops) can quickly and easily download, whether in class or at home. Older students, whom I am currently teaching the basics of the Python language, have access to consolidated knowledge: summaries of each lesson, links to YouTube videos, and homework challenges.

My website also includes a simple REST API that allows me to perform CRUD operations on a database. The backend of the application is written in PHP.

I also consider the website as a modest portfolio. Feel free to visit it -> [![MyWebSite](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://education-it.pl/) <-

It enables parents or students to easily send me an email through the form on the website.

**Technology Stack:**

![Angular](https://img.shields.io/badge/Angular-DD0031.svg?style=for-the-badge&logo=Angular&logoColor=white) ![PHP](https://img.shields.io/badge/PHP-777BB4.svg?style=for-the-badge&logo=PHP&logoColor=white) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6.svg?style=for-the-badge&logo=TypeScript&logoColor=white) ![SQL](https://img.shields.io/badge/MySQL-4479A1.svg?style=for-the-badge&logo=MySQL&logoColor=white) ![phpMyAdmin](https://img.shields.io/badge/phpMyAdmin-6C78AF.svg?style=for-the-badge&logo=phpMyAdmin&logoColor=white) ![HTML](https://img.shields.io/badge/HTML5-E34F26.svg?style=for-the-badge&logo=HTML5&logoColor=white) ![CSS](https://img.shields.io/badge/CSS3-1572B6.svg?style=for-the-badge&logo=CSS3&logoColor=white) <!--[![MyWebSite](https://img.shields.io/badge/website-000000?style=for-the-badge&logo=About.me&logoColor=white)](https://education-it.pl/)-->


## Specification:
 **Functional Requirements:**
1) **Home Page:**
-> Ability to download the teacher's CV.
-> Ability to navigate to other views within the application from the home page.
-> Ability to navigate to external websites such as GitHub, LinkedIn, and Facebook.

2) **Contact Page:**
-> Ability to send an email directly from the website.

3) **Student View Panel:**
-> Display all the lesson summaries added so far to the students.
-> Always display the material from the latest lesson first.
-> Ability for the student to select and display the content of the desired lesson summary.
-> Button to generate random GIFs using the GIPHY company's API based on a randomly selected tag from my predefined list.
-> Ability to download ready-made programs in MakeCode and Python, manually added to the server by the teacher.

4) **Login Page:**
-> Retrieve an image and associate it with data (title and description) through the NASA API. New content is added daily.
-> Mock login using local storage. Only users with a valid token can access the teacher's educational panel.

5) **Teacher's Educational Panel:**
-> Display and functionality identical to the student view panel, excluding the button for generating GIFs.
-> Ability to add new lesson summaries through forms on the website.
-> Ability to delete and update previously created lesson summaries.
-> Ability to log out. Remove the token and return to the home page.
 

**Non-functional Requirements:**
1) The page should load in less than 1 second.
2) The page should be hosted on a server other than local. + The page should be served using the HTTP protocol encrypted with the TLS protocol (HTTPS).
3) The page should have a REST API implemented in PHP.

**Potential Users:**
* Various educators, such as teachers, tutors, instructors, or lecturers.
* Students / clients of the above-mentioned educators.

**Potential Benefits for Users:**
* Ease and simplicity in consolidated access to educational materials (lesson summaries, useful links, ready-made programs, and homework challenges).
* Promotional website.
* Ease of sharing files with students during classes. Students can download files from the teacher's website.
