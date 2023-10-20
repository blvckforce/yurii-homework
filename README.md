Dear reviewers, 
I did my best within a limited time i had to implement this assignment,
I hope you'll enjoy reviewing it and want to wish you to have a nice day ☺️

You can just run the following command to get it running in development mode

```npm run dev```

And to build the project just run the following command

```npm run build```

I used RAM as temp storage for user

You can find postman collection for testing in yurii-homework.postman_collection.json


Task Requirements
--------
Hello, this is an exercise to help us get a sense of how you think. Don't worry about knowing the latest trendy tools, but don't be shy to get creative. Your submission will be reviewed by a member of our Engineering team, who will check the implementation for readability, simplicity, durability, and functional completeness.

Bonus points if you use standard ES6 syntax where appropriate. E.g. classes, destructuring assignment, and promises (or async-await).

**Create a REST API server to suggest a random  activity**

    ● Create an Express.js REST API to act as a standalone server with its own port.
    ● Create an GET endpoint called activity which:

            ○ Takes any response from Bored API /api/activity endpoint 
            ○ Maps the “accessibility” of the response to

                    ■ “High” when accessibility <= 0.25
                    ■ “Medium” when 0.25 < accessibility <= 0.75
                    ■ “Low” when accessibility > 0.75 

            ○ Maps the “price’ of the response to

                    ■ “Free” when price = 0
                    ■ “Low” when price <= 0.5
                    ■ “High” when price > 0.5 
Sample GET /activity response:

```
{

"activity": "Learn Express.js",

"accessibility": "High",

Page 1 of 3 "type": "education",

"participants": 1,

"price": "Low",

"link": "https://expressjs.com/",

"key": "3943506"

}
```

**Optional: Create an endpoint to store user proﬁle**

        ● Create a POST endpoint called user which:

                ○ Takes “name”, “accessibility” (High, Medium, or Low), and “price” (Free, Low, or High) in JSON format

                ○ Stores the user proﬁle in a mock DB, feel free to use any DB of your choice.

Once a user proﬁle has been created, the /activity endpoint should now only return activities that ﬁt the user’s requirements. For example, the /activity endpoint should return an activity with accessibility “High” and price “Low” if the current user’s proﬁle has accessibility “High” and price “Low”.

For simplicity, assume that the last saved user is the current user.

Sample POST /user request:

```
{

"name": "John",

"accessibility": "High",

"price": "Free"

}
```
