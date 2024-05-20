# Code Summary: SQL SELECT in MongoDB

## Query for One Record

In SQL, we use the SELECT statement to query for specific records in the database:

-   `SELECT` chooses which fields to include in the output.
-   `FROM` chooses which table to select from.
-   `LIMIT` chooses how many records to return.
    In the following example, we’re selecting the city and state fields from one entry in the zips table:

`SELECT city, state FROM zips LIMIT 1;`
To perform the same action in MongoDB, we use the `findOne()` method to return a single document from the zips collection.

`db.zips.findOne({})`

## Query for Multiple Records

To query for more than one record in SQL, we use the `SELECT` statement along with a `WHERE` clause. Here, we’re selecting the city from the zips table where the state is equal to AZ, and the population is less than 500:

`SELECT city FROM zips WHERE state = 'AZ' AND pop < 500;`

Now, let’s do the same thing in MongoDB by providing a filter document to the `find()` method:

`db.zips.find({state: 'AZ', pop: {$lt: 500}})`

## Use Projection to Modify Output

Let’s build on the previous query by returning the city field of every document. To do this in MongoDB, we would use a projection document like this:

`db.zips.find({state: 'AZ', pop: {$lt: 500}}, {_id: 0, city: 1})`

## Explain a Query

If we want to better understand a query in SQL, we place the EXPLAIN keyword in front of our query. For example:

```
EXPLAIN SELECT city, state, pop
            FROM zips
WHERE state = 'NY' AND pop BETWEEN 1000 AND 5000
ORDER BY pop DESC
LIMIT 10;
```

MongoDB has its own explain method. We add the explain() method just before the `find()` command:

```
db.zips.explain().find(
    { state: "NY", pop: { $gte: 1000, $lte: 5000 }},
    {_id: 0, state: 1, city: 1, pop: 1}
    ).sort({pop: -1})
    .limit(10)

```
