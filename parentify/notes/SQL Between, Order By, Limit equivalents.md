# Code Summary: BETWEEN, ORDER BY, LIMIT in MongoDB

In SQL, we can specify an order for our results by using `ORDER BY`. For example, in the following SQL statement, we’re selecting every record’s city, state, and population from the zips table, where the state is New York, and the population is between 1000 and 5000. We also want to order the results by population in descending order and limit it to the first 10 results. To do this, we use `ORDER BY` along with `BETWEEN` and `LIMIT`.

```
SELECT city, state, pop
FROM zips
WHERE state = 'NY' AND pop BETWEEN 1000 AND 5000
ORDER BY pop DESC
LIMIT 10;
```

The MongoDB equivalent of `SELECT` is the `find()` method. We can create the equivalent command by passing in a filter to select documents where the state is New York, and the population is between 1000 and 5000. We can also sort the results based on population by appending the `sort()` method to our query. Then, we use the `limit()` method to determine how many results to return:

```
db.zips.find(
    { state: "NY", pop: { $gte: 1000, $lte: 5000 }}
    ).sort({pop: -1})
    .limit(10)
```

Now, let’s pass in a projection document in MongoDB that excludes the \_id and includes city, state, and population fields:

```
db.zips.find(
    { state: "NY", pop: { $gte: 1000, $lte: 5000 }},
    {_id: 0, state: 1, city: 1, pop: 1}
    ).sort({pop: -1})
    .limit(10)
```
