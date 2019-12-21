# Inter IIT Tech_Meet 8.0
### Web App for maintenance of Road to reduce load on government official and keep track of user complaints.


### Technology Stack Used:

1: HTML/CSS/Javascript/Bootstrap

2: AngularJS

3: ExpressJS

4: Mongoose/Mongodb

### How to Run

1: Install NodeJS (v12)

2: Install npm (v6)

3: Install dependencies mentioned in package.json (npm install inside folder)

4: Install Mongodb (for your respective platform)

5: Create mongodb/data/db in your home folder and connect to your database and run mongo

6: run server (node server.js)

7: Go inside client folder and open first_page.html


### Solution attempted

Because it should be portable device friendly(5) and it has to be accessible to government officials who work on personal computers, we have decided that it should be a web application. Building mobile app isn’t practical here because Government officials work on personal computers.

It is required that we have to reduce the manual visits of government officials to the construction site but they have to also know the progress of the construction. For this, it is not practical to rely on public to give survey about the progress of construction to the officials. We also can’t completely rely on the contractor too because that is his work he his giving survey about.

So we decided that government official has to visit the site. But with less frequency and the survey form is simplified.

Users can register accounts and they can file complaints when they find damaged roads. The survey form is simple and it collects the location and description of the problem and it sends it to the government officials. Government officials receive these complaints and validate them and forwards them to appropriate contractor for repairing.

The users who raised complaints can check the progress for resolution of their complaints. They also have a history of all resolved complaints that they have resolved.

For tracking progress of road, we studied the important milestones that come during the construction of the road and added them in the survey. The contractor sends the survey with photos to the government official. The latter can decide to have surprise visits to the sight and check for himself. 

There is register option only for users. Contractors and other government officials can only be added by government officials.
For identification of roads, there will be road ID, although , the user will only send GPS data, the government official will have database to convert it into appropriate road id




