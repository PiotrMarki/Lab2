// 🔄 Refactoro the Changer  
// Przenieś teraz odpowiednie wywołania logów z routing.js i zastąp tam logowanie bezpośrednie wywołaniem tych funkcji.

const getInfoLog = (message) => {
  console.log(
    `INFO (${new Date(Date.now()).toUTCString()}): ${message}`
  );
};

const getErrorLog = (message) => {
  console.warn(
    `ERROR (${new Date(
      Date.now()
    ).toUTCString()}): requested url ${message} doesn't exist.`
  );
};

const getProcessLog = (message) => {
  console.log(
    `PROCESS (${new Date(
      Date.now()
    ).toUTCString()}): logout has been initiated and the application will be closed.`
  );
};

module.exports = {
  getInfoLog,
  getErrorLog,
  getProcessLog,
};


