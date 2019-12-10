use contact;

db.createCollection('contactList');

db.contactList.insertMany(
    [
    {Lastname: 'Ben Lahmer', Firstname: 'Fares', Email: 'fares@gmail.com', age:26},
	{Lastname: 'Kefi', Firstname: 'Seif', Email: 'kefi@gmail.com', age:15},
	{Lastname: 'Fatnassi', Firstname: 'Sarra', Email: 'sarra.f@gmail.com', age:40},
	{Lastname: 'Ben Yahia', Firstname: 'Rym', age:4},
    {Lastname: 'Cherif', Firstname: 'Sami', age:3}
                          ])

db.contactList.find()

db.contactList.find({_id:ObjectId('5da08b75dd186fdf8ec39155')}) 	

db.contactList.find({age : {$gt : 18}})

db.contactList.find({age : {$gt : 18}}, {name : /ah/})

db.contactList.update({Firstname:'Seif'},{$set:{Firstname : 'Kefi Anis'}})		

db.contactList.remove({age : {$lt : 5}})

db.contactList.find()