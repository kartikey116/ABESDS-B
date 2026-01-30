import express from 'express'
const app = express()

app.use(express.json());

// craete array for store data 
const student = [
    {
        id: 1,
        name: 'John',
        age: 20,
        gender: 'male',
        address: 'USA',
        phone: '1234567890'
    },
    {
        id: 2,
        name: 'Jane',
        age: 22,
        gender: 'female',
        address: 'UK',
        phone: '0987654321'
    },
    {
        id: 3,
        name: 'Tom',
        age: 25,
        gender: 'male',
        address: 'Canada',
        phone: '0987654321'
    }
]

app.get('/', (req, res) => {
    try {
        res.json(student)
        res.status(200).json({message:"Show all data"})        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
        console.log(error)
    }
})

// search data by id
app.get('/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const data = student.find(item => item.id === id)
        
        if(!data) {
             res.status(404).json({message:"Data not found"})
        }
        res.json(data);
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"})
        console.log(error)
    }
})

// create new data
app.post('/add', (req, res) => {
    try {
        const data = req.body
        student.push(data);
        res.status(200).json({message:"Data added"});
        
    } catch (error) {
        res.status(500).json({message:"Internal Server Error"});
        console.log(error);
    }
})

app.put('/edit/:id', (req, res) => {
    try {
        const id = parseInt(req.params.id)
        const index = student.find(s => s.id);
        if(index == -1) {
            return res.status(404).json({message:"Data not found"})
        }

        student[index] = {
            ...student[index],
            ...req.body
        }
        res.status(200).json({message:"Data updated"})
    } catch (error) {
        res.status(404).json({message:"Internal server error"});
    }
})

app.delete('/delete/:id',(req,res) => {
    try {
        const id = parseInt(req.params.id)
        const index = student.find(s => s.id === id)

        if(index == -1) {
            return res.status(404).json({message:"Data not found"});
        }
        student.splice(index,1);
        res.status(200).json({message:"Data deleted"});
    } catch (error) {
        res.status(404).json({message:"Internal server error"});
    }
})

app.listen(3000, () => {
  console.log('App listening on port 3000!')
});