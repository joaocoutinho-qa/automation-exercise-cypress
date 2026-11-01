function requiredEnv(name) {
  return cy.env(name).then((value) => {
    if (!value) {
      throw new Error(`Set ${name} in .env before running this test.`);
    }

    return value;
  });
}

module.exports = { requiredEnv };