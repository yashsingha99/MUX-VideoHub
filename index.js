const user = {
  name: "yash",
  price: 999,

  welcomeMessage: function () {
    const g = {
      t: "hello",
      welcomeMessage: function () {
        console.log(this);
      },
    };
    // console.log(`${this.name}, welcome to this channel!`)
  },
};
user.welcomeMessage();
