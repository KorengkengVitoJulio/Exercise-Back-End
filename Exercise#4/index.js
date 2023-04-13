//ExpressJS
 
const moment = require('moment');

const app = express();

app.get('/', (req, res) => {
  res.send('This Is the Home Page');
});

app.get('/about', (req, res) => {
  res.json({
    status: 'success',
    message: 'response success',
    description: 'Exercise #03',
    date: moment().format(),
    data: dataMember,
  });
});

app.get('/users', (req, res) => {
  res.json(dataUsers);
});

//midleware
const log = (req, res, next)=>{
  console.log(`${moment().format} - ${req.ip} - ${req.originUrl}`)
  next();
}
app.use(log)

const log2 = (req, res, next)=>{
  console.log(`${Date.now()} - ${req.ip} - ${req.originUrl}`)
  next();
}
app.use(log2)

//Routing dinamis params. 
app.get("/post/id/:id", (req, res)=>{ 
  res.send(`Artikel- ${req.params.id}`);
})

//Query string
app.get("/food",(req,res)=>{
  console.log(req.query);
  res.end();
});

app.get('/food',(req,res)=>{
  const Page = req.query.page ? req.query.page : 1
  res.write('Foods pages:'+page+'\n')
  if (req.query.sort) res.write('Sort by:'+req.query.sort)
  res.end()
})

//Regex
app.get("page-*",(req, res)=>{
  res.send("raute:"+req.path)
})


const port = 3000;
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
