Hooks.on("updateToken", (doc, changes, options, userId) => {
  const actor = doc.actor;

  const currentHp = actor?.system.attribs.hp.value ?? "Current HP not found.";
  console.log(`The Current HP of Actor.${userId} is ${currentHp}`);
})
