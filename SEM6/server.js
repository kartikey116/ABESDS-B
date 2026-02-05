const fs = require("fs");
const fsPromises = require("fs/promises");

const FILE = "data.json";

async function createFile() {
  const data = [
    { id: 1, name: "Kartikey", role: "Developer" }
  ];

  await fsPromises.writeFile(FILE, JSON.stringify(data, null, 2));
  console.log("File created");
}

async function readFile() {
  const data = await fsPromises.readFile(FILE, "utf-8");
  console.log("File data:", JSON.parse(data));
}

async function addUser(user) {
  const data = await fsPromises.readFile(FILE, "utf-8");
  const users = JSON.parse(data);

  users.push(user);

  await fsPromises.writeFile(FILE, JSON.stringify(users, null, 2));
  console.log("User added");
}

async function updateUser(id, newName) {
  const data = await fsPromises.readFile(FILE, "utf-8");
  const users = JSON.parse(data);

  const updated = users.map(u =>
    u.id === id ? { ...u, name: newName } : u
  );

  await fsPromises.writeFile(FILE, JSON.stringify(updated, null, 2));
  console.log("User updated");
}

async function deleteUser(id) {
  const data = await fsPromises.readFile(FILE, "utf-8");
  const users = JSON.parse(data);

  const filtered = users.filter(u => u.id !== id);

  await fsPromises.writeFile(FILE, JSON.stringify(filtered, null, 2));
  console.log("User deleted");
}

function checkFile() {
  if (fs.existsSync(FILE)) {
    console.log("File exists");
  } else {
    console.log("File not found");
  }
}

async function renameFile() {
  await fsPromises.rename(FILE, "users.json");
  console.log("File renamed");
}

async function run() {
  await createFile();
  await readFile();
  await addUser({ id: 2, name: "Amit", role: "Backend" });
  await updateUser(1, "Kartikey Upadhyay");
  await deleteUser(2);
  checkFile();
}

run();
