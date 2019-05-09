In order to run this project Kindly follow the below instructions.

Due to my limited knowledge and time constraints related to docker , I could not implement this in docker. Apologies for the same.

Please make sure that Node & React is globally installed in your system.
If not run the following commands to install React
    npm install -g create-react-app

Once this is done , run the following command 
1. npm install
2. cd client
3. npm install
4. cd ..
5. npm run dev


The Frontend is created at http://localhost:3000/
Node API Being served at  http://localhost:5000/

To run the Project once it is set up , use the following command to run the project
    npm run dev

I have not implemented server side caching of API due to time constraints . However , we can use redis or memcache for caching the data. This will increase the response time.
The browser cache is there for 30 seconds as mentioned.

