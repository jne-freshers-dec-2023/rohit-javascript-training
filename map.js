let john = {name: 'John Doe'},
    lily = {name: 'Lily Bush'},
    peter = {name: 'Peter Drucker'};


let userRoles = new Map();
userRoles.set(john, 'admin');
userRoles.set(lily, 'editor')
          .set(peter, 'subscriber');
console.log(userRoles.get(john));

let userRoles1 = new Map([
            [john, 'admin'],
            [lily, 'editor'],
            [peter, 'subscriber']
        ]);

        console.log(userRoles.size);

for (const user of userRoles.keys()) {
        console.log(user.name);
      }

