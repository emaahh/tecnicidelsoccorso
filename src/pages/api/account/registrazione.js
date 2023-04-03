const { MongoClient, ServerApiVersion } = require('mongodb');
//const uri = "mongodb+srv://tecnicidelsoccorsoservice:LuMkXeeZYlLO4wiJ@dati.xoi6vty.mongodb.net/?retryWrites=true&w=majority"
const uri = "mongodb://tecnicidelsoccorsoservice:LuMkXeeZYlLO4wiJ@ac-0sty06d-shard-00-00.xoi6vty.mongodb.net:27017,ac-0sty06d-shard-00-01.xoi6vty.mongodb.net:27017,ac-0sty06d-shard-00-02.xoi6vty.mongodb.net:27017/?ssl=true&replicaSet=atlas-13l4y2-shard-0&authSource=admin&retryWrites=true&w=majority"

export default function handler(req, res) {
    const requestMethod = req.method;

    if(requestMethod == "POST"){

        const data = JSON.parse(req.body);
        console.log(data)
        /*

        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
        client.connect(err => {
            const collection = client.db("UtentiData").collection("UtentiColl");
            
            if(collection.find({"Email": data.Email})){
                res.status(200).json({risposta:"utente trovato"});
            }else{
                res.status(200).json({risposta:"utente non trovato"});
            }
            

            client.close();
        });

        */

        MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },  function(err, db) {

            if (err) throw res.send(['nessun risultato']);
            var dbo = db.db("UtentiData");
            dbo.collection("UtentiColl").find({"Email": data.Email}).toArray(function(err, result) {
                if (err) throw res.send(['nessun risultato']);
                res.send(result);
                db.close();
            });

        });


    }else{
        res.status(200).json({ message: "non hai il permesso" });
    }
    
}