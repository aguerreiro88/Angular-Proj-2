exports.up = function (db, next) {
 
  db.createCollection("tickets");
  const tickets = [
    {
      id: "T-0001",
      title: "Computer not working",
      priority: "High",
      reason: "Work",
      description: "My computer is not working, please help me!!",
      creationDate: new Date(2020, 09, 10),
    },
    {
      id: "T-0002",
      title: "Its raining",
      priority: "Low",
      reason: "Weather",
      description: "Its raining a lot, where can I get an umbrella?",
      creationDate: new Date(2020, 09, 11),
    },
    {
      id: "T-0003",
      title: "Dead Keyboard",
      priority: "Medium",
      reason: "Work",
      description: "Need new keyboard",
      creationDate: new Date(2020, 09, 12),
    },
    {
      id: "T-0004",
      title: "Headset request",
      priority: "Low",
      reason: "Work",
      description: "Where can I get a new headset?",
      creationDate: new Date(2020, 09, 13),
    },
    {
      id: "T-0005",
      title: "Bike disappear",
      priority: "Medium",
      reason: "World",
      description: "My bike disappear, can anyone help me to find it back?",
      creationDate: new Date(2020, 09, 12),
    },
    {
      id: "T-0006",
      title: "Halloween costume",
      priority: "Medium",
      reason: "World",
      description: "What is the better Holloweenn costume?",
      creationDate: new Date(2020, 09, 15),
    },
    {
      id: "T-0007",
      title: "Broken chair",
      priority: "High",
      reason: "Work",
      description: "My chair is broken, can you please help me get a new one?",
      creationDate: new Date(2020, 08, 20),
    },
    {
      id: "T-0008",
      title: "Neighbors complain",
      priority: "High",
      reason: "World",
      description: "My neighbors play music to lowd, please help me!!",
      creationDate: new Date(2020, 09, 12),
    },
    {
      id: "T-0009",
      title: "New IOS version",
      priority: "Low",
      reason: "Work",
      description: "Need help to install the IOS version in my phone.",
      creationDate: new Date(2020, 08, 25),
    },
    {
      id: "T-0010",
      title: "Eggs recipes",
      priority: "Low",
      reason: "World",
      description: "What are the best eggs recipes for breakfast?",
      creationDate: new Date(2020, 09, 09),
    },
    {
      id: "T-0011",
      title: "Car broken",
      priority: "High",
      reason: "World",
      description: "Broke my car need help to repair.",
      creationDate: new Date(2020, 09, 18),
    },
    {
      id: "T-0012",
      title: "Best restaurants",
      priority: "Medium",
      reason: "World",
      description: "Where can I find the best restaurants in town",
      creationDate: new Date(2020, 09, 12),
    },
    {
      id: "T-0013",
      title: "My dog run away",
      priority: "High",
      reason: "World",
      description: "Please help me find my dog",
      creationDate: new Date(2020, 09, 01),
    },
    {
      id: "T-0014",
      title: "Dead Screen",
      priority: "High",
      reason: "Work",
      description: "Need new screen",
      creationDate: new Date(2020, 09, 10),
    },
    {
      id: "T-0015",
      title: "Dead Mouse",
      priority: "High",
      reason: "Work",
      description: "Need new mouse",
      creationDate: new Date(2020, 09, 10),
    },
    {
      id: "T-0016",
      title: "Broken Coffee Machine",
      priority: "High",
      reason: "Work",
      description: "The coffee machine is broken. Can you please help?",
      creationDate: new Date(2020, 09, 10),
    },
  ];
  db.collection("tickets").insertMany(tickets, (err, res) => {
    if (err) {
      console.log(err);
    }
    db.close();
  });

  delete db.migrations;

  db.createCollection("messages");
  const messages = [
    {
      ticket_id: "T-0001",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 10),
    },
    {
      ticket_id: "T-0001",
      messageText:
        "We are currently checking your equipment.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 11),
    },
    {
      ticket_id: "T-0001",
      messageText:
        "We verified that your computer is dead, will provide a new one.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 12),
    },
    {
      ticket_id: "T-0002",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_200",
      creationDate: new Date(2020, 09, 11),
    },
    {
      ticket_id: "T-0003",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 12),
    },
    {
      ticket_id: "T-0004",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 13),
    },
    {
      ticket_id: "T-0005",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 12),
    },
    {
      ticket_id: "T-0006",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 15),
    },
    {
      ticket_id: "T-0007",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 08, 20),
    },
    {
      ticket_id: "T-0008",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 12),
    },
    {
      ticket_id: "T-0009",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 08, 25),
    },
    {
      ticket_id: "T-0010",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 09),
    },
    {
      ticket_id: "T-0011",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 18),
    },
    {
      ticket_id: "T-0012",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 12),
    },
    {
      ticket_id: "T-0013",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 01),
    },
    {
      ticket_id: "T-0014",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 10),
    },
    {
      ticket_id: "T-0015",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 10),
    },
    {
      ticket_id: "T-0016",
      messageText:
        "Thanks For your contact, we will reach you as soon as possible.",
      userName: "user_300",
      creationDate: new Date(2020, 09, 10),
    },
  ];
  db.collection("messages").insertMany(messages, (err, res) => {
    if (err) {
      console.log(err);
    }
    db.close();
  });

  next();
};

exports.down = function (db, next) {
  db.collection("migrations").drop();
  db.collection("tickets").drop();
  db.collection("messages").drop();
  next();
};
