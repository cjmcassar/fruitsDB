const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/fruitsDB",
{
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const fruitSchema = new mongoose.Schema(
{
  name:
  {
    type: String,
    required: [true, "No name specified yo"]
  },
  rating:
  {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit(
{
  // name: "Apple",
  rating: 10,
  review: "Fantastic"
});

//fruit.save();

const personSchema = new mongoose.Schema(
{
  name: String,
  age: Number,
  favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const mango = new Fruit
({
  name: "Mango",
  score: 10,
  review: "Awesome fruit."
});

mango.save();

Person.updateOne({name: "Jon"}, {favouriteFruit: mango}, function(err)
{
  if (err)
  {
    console.log(err);
  }
  else
  {
    console.log("Succesfully updated the doc");
  }
});

const person = new Person(
{
  name: "Jon",
  age: 22,
});

person.save();

Fruit.find(function(err, fruits)
{
  if (err)
  {
    console.log(err);
  }
  else
  {
    mongoose.connection.close();

    fruits.forEach(function(fruit)
    {
      console.log(fruit.name);
    });
  }
});

// Fruit.updateOne({_id: "5fb6b4fd414ec3473eca3fff"},
// {name: "Peach"}, function(err)
// {
//   if (err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("It was updated");
//   }
// });

// Fruit.deleteOne({name :"Peach"}, function(err)
// {
//   if (err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("It's gone");
//   }
// });

// Person.deleteMany({name: "Jon"}, function(err)
// {
//   if (err)
//   {
//     console.log(err);
//   }
//   else
//   {
//     console.log("It's gone man");
//   }
// });
