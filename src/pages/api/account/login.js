
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://tecnicidelsoccorsoservice:zmbRZSwsEFJFTT4A@dati.xoi6vty.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });



export default function handler(req, res) {

    if (req.method === 'POST') {
        const body = JSON.parse(req.body)
        
        client.connect(err => {
            const collection = client.db("UtentiData").collection("UtentiColl");
    
            collection.find({Email: body.Email, Password: body.Password}).toArray(function(err, result) {
                if (err) throw err;

                if(result.length === 0){
                    res.status(200).json({ risposta: 'nessun utente trovato' })
                }else if(result!=[]){
                    console.log('esiste')
                    res.status(200).json(result)  
                }

            });
        
          });

      } else {
        res.status(200).json({ risposta: 'nulla' })
      }
    
}


