# Code Summary: UPDATE in MongoDB

## Insert a Single Record

In SQL, we use `UPDATE` to update a record. In the following example, we’re updating a record in the sales table, where the id is equal to 1234567, to set the store location to London.

`UPDATE sales SET storeLocation = 'London' WHERE id = '1234567';`

We can do the same thing in MongoDB by using the `updateOne()` method:

```
db.sales.updateOne(
{ _id: ObjectId("5bd761dcae323e45a93ccff1") },
{ $set: { storeLocation: "London" } }
);
```

If you want to update a document that may not already exist, you can optionally include it by setting the upsert option to true:

```
db.sales.updateOne(
{ _id: ObjectId("5bd761dcae323e45a93ccab2") },
{ $set: { storeLocation: "London" } },
{ upsert: true }
);
```

## Update Multiple Records

In SQL, updating multiple records is similar to our first example where we updated a single record. Here, we're updating all records for purchases made online to indicate that they also used a coupon:

`UPDATE sales SET couponUsed = true WHERE purchaseMethod = 'Online';`
To perform this same action in MongoDB, we use the `updateMany()` method with a filter and the $set method:

```
db.sales.updateMany(
{ purchaseMethod: "Online" },
{ $set: { couponUsed: true } }
);
```
