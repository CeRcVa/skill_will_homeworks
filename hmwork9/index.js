const validator = require("validator");

const emails = ["test@test.com", "abcDE123"];

emails.forEach(email => {
    console.log(`${email} არის მეილი: ${validator.isEmail(email)}`);
});
