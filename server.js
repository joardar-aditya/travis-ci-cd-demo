import express from express;
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    await sleep(5000);
  }
}

app = express()

const port = 8080;

app.get("/", async(req, res) => {
    res.send("Finally connected");   
});

app.listen(
  port, () => {
    console.log('server running locally');
  }
)

//main();
