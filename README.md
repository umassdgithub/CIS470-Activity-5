# Week 10 - In-Class Activity 
## Docker Compose Exercise

1. Clone this repository.
2. Make the `Dockerfile` for the `web` and for the `db` directories (inside each directory).
    
    * To construct the Dockerfile, you will need to review the structure of the web application.
    * The Database in here is <a href='https://hub.docker.com/layers/library/mongo/4.4.2/images/sha256-31b5dbffc807a747e11a9e130df15a7a04ddd0bb56f9313c085835311984bba9'>mongodb:4.4.2</a>
      
3. Create `docker-compose.yml` file in the root, and add the `web` and `db` Dockerfiles into `docker-compose.yml`. Note that the steps are explained in the slides, in week 10 folder in the LMS (MyCourses or Canvas)
4. Run docker-compose: `docker-compose up --build`
5. Open your browser and navigate to http://localhost:3000

### **This is just an exercise to get you started.**


Each directory in this repository has its own Readme.md file.

<a href='./db/README.md' >`\db\README.md`</a>
<a href='./web/README.md' >`\web\README.md`</a>
