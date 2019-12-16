
const figlet = require ('figlet');

function createFiglet (text) {
  return new Promise ((res, rej) => {
    figlet (text, (err, data) => {
      if (err || !data) return rej (err);
      res (data);
    });
  });
}

async function createFiglets (texts) {
  const figlets = [];
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    try {
      figlets.push (await createFiglet (text));
    } catch (err) {
      console.error (err);
      process.exit (1);
    }
  }
  return figlets;
}


module.exports = createFiglets